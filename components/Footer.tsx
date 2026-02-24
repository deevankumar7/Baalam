
import React from 'react';
import { Phone, MapPin, User, Facebook, Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t-8 border-blue-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center font-black text-slate-900 text-2xl">A</div>
              <div className="flex flex-col">
                <span className="text-xl font-black heading-serif uppercase leading-none tracking-tight">ASK & Baalam</span>
                <span className="text-[10px] font-black tracking-[0.3em] text-orange-500 uppercase mt-1">Educational Societies</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm font-medium leading-relaxed">
              Nurturing inner strength and academic excellence since 1994. Dedicated to foundational and high-school success.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors"><Facebook size={18} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-pink-600 transition-colors"><Instagram size={18} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-700 transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Leadership */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-orange-500">Leadership</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <User size={18} className="text-slate-500 mt-1" />
                <div>
                  <p className="text-sm font-black">Vegaraju Lakshmi Padmaja</p>
                  <p className="text-xs text-slate-500 font-bold">Principal & Director (M.Sc. M.Ed.)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500">Institutional Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-slate-500" />
                <span className="text-sm font-bold text-slate-300">92465 43851 / 89772 24488</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-slate-500" />
                <span className="text-sm font-bold text-slate-300">askacademy@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-slate-500 mt-1" />
                <span className="text-sm font-bold text-slate-300">Vidyanagar, Hyderabad-500044</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Quick Access</h4>
            <ul className="space-y-3 text-sm font-bold text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors">About our Society</a></li>
              <li><a href="#jobs" className="hover:text-white transition-colors">Career Opportunities</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Registry</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest text-center md:text-left">
            © 2025 ASK & Baalam Educational Societies. All Rights Reserved.
          </p>
          <p className="text-[10px] font-bold text-slate-700">
            Vidyanagar, Hyderabad 500044
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
