
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
      
      <main className="flex-1 flex flex-col items-center justify-center px-6 pb-12">
        <div className="max-w-md w-full mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="text-6xl animate-float">⚙️</div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-crimson to-crimson/80 bg-clip-text text-transparent animate-fade-in">
            @rchetypeX
          </h1>
          
          <h2 className="text-2xl font-semibold mb-6 animate-fade-in [animation-delay:100ms]">
            Build Your @rchetype
          </h2>
          
          <p className="text-foreground/70 mb-12 animate-fade-in [animation-delay:200ms]">
            Select three archetypes to generate a unique persona for storytelling, 
            role-playing, or self-discovery.
          </p>
          
          <button
            onClick={() => navigate('/selection')}
            className="btn-primary w-full animate-fade-in [animation-delay:300ms]"
          >
            Start
          </button>
        </div>
      </main>
      
      <footer className="py-4 px-6 text-center text-xs text-foreground/50">
        <p>© {new Date().getFullYear()} @rchetypeX - All rights reserved</p>
      </footer>
    </div>
  );
};

export default Index;
