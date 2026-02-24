import React from 'react';
import { Trophy, Award, TrendingUp } from 'lucide-react';

const ResultsSection: React.FC = () => {
  const stats = [
    { label: 'Success Rate', value: '98%', icon: <Trophy className="text-orange-600" /> },
    { label: 'Score Improvement', value: '25%+', icon: <TrendingUp className="text-blue-600" /> },
    { label: 'Years of Excellence', value: '17+', icon: <Award className="text-slate-900" /> },
  ];

  const highlights = [
    { year: '2024', achievement: '100% Pass Rate in SSC Board Exams' },
    { year: '2023', achievement: 'Top Ranks in IIT Foundation Level 1' },
    { year: '2022', achievement: '95% Students scored above 90% in Mathematics' },
  ];

  return (
    <section id="results" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mb-24">
          <span className="text-orange-500 text-sm font-bold uppercase tracking-[0.3em] mb-6 block">Our Impact</span>
          <h2 className="text-5xl md:text-7xl font-bold text-white heading-serif leading-tight mb-8">
            Academic Growth & Excellence
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed font-medium">
            We focus on measurable progress and cognitive development, ensuring every student achieves their personal best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-12 rounded-[2.5rem] text-center transition-all duration-500">
              <div className="w-20 h-20 bg-orange-500/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
                {React.cloneElement(stat.icon as React.ReactElement, { size: 40, className: 'text-orange-500' })}
              </div>
              <div className="text-6xl font-bold text-white mb-3 heading-serif">{stat.value}</div>
              <div className="text-orange-500 font-bold uppercase tracking-[0.2em] text-[10px]">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="bg-slate-900 text-white px-12 py-10">
            <h3 className="text-3xl font-bold heading-serif">Academic Milestones</h3>
          </div>
          <div className="divide-y divide-slate-100">
            {highlights.map((item, idx) => (
              <div key={idx} className="px-12 py-10 flex flex-col md:flex-row md:items-center gap-10 group hover:bg-slate-50 transition-colors">
                <span className="text-orange-600 font-bold text-3xl md:w-40 heading-serif">{item.year}</span>
                <p className="text-slate-800 font-bold text-2xl leading-snug">{item.achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
