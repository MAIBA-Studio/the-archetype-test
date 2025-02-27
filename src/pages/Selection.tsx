
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
      
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-lg mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Select Your Archetypes
          </h2>
          
          <div className="neo-card p-6 md:p-8 mb-8">
            <div className="space-y-6">
              <ArchetypeSelect 
                type="foundation" 
                label="Foundation (Core Persona)"
              />
              
              <ArchetypeSelect 
                type="expression" 
                label="Expression (Identity Modifier)" 
              />
              
              <ArchetypeSelect 
                type="function" 
                label="Function (Specialization)"
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
      
      <footer className="py-4 px-6 text-center text-xs text-foreground/50">
        <p>© {new Date().getFullYear()} @rchetypeX - All rights reserved</p>
      </footer>
    </div>
  );
};

export default Selection;
