
import React from 'react';
import { ChevronLeft, CheckCircle2, Star, Zap, Rocket, Calendar } from 'lucide-react';

const AskPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const phases = [
    {
      name: "SOUMYAA",
      subtitle: "Launch Phase",
      grade: "Class VI & VII",
      icon: <Rocket className="text-blue-600" size={40} />,
      points: [
        "Improve Attention & Focus",
        "Build Interest & Academic Inclination",
        "Strengthen Fundamentals",
        "Improve Confidence & Motivation"
      ],
      color: "border-blue-200 bg-blue-50/30"
    },
    {
      name: "SAADHANA",
      subtitle: "2nd Important Phase",
      grade: "Class VIII & IX",
      icon: <Zap className="text-purple-600" size={40} />,
      points: [
        "IIT Foundation Integration",
        "School Syllabus with Steady Pace",
        "Develop Self-discipline",
        "SMART Goal Setting"
      ],
      color: "border-purple-200 bg-purple-50/30"
    },
    {
      name: "SARVAGJNA",
      subtitle: "Crucial Phase",
      grade: "Class X",
      icon: <Star className="text-orange-600" size={40} />,
      points: [
        "Master Fundamental Concepts",
        "Comprehensive Syllabus Coverage",
        "Excel in Board Examinations",
        "Intermediate Level Readiness"
      ],
      color: "border-orange-200 bg-orange-50/30"
    }
  ];

  return (
    <div className="min-h-screen pt-28 sm:pt-40 px-4 sm:px-8 pb-16 sm:pb-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 sm:gap-3 text-slate-500 hover:text-blue-700 mb-8 sm:mb-16 font-black uppercase text-xs tracking-[0.2em] transition-all"
        >
          <ChevronLeft size={18} /> Back to Selection
        </button>

        <div className="mb-24">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
            <div className="max-w-3xl">
              <span className="text-orange-600 text-sm font-black uppercase tracking-[0.4em] mb-4 block">High School Excellence</span>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-slate-900 heading-serif mb-8 leading-tight">
                ASK Academy
              </h1>
              
              <div className="bg-slate-50 border-2 border-slate-100 p-8 rounded-3xl mb-8">
                 <div className="flex items-center gap-4 mb-4 text-orange-600 font-black uppercase tracking-widest text-xs">
                    <Calendar size={18} /> 2026-2027 Schedule
                 </div>
                 <p className="text-xl font-bold text-slate-900 mb-2">Batches commence on 27th March '26 (Friday)</p>
                 <p className="text-slate-500 font-medium italic">Summer classes till 16th May '26 & reopens on 1st June '26</p>
              </div>

              <p className="text-xl sm:text-2xl text-slate-600 font-medium leading-relaxed">
                Admissions open for Classes VII to X (SSC, CBSE, ICSE). Building higher order thinking skills at the high-school level since 1994.
              </p>
            </div>
            <div className="w-48 h-48 sm:w-72 sm:h-72 p-6 sm:p-10 bg-white border border-slate-100 shadow-edu rounded-2xl flex items-center justify-center shrink-0">
              <img src="ask-logo.png" alt="ASK Logo" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {phases.map((phase) => (
            <div key={phase.name} className={`p-10 rounded-[3rem] border-2 transition-all hover:shadow-xl ${phase.color}`}>
              <div className="mb-8 flex justify-between items-start">
                <div>
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{phase.grade}</h3>
                  <h2 className="text-3xl font-black text-slate-900">{phase.name}</h2>
                </div>
                {phase.icon}
              </div>
              <ul className="space-y-4">
                {phase.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-slate-900 mt-1 shrink-0" />
                    <span className="text-lg font-bold text-slate-700 leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AskPage;
