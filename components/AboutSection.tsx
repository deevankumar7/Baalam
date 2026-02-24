
import React from 'react';
import { History, Users, BookOpen, GraduationCap } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="section-container relative z-10">
        {/* Founders Section */}
        <div className="mb-24">
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[3rem] overflow-hidden mb-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] group">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                alt="Founders" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-white font-bold italic text-2xl md:text-3xl leading-tight heading-serif max-w-3xl">
                  "Late VGK Murthy garu & V Sarada garu — The founding President and Vice President of ASK EDUCATIONAL SOCIETY"
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div>
              <span className="text-orange-600 text-sm font-bold uppercase tracking-[0.3em] mb-6 block">Institutional Profile</span>
              <h2 className="text-5xl md:text-7xl font-bold text-slate-900 heading-serif leading-tight">
                Our Story & Legacy
              </h2>
              <div className="mt-12 space-y-10 text-xl text-slate-600 leading-relaxed font-medium">
                <p>
                  ASK EDUCATIONAL SOCIETY started as an afterschool program to coach students in Higher order thinking skills. The founder wanted to get away from the corporate coaching market as Chemistry teacher for over a decade. Her Parents especially her father and mentor, Vegaraju Gopala Krishna Murthygaru encouraged her by vacating tenants from a wing of their parental house and giving her the much needed confidence and the cash out of his pocket to start ASK.
                </p>
                <p>
                  VGK Murthy garu, an electrical engineer himself post his retirement as Dy.Director of DGE&T started his own ITI to help the underserved with courses on Electrical and Mechanical Trade to help employability. In early 21st century demand for engineers and engineering courses across India was high but preparation for the same at High school level was poor. ASK EDUCATIONAL SOCIETY was born to address the gap between aspirations and achievement in high school students.
                </p>
                <p>
                  A journey that started in 2007 has seen successful batches of students passing our every year to go on to become highly successful in their careers. Students from over 50 schools across all the popular boards SSC, CBSE and ICSE use to come to her for guidance. This seeded a strong sense of purpose in VL Padmaja - why wait till children come to high school, why don't we contribute right from early education levels itself.
                </p>
                <p className="italic text-slate-500 border-l-8 border-orange-500/20 pl-8 py-2">
                  "Building on 17 years of academic excellence, 'BAALAM' marks ASK EDUCATIONAL SOCIETY's foray into pre-school and Early Childhood Care and Education in 2025."
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:sticky lg:top-40">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 transition-all">
              <GraduationCap className="text-orange-600 mb-8" size={40} />
              <h5 className="font-bold text-slate-900 mb-4 text-2xl heading-serif">Academic Leadership</h5>
              <p className="text-slate-500 text-base leading-relaxed font-medium">Led by V. Lakshmi Padmaja (M.Sc. M.Ed.), following strict pedagogical standards.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 transition-all">
              <BookOpen className="text-blue-600 mb-8" size={40} />
              <h5 className="font-bold text-slate-900 mb-4 text-2xl heading-serif">Pedagogical Framework</h5>
              <p className="text-slate-500 text-base leading-relaxed font-medium">Focus on 'Higher Order Thinking Skills' (HOTS) and integrated IIT Foundation principles.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 transition-all">
              <History className="text-slate-900 mb-8" size={40} />
              <h5 className="font-bold text-slate-900 mb-4 text-2xl heading-serif">Established 2007</h5>
              <p className="text-slate-500 text-base leading-relaxed font-medium">Building on 17 years of academic excellence in after-school education.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 transition-all">
              <Users className="text-slate-900 mb-8" size={40} />
              <h5 className="font-bold text-slate-900 mb-4 text-2xl heading-serif">Community Legacy</h5>
              <p className="text-slate-500 text-base leading-relaxed font-medium">Serving students from over 50 schools across SSC, CBSE, and ICSE boards.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
