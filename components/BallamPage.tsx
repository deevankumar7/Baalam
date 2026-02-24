
import React from 'react';
import { ChevronLeft, Users, Sparkles, Heart, Quote, BookCheck, ShieldCheck, Smile, ExternalLink } from 'lucide-react';

const BallamPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const ENROLL_LINK = "https://forms.gle/C6t5knPJiaoqwKXA7";
  const programs = [
    { name: "Playgroup", age: "2 to 3 yrs", desc: "Focus on social interaction and sensory exploration." },
    { name: "Nursery", age: "3 to 4 yrs", desc: "Developing language skills and creative expression." },
    { name: "Pre-Primary", age: "4 to 6 yrs", desc: "Foundational literacy, numeracy, and school readiness." }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="section-container">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-slate-900 mb-12 font-bold text-xs uppercase tracking-widest transition-colors duration-300"
        >
          <ChevronLeft size={16} /> Back to Home
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-24">
          <div className="space-y-10">
            <div>
              <span className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-4 block">Preschool Division</span>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 heading-serif">
                BAALAM Academy
              </h1>
              <p className="text-2xl text-blue-900 font-bold italic mb-8 heading-serif">
                ‘Pratibalam Prati BAALAM’ — Nurturing inner strength.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                The foundational division of the ASK Educational Society, focused on early childhood excellence through a blend of Montessori and play-way pedagogy.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-6 bg-blue-50 border border-blue-100 rounded-2xl">
                <ShieldCheck className="text-blue-700" size={28} />
                <span className="text-sm font-bold text-slate-700">Safe Environment</span>
              </div>
              <div className="flex items-center gap-4 p-6 bg-blue-50 border border-blue-100 rounded-2xl">
                <Smile className="text-blue-700" size={28} />
                <span className="text-sm font-bold text-slate-700">Holistic Care</span>
              </div>
            </div>

            <a 
              href={ENROLL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-slate-900 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-slate-800 transition-colors duration-300 shadow-xl shadow-slate-900/20"
            >
              Enroll for 2026-27 <ExternalLink size={18} />
            </a>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover" 
                alt="Academic Environment" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-[240px]">
              <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-2">Founders' Provision</p>
              <p className="text-slate-900 font-bold text-lg leading-tight heading-serif">5% institutional discount for the first 15 enrollments.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {programs.map((g) => (
            <div key={g.name} className="human-card">
              <h4 className="text-2xl font-bold text-slate-900 mb-3 heading-serif">{g.name}</h4>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-6">{g.age}</p>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">{g.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900 heading-serif mb-16">Advisory Council</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              { author: "Dr. Santa Deepthi Kuppa", title: "Institutional Advisor", quote: "Small changes create the greatest transformations in early development." },
              { author: "Dr. B. Ganesh Kumar", title: "Vice President", quote: "We prioritize self-regulation and physical discipline alongside cognitive growth." }
            ].map((voice, idx) => (
              <div key={idx} className="bg-slate-50 p-12 rounded-[2rem] border border-slate-100 text-left relative">
                <Quote size={40} className="text-blue-100 absolute top-8 right-8" />
                <p className="text-xl text-slate-700 leading-relaxed font-medium mb-8 italic heading-serif">"{voice.quote}"</p>
                <div>
                  <p className="font-bold text-slate-900 text-lg">{voice.author}</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">{voice.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BallamPage;
