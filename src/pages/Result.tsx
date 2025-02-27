
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import IdentityResult from '@/components/IdentityResult';
import { useArchetype } from '@/context/ArchetypeContext';

const Result = () => {
  const navigate = useNavigate();
  const { generatedIdentity } = useArchetype();
  
  useEffect(() => {
    if (!generatedIdentity) {
      navigate('/selection');
    }
  }, [generatedIdentity, navigate]);
  
  if (!generatedIdentity) {
    return null; // Will be redirected by the useEffect
  }

  return (
    <div className="min-h-screen flex flex-col bg-charcoal text-foreground relative">
      {/* Grain texture overlay */}
      <div className="grain-bg"></div>
      
      <Header />
      
      <main className="flex-1 flex flex-col items-center pt-8 pb-16">
        <IdentityResult identity={generatedIdentity} />
      </main>
      
      <footer className="py-4 px-6 text-center text-xs text-foreground/50">
        <p>© {new Date().getFullYear()} @rchetypeX - All rights reserved</p>
      </footer>
    </div>
  );
};

export default Result;
