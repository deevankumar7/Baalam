
import React, { useState } from 'react';
import { ArrowRight, GraduationCap, School } from 'lucide-react';

interface HeroPortalsProps {
  onNavigate: (path: string) => void;
}

const HeroPortals: React.FC<HeroPortalsProps> = ({ onNavigate }) => {
  const [hovered, setHovered] = useState<'ask' | 'baalam' | null>(null);

  const ENROLL_LINK = "https://forms.gle/C6t5knPJiaoqwKXA7";

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col md:flex-row bg-slate-950">
      {/* ASK Side */}
      <div 
        className={`relative flex-1 flex flex-col items-center justify-center transition-all duration-500 ease-out cursor-pointer group overflow-hidden ${hovered === 'baalam' ? 'md:flex-[0.5]' : hovered === 'ask' ? 'md:flex-[1.5]' : 'md:flex-1'}`}
        onMouseEnter={() => setHovered('ask')}
        onMouseLeave={() => setHovered(null)}
        onClick={() => onNavigate('ask')}
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920" 
            className={`w-full h-full object-cover transition-transform duration-500 ${hovered === 'ask' ? 'scale-105' : 'scale-100'}`}
            alt="ASK"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-950/60 group-hover:bg-slate-950/40 transition-colors duration-500" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center gap-8">
          <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-3xl flex items-center justify-center p-6 shadow-2xl shadow-orange-500/30 transition-all duration-500 group-hover:scale-105">
            <img src="https://storage.googleapis.com/test-api-416107.appspot.com/aistudio/input_file_1.png" alt="ASK" className="w-full h-full object-contain" />
          </div>
          <div className="text-center space-y-2">
            <h2 className="text-5xl md:text-8xl font-bold text-white heading-serif tracking-tighter">ASK</h2>
            <p className="text-orange-500 text-sm md:text-lg font-bold tracking-[0.4em] uppercase">Secondary Excellence</p>
          </div>
        </div>
      </div>

      {/* BAALAM Side */}
      <div 
        className={`relative flex-1 flex flex-col items-center justify-center transition-all duration-500 ease-out cursor-pointer group overflow-hidden border-t md:border-t-0 md:border-l border-white/10 ${hovered === 'ask' ? 'md:flex-[0.5]' : hovered === 'baalam' ? 'md:flex-[1.5]' : 'md:flex-1'}`}
        onMouseEnter={() => setHovered('baalam')}
        onMouseLeave={() => setHovered(null)}
        onClick={() => onNavigate('ballam')}
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&q=80&w=1920" 
            className={`w-full h-full object-cover transition-transform duration-500 ${hovered === 'baalam' ? 'scale-105' : 'scale-100'}`}
            alt="BAALAM"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-950/60 group-hover:bg-slate-950/40 transition-colors duration-500" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-8">
          <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-full flex items-center justify-center p-6 shadow-2xl shadow-blue-500/30 transition-all duration-500 group-hover:scale-105">
            <img src="https://storage.googleapis.com/test-api-416107.appspot.com/aistudio/input_file_0.png" alt="BAALAM" className="w-full h-full object-contain" />
          </div>
          <div className="text-center space-y-2">
            <h2 className="text-5xl md:text-8xl font-bold text-white heading-serif tracking-tighter">BAALAM</h2>
            <p className="text-blue-500 text-sm md:text-lg font-bold tracking-[0.4em] uppercase">Foundational Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPortals;
