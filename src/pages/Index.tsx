
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-charcoal text-foreground relative">
      {/* Grain texture overlay */}
      <div className="grain-bg"></div>
      
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pb-8">
        <div className="max-w-md w-full mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="text-5xl sm:text-6xl animate-float">👁️</div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight bg-gradient-to-r from-crimson to-crimson/80 bg-clip-text text-transparent animate-fade-in">The @ Test</h1>
          
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 animate-fade-in [animation-delay:100ms]">Choose Your Identity</h2>
          
          <p className="text-foreground/80 mb-10 animate-fade-in [animation-delay:200ms] max-w-sm mx-auto">
            Select three archetypes to generate a unique persona for storytelling, 
            role-playing, or self-discovery.
          </p>
          
          <button 
            onClick={() => navigate('/selection')} 
            className="btn-primary w-full max-w-xs mx-auto animate-fade-in [animation-delay:300ms] shadow-lg hover:shadow-crimson/20 transition-all"
          >
            Start
          </button>
        </div>
      </main>
      
      <footer className="py-4 px-4 text-center flex flex-col items-center justify-center mt-auto">
        <a href="https://maiba.studio" target="_blank" rel="noopener noreferrer" className="block mb-3 hover:opacity-80 transition-opacity">
          <img 
            src="/lovable-uploads/6b4df03c-dbc9-4186-98fd-d5d03a5575ee.png" 
            alt="Maiba Studio" 
            className="h-12 md:h-14"
          />
        </a>
        <p className="text-xs text-foreground/50">© {new Date().getFullYear()} Maiba Studio - All rights reserved</p>
      </footer>
    </div>
  );
};

export default Index;
