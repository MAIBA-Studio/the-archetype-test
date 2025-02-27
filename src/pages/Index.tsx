import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
const Index = () => {
  const navigate = useNavigate();
  return <div className="min-h-screen flex flex-col bg-charcoal text-foreground relative">
      {/* Grain texture overlay */}
      <div className="grain-bg"></div>
      
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pb-8">
        <div className="max-w-md w-full mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="text-5xl sm:text-6xl animate-float">👁️</div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight bg-gradient-to-r from-crimson to-crimson/80 bg-clip-text text-transparent animate-fade-in my-[25px] md:text-4xl">The @ Test</h1>
          
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 animate-fade-in [animation-delay:100ms]">Choose Your Identity</h2>
          
          <p className="text-foreground/70 mb-8 animate-fade-in [animation-delay:200ms]">
            Select three archetypes to generate a unique persona for storytelling, 
            role-playing, or self-discovery.
          </p>
          
          <button onClick={() => navigate('/selection')} className="btn-primary w-full animate-fade-in [animation-delay:300ms]">
            Start
          </button>
        </div>
      </main>
      
      <footer className="py-3 px-4 text-center text-xs text-foreground/50">
        <p>© {new Date().getFullYear()} @rchetypeX - All rights reserved</p>
      </footer>
    </div>;
};
export default Index;