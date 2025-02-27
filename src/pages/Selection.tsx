
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import ArchetypeSelect from '@/components/ArchetypeSelect';
import { useArchetype } from '@/context/ArchetypeContext';

const Selection = () => {
  const navigate = useNavigate();
  const { generateArchetype, allArchetypesSelected } = useArchetype();

  const handleReveal = () => {
    generateArchetype();
    navigate('/result');
  };

  return (
    <div className="min-h-screen flex flex-col bg-charcoal text-foreground relative">
      {/* Grain texture overlay */}
      <div className="grain-bg"></div>
      
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-8">
        <div className="w-full max-w-lg mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">
            Select Your Archetypes
          </h2>
          
          <div className="neo-card p-4 sm:p-6 md:p-8 mb-6">
            <div className="space-y-5">
              <ArchetypeSelect 
                type="foundation" 
                label="Foundation"
              />
              
              <ArchetypeSelect 
                type="expression" 
                label="Expression" 
              />
              
              <ArchetypeSelect 
                type="function" 
                label="Function"
              />
            </div>
          </div>
          
          <button
            onClick={handleReveal}
            disabled={!allArchetypesSelected}
            className={`btn-primary w-full ${!allArchetypesSelected ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Reveal @rchetype
          </button>
        </div>
      </main>
      
      <footer className="py-3 px-4 text-center text-xs text-foreground/50">
        <p>© {new Date().getFullYear()} @rchetypeX - All rights reserved</p>
      </footer>
    </div>
  );
};

export default Selection;
