
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { Search, Loader2, Database, BookCheck } from 'lucide-react';

interface AnalysisResult {
  analysis: string;
  suggestions: string[];
}

const AiAdvisor: React.FC = () => {
  const [context, setContext] = useState('');
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!context.trim()) return;
    setLoading(true);
    setResult(null);
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
        throw new Error("Invalid response");
      }
    } catch (err) {
      setResult({
        analysis: "Institutional analysis currently unavailable. Please verify input parameters.",
        suggestions: ["Consult department head", "Review national curriculum framework", "Audit local classroom metrics"]
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="advisor" className="py-24 px-6 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div>
              <span className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Academic Support Tool</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 heading-serif">
                Curriculum Support System
              </h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              A computerized system designed to assist faculty in aligning local classroom activities with broader institutional and national pedagogical standards.
            </p>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-50 border border-slate-200 rounded-md">
               <Database size={16} className="text-slate-400" />
               <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Registry Reference: V3.0-PRO</span>
            </div>
          </div>

          <div className="bg-slate-50 p-10 rounded-xl border border-slate-200">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
              <BookCheck size={18} /> Planning Input
            </h3>
            <textarea 
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="Enter subject area or curriculum challenge for pedagogical evaluation..."
              className="w-full h-48 bg-white border border-slate-300 rounded-md p-6 focus:ring-4 focus:ring-blue-100 focus:border-blue-700 transition-all resize-none text-slate-800 font-medium mb-6"
            />
            <button 
              onClick={handleAnalyze}
              disabled={loading || !context.trim()}
              className="w-full bg-slate-900 text-white font-bold uppercase tracking-[0.2em] text-xs py-5 rounded-md hover:bg-slate-800 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" size={18} /> : <><Search size={18} /> Process Evaluation</>}
            </button>
          </div>
        </div>

        {result && (
          <div className="mt-20 p-10 bg-white border border-slate-200 rounded-xl animate-in fade-in slide-in-from-bottom-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Evaluation Summary</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               <div className="md:col-span-2">
                  <p className="text-xl font-medium text-slate-800 leading-relaxed italic border-l-4 border-slate-200 pl-6">
                    {result.analysis}
                  </p>
               </div>
               <div className="space-y-4">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Recommended Actions</p>
                  {result.suggestions.map((s, i) => (
                    <div key={i} className="text-sm font-bold text-slate-700 flex items-start gap-2">
                      <span className="text-slate-300">0{i+1}.</span>
                      {s}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AiAdvisor;