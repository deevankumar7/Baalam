
import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-footer" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-footer)" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="space-y-10">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center p-2 shadow-2xl shadow-white/5">
                <img src="https://storage.googleapis.com/test-api-416107.appspot.com/aistudio/input_file_1.png" alt="ASK" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white heading-serif leading-none tracking-tight">ASK & BAALAM</span>
                <span className="text-[10px] font-bold tracking-[0.3em] text-orange-500 uppercase mt-1.5">Educational Societies</span>
              </div>
            </div>
            <p className="text-lg leading-relaxed font-medium text-slate-500">
              Nurturing inner strength and academic excellence since 2007. Dedicated to foundational and high-school success through structured pedagogical frameworks.
            </p>
            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 transition-all group shadow-2xl"><Facebook size={20} className="text-slate-400 group-hover:text-white transition-colors" /></a>
              <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all group shadow-2xl"><Twitter size={20} className="text-slate-400 group-hover:text-white transition-colors" /></a>
              <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 transition-all group shadow-2xl"><Instagram size={20} className="text-slate-400 group-hover:text-white transition-colors" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-10 uppercase tracking-[0.3em] text-[10px]">Quick Links</h4>
            <ul className="space-y-6 text-xs font-bold uppercase tracking-[0.2em]">
              <li><a href="#about" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#results" className="hover:text-orange-500 transition-colors">Success Stories</a></li>
              <li><a href="#teachers" className="hover:text-orange-500 transition-colors">Our Faculty</a></li>
              <li><a href="#faq" className="hover:text-orange-500 transition-colors">FAQs</a></li>
              <li><a href="#jobs" className="hover:text-orange-500 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-10 uppercase tracking-[0.3em] text-[10px]">Programs</h4>
            <ul className="space-y-6 text-xs font-bold uppercase tracking-[0.2em]">
              <li><a href="#" className="hover:text-orange-500 transition-colors">ASK ACADEMY (VII-X)</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">BAALAM PRESCHOOL</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">IIT Foundation</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">HOTS Coaching</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-10 uppercase tracking-[0.3em] text-[10px]">Registry Office</h4>
            <ul className="space-y-8 text-sm font-bold">
              <li className="flex items-start gap-6">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <MapPin size={24} className="text-orange-600 shrink-0" />
                </div>
                <span className="leading-relaxed text-slate-400">Vidyanagar, Hyderabad,<br />Telangana, India - 500044</span>
              </li>
              <li className="flex items-center gap-6">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <Phone size={24} className="text-orange-600 shrink-0" />
                </div>
                <span className="text-slate-400">+91 92465 43851</span>
              </li>
              <li className="flex items-center gap-6">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <Mail size={24} className="text-orange-600 shrink-0" />
                </div>
                <span className="text-slate-400">askacademy@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em]">
          <p>© 2026 ASK & BAALAM EDUCATIONAL SOCIETIES. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
