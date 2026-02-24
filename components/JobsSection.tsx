
import React from 'react';
import { Briefcase, GraduationCap, Users, ArrowRight, Clock, MapPin } from 'lucide-react';

const JobsSection: React.FC = () => {
  const jobs = [
    {
      title: "Senior Chemistry Faculty",
      type: "Full-time",
      dept: "ASK Academy (Secondary)",
      req: "M.Sc. Chemistry with 5+ years experience in HOTS coaching.",
      hours: "5:30 PM to 8:00 PM"
    },
    {
      title: "Early Childhood Educator",
      type: "Full-time",
      dept: "Baalam Preschool",
      req: "Montessori certified with passion for early development.",
      hours: "8:30 AM to 3:30 PM"
    },
    {
      title: "Academic Coordinator",
      type: "Full-time",
      dept: "Institutional Registry",
      req: "Experience in curriculum planning and parent communication.",
      hours: "9:00 AM to 5:00 PM"
    }
  ];

  return (
    <section id="jobs" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-jobs" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-jobs)" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mb-24">
          <span className="text-orange-600 text-sm font-bold uppercase tracking-[0.3em] mb-6 block">Careers</span>
          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 heading-serif leading-tight mb-8">
            Join our Academic Community
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            We are always looking for dedicated educators who believe in nurturing inner strength and academic rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10">
          {jobs.map((job, idx) => (
            <div 
              key={idx}
              className="bg-white p-12 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-12 group transition-all duration-500 hover:shadow-2xl"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-6 mb-2">
                  <span className="px-5 py-2 bg-slate-50 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] rounded-full border border-slate-100">
                    {job.type}
                  </span>
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-[0.3em]">
                    {job.dept.replace(/ASK Academy/g, 'ASK ACADEMY').replace(/Baalam/g, 'BAALAM')}
                  </span>
                </div>
                <h3 className="text-4xl font-bold text-slate-900 heading-serif group-hover:text-orange-600 transition-colors leading-tight">{job.title}</h3>
                <p className="text-slate-600 text-lg font-medium max-w-2xl leading-relaxed">{job.req.replace(/ASK/g, 'ASK')}</p>
                <div className="flex flex-wrap items-center gap-10 text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em]">
                  <span className="flex items-center gap-3"><Clock size={20} className="text-slate-300" /> {job.hours}</span>
                  <span className="flex items-center gap-3"><MapPin size={20} className="text-slate-300" /> Vidyanagar Campus</span>
                </div>
              </div>
              <button className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-900 group-hover:text-orange-600 transition-all">
                Apply Now <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-24 p-16 bg-slate-950 text-white rounded-[4rem] flex flex-col lg:flex-row items-center justify-between gap-16 shadow-2xl shadow-slate-950/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          
          <div className="flex items-center gap-10 text-left relative z-10">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center text-orange-500 border border-white/10">
              <Users size={40} />
            </div>
            <div>
              <h4 className="text-3xl font-bold heading-serif mb-2">Registry Application</h4>
              <p className="text-slate-400 text-lg font-medium">Candidates are requested to contact the Principal's Office directly.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-12 items-center relative z-10">
             <div className="text-3xl font-bold text-blue-400 heading-serif tracking-tight">+91 92465 43851</div>
             <div className="text-3xl font-bold text-orange-400 heading-serif tracking-tight">+91 89772 24488</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
