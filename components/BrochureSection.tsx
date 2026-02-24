
import React from 'react';
import { PROGRAMS } from '../constants';
import { ChevronRight, BookOpen, ArrowRight } from 'lucide-react';

const BrochureSection: React.FC = () => {
  return (
    <section id="brochure" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-orange-500/5 to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <span className="text-orange-600 text-sm font-bold uppercase tracking-[0.3em] mb-6 block">Our Curriculum</span>
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 heading-serif leading-tight mb-8">
              Academic Roadmap <span className="text-slate-300 font-sans text-4xl font-light italic">(Grades VII-X)</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              A structured roadmap designed to transition students from core concepts to global leadership through inquiry and HOTS development.
            </p>
          </div>
          <button className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-900 hover:text-orange-600 transition-colors">
            Full Curriculum <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {PROGRAMS.map((program, idx) => (
            <div 
              key={program.id} 
              className="bg-white p-12 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 group cursor-pointer flex flex-col justify-between transition-all duration-500 hover:shadow-2xl"
            >
              <div>
                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mb-10 text-slate-400 group-hover:bg-orange-50 group-hover:text-orange-600 transition-all duration-500">
                  <BookOpen size={36} />
                </div>
                <span className="inline-block px-6 py-2 rounded-full bg-slate-100 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 text-slate-500">
                  Grade {program.grade}
                </span>
                <h3 className="text-4xl font-bold mb-6 text-slate-900 heading-serif group-hover:text-orange-600 transition-colors leading-tight">{program.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-12 font-medium">
                  {program.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-10 border-t border-slate-50">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
                  Phase {idx + 1}
                </span>
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                  <ChevronRight size={28} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrochureSection;
