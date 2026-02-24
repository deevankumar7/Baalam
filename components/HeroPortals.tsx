
import React from 'react';
import PortalCard from './PortalCard';

interface HeroPortalsProps {
  onNavigate: (path: string) => void;
}

const HeroPortals: React.FC<HeroPortalsProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-white pt-20">
      <PortalCard 
        title="ASK Academy" 
        logoSrc="ask-logo.png"
        bgImg="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000"
        brandColor="orange"
        onClick={() => onNavigate('ask')}
      />
      <PortalCard 
        title="Baalam Center" 
        logoSrc="baalam-logo.png"
        bgImg="https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=2000"
        brandColor="blue"
        onClick={() => onNavigate('ballam')}
      />
    </section>
  );
};

export default HeroPortals;
