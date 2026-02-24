
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PortalCardProps {
  title: string;
  logoSrc: string;
  bgImg: string;
  onClick: () => void;
  brandColor: 'orange' | 'blue';
}

const PortalCard: React.FC<PortalCardProps> = ({ 
  title, 
  logoSrc,
  bgImg,
  onClick, 
  brandColor,
}) => {
  const isOrange = brandColor === 'orange';
  
  return (
    <button 
      onClick={onClick}
      className="group relative flex-1 flex flex-col items-center justify-center min-h-[50vh] md:min-h-screen overflow-hidden transition-all duration-500 focus:outline-none bg-white border-r border-slate-100 last:border-0"
    >
      <div className="absolute inset-0 z-0">
        <img src={bgImg} alt="" className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-1000" />
        <div className={`absolute inset-0 ${isOrange ? 'bg-orange-50/50' : 'bg-blue-50/50'}`} />
      </div>

      <div className="relative z-10 w-full px-8 flex flex-col items-center">
        <div className="bg-white p-10 sm:p-14 rounded-full border border-slate-100 shadow-md mb-12 transition-transform group-hover:-translate-y-2">
          <img src={logoSrc} alt={title} className="w-40 h-40 sm:w-56 sm:h-56 object-contain" />
        </div>

        <div className="text-center max-w-sm">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight heading-serif uppercase leading-tight">
            {title}
          </h2>
          <div className="mt-6 flex flex-col items-center gap-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              {isOrange ? 'Secondary & Higher Education' : 'Early Childhood Development'}
            </p>
            <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border ${isOrange ? 'border-orange-200 text-orange-700 bg-orange-50' : 'border-blue-200 text-blue-700 bg-blue-50'}`}>
              Access Division <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default PortalCard;