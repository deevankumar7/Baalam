
import React from 'react';
import { ChevronLeft, CheckCircle2, Rocket, Zap, Star, Calendar, BookOpen, Target, ExternalLink } from 'lucide-react';

const AskPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const ENROLL_LINK = "https://forms.gle/C6t5knPJiaoqwKXA7";
  const phases = [
    {
      name: "SOUMYAA",
      subtitle: "Launch Phase",
      grade: "Class VI & VII",
      icon: <Rocket className="text-blue-600" size={32} />,
      description: "Focuses on building interest and strengthening fundamentals to improve confidence and academic inclination.",
      points: [
        "Improve Attention & Focus",
        "Build Interest & Academic Inclination",
        "Strengthen Fundamentals",
        "Improve Confidence & Motivation"
      ],
      color: "border-blue-100 bg-white"
    },
    {
      name: "SAADHANA",
      subtitle: "2nd Important Phase",
      grade: "Class VIII & IX",
      icon: <Zap className="text-purple-600" size={32} />,
      description: "Integrates IIT Foundation with school syllabus at a steady pace to develop self-discipline.",
      points: [
        "IIT Foundation Integration",
        "School Syllabus with Steady Pace",
        "Develop Self-discipline",
        "SMART Goal Setting"
      ],
      color: "border-purple-100 bg-white"
    },
    {
      name: "SARVAGJNA",
      subtitle: "Crucial Phase",
      grade: "Class X",
      icon: <Star className="text-orange-600" size={32} />,
      description: "Comprehensive coverage and concept mastery to excel in board exams and prepare for intermediate level.",
      points: [
        "Master Fundamental Concepts",
        "Comprehensive Syllabus Coverage",
        "Excel in Board Examinations",
        "Intermediate Level Readiness"
      ],
      color: "border-orange-100 bg-white"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="section-container">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-slate-900 mb-12 font-bold text-xs uppercase tracking-widest transition-all"
        >
          <ChevronLeft size={16} /> Back to Home
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          <div className="lg:col-span-2">
            <span className="text-orange-600 text-sm font-bold uppercase tracking-widest mb-4 block">Secondary Education Division</span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 heading-serif">
              ASK Academy
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">
              Building higher order thinking skills (HOTS) at the high-school level since 2007. We provide a rigorous academic environment for Classes VII to X across SSC, CBSE, and ICSE boards.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-3 px-6 py-3 bg-slate-50 border border-slate-100 rounded-full">
                <Target className="text-orange-600" size={20} />
                <span className="text-sm font-bold text-slate-700">Results Driven</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-slate-50 border border-slate-100 rounded-full">
                <BookOpen className="text-orange-600" size={20} />
                <span className="text-sm font-bold text-slate-700">HOTS Focused</span>
              </div>
            </div>

            <a 
              href={ENROLL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-slate-900 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20"
            >
              Enroll for 2026-27 <ExternalLink size={18} />
            </a>
          </div>

          <div className="bg-orange-50 p-10 rounded-[2rem] border border-orange-100 lg:sticky lg:top-32">
            <div className="flex items-center gap-3 mb-8 text-orange-700 font-bold uppercase tracking-widest text-xs">
              <Calendar size={18} /> Academic Calendar
            </div>
            <div className="space-y-8">
              <div>
                <p className="text-xs text-orange-600/60 font-bold uppercase tracking-wider mb-2">Commencement</p>
                <p className="text-2xl font-bold text-slate-900 heading-serif">27th March '26</p>
              </div>
              <div className="space-y-4">
                <p className="text-xs text-orange-600/60 font-bold uppercase tracking-wider mb-2">Summer Schedule</p>
                <div className="space-y-2">
                  <p className="text-slate-700 font-bold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                    Till 16th May '26
                  </p>
                  <p className="text-slate-700 font-bold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                    Reopens 1st June '26
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase) => (
            <div key={phase.name} className="human-card group">
              <div className="mb-8 flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{phase.grade}</p>
                  <h3 className="text-3xl font-bold text-slate-900 heading-serif">{phase.name}</h3>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl transition-transform duration-500">
                  {phase.icon}
                </div>
              </div>
              <p className="text-slate-600 text-sm mb-8 leading-relaxed font-medium">
                {phase.description}
              </p>
              <ul className="space-y-4">
                {phase.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-orange-600 mt-0.5 shrink-0" />
                    <span className="text-sm font-bold text-slate-700 leading-snug">{point}</span>
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
