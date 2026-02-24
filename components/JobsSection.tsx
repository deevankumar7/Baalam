
import React from 'react';
import { Clock, MapPin, ClipboardList, GraduationCap, Phone } from 'lucide-react';

const JobsSection: React.FC = () => {
  return (
    <section id="jobs" className="py-24 px-6 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-slate-500 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Human Resources</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 heading-serif">Current Academic Vacancies</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-bold text-orange-700 uppercase tracking-widest px-3 py-1 bg-orange-50 rounded-md border border-orange-100">Secondary Division</span>
              <span className="text-xs font-bold text-slate-400">Part-Time</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Teaching Faculty (VII - X)</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                <GraduationCap size={18} className="text-slate-400" />
                Mathematics & Physical Sciences
              </li>
              <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                <Clock size={18} className="text-slate-400" />
                Evening: 5:30 PM to 8:00 PM
              </li>
              <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                <MapPin size={18} className="text-slate-400" />
                Vidyanagar Campus
              </li>
            </ul>
            <p className="text-slate-500 text-xs leading-relaxed italic">Requirement: Candidates should possess strong subject command and communication skills.</p>
          </div>

          <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-bold text-blue-800 uppercase tracking-widest px-3 py-1 bg-blue-50 rounded-md border border-blue-100">Primary Division</span>
              <span className="text-xs font-bold text-slate-400">Full-Time</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Mother Teachers (PP1-PP2)</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                <ClipboardList size={18} className="text-slate-400" />
                Playgroup & Nursery Specialists
              </li>
              <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                <GraduationCap size={18} className="text-slate-400" />
                Min 3+ Yrs Experience Required
              </li>
              <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                <MapPin size={18} className="text-slate-400" />
                Vidyanagar Campus
              </li>
            </ul>
            <p className="text-slate-500 text-xs leading-relaxed italic">Requirement: Enthusiastic candidates with ECCE training preferred.</p>
          </div>
        </div>

        <div className="bg-slate-900 rounded-xl p-8 md:p-12 text-center text-white">
           <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Registry Application</p>
           <p className="text-xl md:text-2xl font-medium mb-8">Candidates are requested to contact the Principal's Office directly for interview scheduling.</p>
           <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-3 text-lg font-bold">
                 <Phone size={20} className="text-blue-400" /> 92465 43851
              </div>
              <div className="h-4 w-px bg-slate-700 hidden md:block"></div>
              <div className="flex items-center gap-3 text-lg font-bold">
                 <Phone size={20} className="text-orange-400" /> 89772 24488
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;