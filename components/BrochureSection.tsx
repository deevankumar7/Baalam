
import React from 'react';
import { PROGRAMS } from '../constants';
import { ChevronRight } from 'lucide-react';

const BrochureSection: React.FC = () => {
  return (
    <div id="brochure" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
              Ask Brochure <span className="text-gray-600">(7 to 10<sup>th</sup>)</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl font-light">
              Our academic roadmap designed to transition students from core concepts to global leadership through structured inquiry.
            </p>
          </div>
          <button className="group flex items-center gap-2 text-lg font-semibold hover:text-cyan-400 transition-colors">
            View All Programs <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((program, idx) => (
            <div 
              key={program.id} 
              className={`group relative overflow-hidden glass rounded-3xl p-8 h-[400px] flex flex-col justify-between hover:border-white/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${program.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <span className="inline-block px-4 py-1 rounded-full border border-white/20 text-xs font-bold tracking-widest uppercase mb-6 bg-black/40">
                  Grade {program.grade}
                </span>
                <h3 className="text-3xl font-bold mb-4">{program.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  {program.description}
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                  Level {idx + 1}
                </span>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ChevronRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrochureSection;
