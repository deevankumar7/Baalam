
import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface GenericPageProps {
  title: string;
  onBack: () => void;
}

const GenericPage: React.FC<GenericPageProps> = ({ title, onBack }) => {
  return (
    <div className="min-h-screen pt-32 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-4xl mx-auto glass rounded-[3rem] p-12 md:p-24 text-center">
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 group transition-colors"
        >
          <ChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </button>
        <h1 className="text-6xl font-black tracking-tighter uppercase mb-6">{title}</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-8 rounded-full" />
        <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
          This is a cinematic placeholder for the <strong>{title}</strong> experience. 
          We are currently crafting every pixel to ensure it meets our elite standards of excellence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="glass p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
              <div className="w-12 h-12 rounded-full bg-white/5 mx-auto mb-4" />
              <div className="h-4 w-3/4 bg-white/10 mx-auto rounded-full mb-2" />
              <div className="h-4 w-1/2 bg-white/5 mx-auto rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenericPage;
