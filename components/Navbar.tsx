
import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onNavigate: (path: string) => void;
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPath }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ENROLL_LINK = "https://forms.gle/C6t5knPJiaoqwKXA7";

  const handleLinkClick = (href: string) => {
    onNavigate(href);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div 
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => handleLinkClick('home')}
        >
          <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center p-1 shadow-2xl shadow-orange-500/20 transition-transform group-hover:scale-105">
            <img src="https://storage.googleapis.com/test-api-416107.appspot.com/aistudio/input_file_1.png" alt="ASK" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white heading-serif leading-none tracking-tight">
              ASK & BAALAM
            </span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-orange-500 uppercase mt-1.5">
              EDUCATIONAL SOCIETIES
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <button 
              key={link.label} 
              onClick={() => handleLinkClick(link.href)}
              className={`text-xs font-bold uppercase tracking-widest transition-all relative py-2 ${
                currentPath === link.href ? 'text-orange-500' : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.label.toUpperCase()}
              {currentPath === link.href && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-full" />
              )}
            </button>
          ))}
          <a 
            href={ENROLL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-orange-600 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-orange-500 transition-all flex items-center gap-2 shadow-lg shadow-orange-600/20"
          >
            Enroll Now <ExternalLink size={14} />
          </a>
        </div>

        <button 
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-white/10 px-6 py-12 flex flex-col gap-8 shadow-2xl">
          {NAV_LINKS.map((link) => (
            <button 
              key={link.label} 
              onClick={() => handleLinkClick(link.href)}
              className={`text-xl font-bold uppercase tracking-widest text-left ${
                currentPath === link.href ? 'text-orange-500' : 'text-white'
              }`}
            >
              {link.label.toUpperCase()}
            </button>
          ))}
          <a 
            href={ENROLL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full px-8 py-5 bg-orange-600 text-white text-xs font-bold uppercase tracking-[0.2em] rounded-2xl text-center flex items-center justify-center gap-2 shadow-xl shadow-orange-600/20"
          >
            Enroll Now <ExternalLink size={18} />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
