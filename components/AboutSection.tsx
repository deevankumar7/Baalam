
import React from 'react';
import { Target, History, Users, BookOpen, GraduationCap } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div>
              <span className="text-blue-800 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Institutional Profile</span>
              <h2 className="text-4xl sm:text-6xl font-bold text-slate-900 heading-serif leading-tight">
                Our Academic Foundation
              </h2>
              <p className="mt-8 text-xl text-slate-600 leading-relaxed font-medium">
                The ASK Educational Society has been dedicated to academic development since 1994. We specialize in cultivating analytical thinking and higher-order skills through structured pedagogical frameworks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 border border-slate-100 rounded-xl bg-slate-50/50">
                <History className="text-orange-700 mb-6" size={28} />
                <h4 className="text-lg font-bold text-slate-900 mb-3">Established 1994</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Three decades of academic excellence and consistent performance improvement.</p>
              </div>
              <div className="p-8 border border-slate-100 rounded-xl bg-slate-50/50">
                <Users className="text-blue-800 mb-6" size={28} />
                <h4 className="text-lg font-bold text-slate-900 mb-3">Community Legacy</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Serving the educational needs of Vidyanagar and surrounding areas.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-12 rounded-2xl border border-slate-200 shadow-sm">
             <div className="aspect-video rounded-lg overflow-hidden mb-10 shadow-inner bg-white flex items-center justify-center p-6">
               <img src="ask-logo.png" className="w-full h-full object-contain" alt="ASK Logo" />
             </div>
             <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <GraduationCap className="text-slate-400 shrink-0" size={24} />
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Academic Leadership</h5>
                    <p className="text-slate-600 text-sm leading-relaxed">Led by V. Lakshmi Padmaja (M.Sc. M.Ed.), our institution follows strict pedagogical standards aligned with national curriculum frameworks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BookOpen className="text-slate-400 shrink-0" size={24} />
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Pedagogical Framework</h5>
                    <p className="text-slate-600 text-sm leading-relaxed">Focus on 'Higher Order Thinking Skills' (HOTS) and integrated IIT Foundation principles for secondary students.</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
