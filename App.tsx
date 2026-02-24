
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroPortals from './components/HeroPortals';
import AskPage from './components/AskPage';
import BallamPage from './components/BallamPage';
import AboutSection from './components/AboutSection';
import JobsSection from './components/JobsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResultsSection from './components/ResultsSection';
import TeachersSection from './components/TeachersSection';
import FaqSection from './components/FaqSection';
import TestimonialsSection from './components/TestimonialsSection';
import BrochureSection from './components/BrochureSection';
import AiAdvisor from './components/AiAdvisor';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>('home');

  const handleNavigate = (path: string) => {
    if (path === 'home') {
      setCurrentPath('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    if (path === 'ask' || path === 'ballam') {
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      setCurrentPath('home');
      setTimeout(() => {
        const el = document.getElementById(path);
        if (el) {
          const navHeight = 96; // Height of the navbar
          const target = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
          window.scrollTo({ top: target, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const renderContent = () => {
    switch (currentPath) {
      case 'ask':
        return <AskPage onBack={() => handleNavigate('home')} />;
      case 'ballam':
        return <BallamPage onBack={() => handleNavigate('home')} />;
      default:
        return (
          <>
            <HeroPortals onNavigate={handleNavigate} />
            <AboutSection />
            <ResultsSection />
            <BrochureSection />
            <TeachersSection />
            <TestimonialsSection />
            <FaqSection />
            <AiAdvisor />
            <JobsSection />
            <ContactSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen relative text-slate-950 selection:bg-orange-600/10 font-sans">
      <Navbar onNavigate={handleNavigate} currentPath={currentPath} />
      <main className="relative z-10">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
