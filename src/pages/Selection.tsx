
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import ArchetypeSelect from '@/components/ArchetypeSelect';
import { useArchetype } from '@/context/ArchetypeContext';
import { CheckCircle, Circle } from 'lucide-react';

const Selection = () => {
  const navigate = useNavigate();
  const {
    generateArchetype,
    allArchetypesSelected,
    selectedFoundation,
    selectedExpression,
    selectedFunction,
    isStepActive
  } = useArchetype();

  const handleReveal = () => {
    generateArchetype();
    navigate('/result');
  };

  return (
    <div className="min-h-screen flex flex-col bg-charcoal text-white relative">
      {/* Grain texture overlay */}
      <div className="grain-bg"></div>
      
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
        <div className="w-full max-w-lg mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-white">Select Your Type</h2>
          
          {/* Progress indicator */}
          <div className="flex items-center justify-between mb-8 px-4">
            <div className="flex flex-col items-center">
              {selectedFoundation ? 
                <CheckCircle className="w-6 h-6 text-crimson" /> : 
                <Circle className="w-6 h-6 text-crimson" />
              }
              <span className="text-xs mt-1 font-medium text-white">Foundation</span>
            </div>
            <div className="w-16 h-0.5 bg-gray-700">
              {selectedFoundation && 
                <div 
                  className="h-full bg-crimson" 
                  style={{
                    width: isStepActive('expression') ? '100%' : '0%',
                    transition: 'width 0.3s ease'
                  }}
                ></div>
              }
            </div>
            <div className="flex flex-col items-center">
              {selectedExpression ? 
                <CheckCircle className="w-6 h-6 text-crimson" /> : 
                <Circle className={`w-6 h-6 ${isStepActive('expression') ? 'text-crimson' : 'text-gray-700'}`} />
              }
              <span className="text-xs mt-1 font-medium text-white">Expression</span>
            </div>
            <div className="w-16 h-0.5 bg-gray-700">
              {selectedExpression && 
                <div 
                  className="h-full bg-crimson" 
                  style={{
                    width: isStepActive('function') ? '100%' : '0%',
                    transition: 'width 0.3s ease'
                  }}
                ></div>
              }
            </div>
            <div className="flex flex-col items-center">
              {selectedFunction ? 
                <CheckCircle className="w-6 h-6 text-crimson" /> : 
                <Circle className={`w-6 h-6 ${isStepActive('function') ? 'text-crimson' : 'text-gray-700'}`} />
              }
              <span className="text-xs mt-1 font-medium text-white">Function</span>
            </div>
          </div>
          
          <div className="neo-card p-6 sm:p-8 mb-8 shadow-lg shadow-black/30">
            <div className="space-y-6">
              <ArchetypeSelect type="foundation" label="Foundation" />
              <ArchetypeSelect type="expression" label="Expression" />
              <ArchetypeSelect type="function" label="Function" />
            </div>
          </div>
          
          <button 
            onClick={handleReveal} 
            disabled={!allArchetypesSelected} 
            className={`btn-primary w-full max-w-md mx-auto ${!allArchetypesSelected ? 'opacity-50 cursor-not-allowed' : 'shadow-lg shadow-crimson/10 transform hover:scale-[1.02] transition-all'}`}
          >
            {allArchetypesSelected ? '✨ Reveal Your Archetype ✨' : 'Complete All Selections'}
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
        <p className="text-xs text-white/70">© {new Date().getFullYear()} Maiba Studio - All rights reserved</p>
      </footer>
    </div>
  );
};

export default Selection;
