
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { Search, Loader2, Database, BookCheck, AlertCircle, Sparkles } from 'lucide-react';

interface AnalysisResult {
  analysis: string;
  suggestions: string[];
}

const AiAdvisor: React.FC = () => {
  const [context, setContext] = useState('');
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!context.trim()) return;
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Academic Planning Inquiry: "${context}". Please provide a pedagogical analysis and specific curriculum suggestions. Output JSON: {"analysis": "...", "suggestions": ["...", "...", "..."]}`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              analysis: { type: Type.STRING },
              suggestions: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
            required: ["analysis", "suggestions"]
          }
        }
      });
      
      const jsonStr = response.text?.trim();
      if (jsonStr) {
        setResult(JSON.parse(jsonStr));
      } else {
        throw new Error("Invalid response format from system.");
      }
    } catch (err) {
      setError("The academic analysis system is currently undergoing maintenance. Please try again later or consult with our faculty directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="advisor" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-advisor" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-advisor)" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div>
              <span className="text-orange-600 text-sm font-bold uppercase tracking-[0.3em] mb-6 block">Academic Intelligence</span>
              <h2 className="text-5xl md:text-7xl font-bold text-slate-900 heading-serif leading-tight">
                Curriculum Planning Assistant
              </h2>
            </div>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              A professional support system designed to assist parents and faculty in evaluating curriculum challenges and aligning them with national pedagogical standards.
            </p>
            <div className="flex items-center gap-6 p-8 bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
               <div className="p-4 bg-slate-50 rounded-2xl">
                 <Database size={32} className="text-slate-400" />
               </div>
               <div>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1.5">System Registry</p>
                 <p className="text-lg font-bold text-slate-900">v4.2-Academic Standards</p>
               </div>
            </div>
          </div>

          <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-10 flex items-center gap-4">
              <BookCheck size={20} className="text-orange-600" /> Planning Input
            </h3>
            <textarea 
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="Describe a subject area or academic challenge for evaluation..."
              className="w-full h-56 bg-slate-50 border border-slate-100 rounded-[2rem] p-8 focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all resize-none text-slate-800 text-lg font-medium mb-10 shadow-inner"
            />
            <button 
              onClick={handleAnalyze}
              disabled={loading || !context.trim()}
              className="w-full bg-slate-950 text-white font-bold uppercase tracking-[0.2em] text-xs py-6 rounded-full hover:bg-slate-900 transition-all flex items-center justify-center gap-4 disabled:opacity-50 shadow-2xl shadow-slate-950/20"
            >
              {loading ? <Loader2 className="animate-spin" size={24} /> : <><Sparkles size={24} className="text-orange-500" /> Generate Evaluation</>}
            </button>
          </div>
        </div>

        {error && (
          <div className="mt-20 p-10 bg-red-50 border border-red-100 rounded-[2.5rem] flex items-center gap-8 text-red-700">
            <div className="p-4 bg-white rounded-2xl shadow-sm">
              <AlertCircle size={32} />
            </div>
            <p className="font-bold text-xl">{error}</p>
          </div>
        )}

        {result && (
          <div className="mt-24 p-16 bg-white rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100">
            <div className="flex items-center gap-4 mb-16">
              <div className="h-1.5 w-16 bg-orange-600 rounded-full" />
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Evaluation Report</h4>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
               <div className="lg:col-span-2">
                  <p className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight heading-serif">
                    {result.analysis.replace(/ASK Academy/g, 'ASK ACADEMY').replace(/Baalam/g, 'BAALAM')}
                  </p>
               </div>
               <div className="space-y-10">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] border-b border-slate-100 pb-6">Recommended Actions</p>
                  <div className="space-y-8">
                    {result.suggestions.map((s, i) => (
                      <div key={i} className="text-lg font-bold text-slate-700 flex items-start gap-6 group">
                        <span className="text-orange-600 font-bold text-sm bg-orange-50 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">0{i+1}</span>
                        <span className="pt-1.5 leading-snug">{s.replace(/ASK Academy/g, 'ASK ACADEMY').replace(/Baalam/g, 'BAALAM')}</span>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AiAdvisor;
