
import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (path: string) => void;
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPath }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (href: string) => {
    onNavigate(href);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div 
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => handleLinkClick('home')}
        >
          <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center border border-slate-100 p-1">
            <img src="ask-logo.png" alt="ASK" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-slate-900 heading-serif leading-none">
              ASK & Baalam
            </span>
            <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mt-1">
              Educational Societies
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <button 
              key={link.label} 
              onClick={() => handleLinkClick(link.href)}
              className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                currentPath === link.href ? 'text-blue-900' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button 
          className="lg:hidden p-2 text-slate-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-8 flex flex-col gap-4 shadow-lg">
          {NAV_LINKS.map((link) => (
            <button 
              key={link.label} 
              onClick={() => handleLinkClick(link.href)}
              className={`text-lg font-bold uppercase tracking-widest text-left py-2 ${
                currentPath === link.href ? 'text-blue-900' : 'text-slate-600'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
