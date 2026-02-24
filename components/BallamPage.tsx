
import React from 'react';
import { ChevronLeft, Users, Sparkles, Heart, Quote, BookCheck } from 'lucide-react';

const BallamPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-32 px-6 pb-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-12 font-bold uppercase text-[10px] tracking-widest transition-all"
        >
          <ChevronLeft size={16} /> Return to Institutional Registry
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="space-y-10">
            <div className="w-48 h-48 p-8 bg-white border border-slate-100 shadow-md rounded-full flex items-center justify-center">
              <img src="baalam-logo.png" alt="Baalam Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="text-blue-800 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Preschool Division</span>
              <h1 className="text-5xl sm:text-7xl font-bold text-slate-900 heading-serif mb-6 leading-tight">
                Baalam Academy
              </h1>
              <p className="text-xl text-blue-900 font-bold italic mb-6">
                ‘Pratibalam Prati Baalam’ — Nurturing inner strength.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                The foundational division of the ASK Educational Society, focused on early childhood excellence through a blend of Montessori and play-way pedagogy.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Admissions Timeline</h3>
              <p className="text-2xl font-bold text-slate-900 mb-2">Enrollment Open: Jan 23, 2026</p>
              <p className="text-slate-600 text-sm font-medium">Founders' Provision: 5% institutional discount for the first 15 enrollments.</p>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover rounded-xl" alt="Academic Environment" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { name: "Playgroup", age: "2 to 3 yrs" },
            { name: "Nursery", age: "3 to 4 yrs" },
            { name: "Pre-Primary", age: "4 to 6 yrs" }
          ].map((g) => (
            <div key={g.name} className="p-8 border border-slate-100 rounded-xl bg-white shadow-sm text-center">
              <h4 className="text-xl font-bold text-slate-900 mb-2">{g.name}</h4>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{g.age}</p>
            </div>
          ))}
        </div>

        <div className="mb-24 text-center">
          <h2 className="text-3xl font-bold text-slate-900 heading-serif mb-12">Advisory Council</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { author: "Dr. Santa Deepthi Kuppa", title: "Institutional Advisor", quote: "Small changes create the greatest transformations in early development." },
              { author: "Dr. B. Ganesh Kumar", title: "Vice President", quote: "We prioritize self-regulation and physical discipline alongside cognitive growth." }
            ].map((voice, idx) => (
              <div key={idx} className="bg-white p-10 rounded-xl border border-slate-100 shadow-sm text-left">
                <Quote size={24} className="text-slate-200 mb-6" />
                <p className="text-sm text-slate-700 leading-relaxed font-bold mb-6 italic">"{voice.quote}"</p>
                <p className="text-xs font-black text-slate-900 uppercase">{voice.author}</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase mt-1">{voice.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BallamPage;
