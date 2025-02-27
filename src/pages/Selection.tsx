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
  return <div className="min-h-screen flex flex-col bg-charcoal text-foreground relative">
      {/* Grain texture overlay */}
      <div className="grain-bg"></div>
      
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-8">
        <div className="w-full max-w-lg mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">Select Your Type</h2>
          
          {/* Progress indicator */}
          <div className="flex items-center justify-between mb-6 px-4">
            <div className="flex flex-col items-center">
              {selectedFoundation ? <CheckCircle className="w-6 h-6 text-crimson" /> : <Circle className="w-6 h-6 text-crimson" />}
              <span className="text-xs mt-1">Foundation</span>
            </div>
            <div className="w-16 h-0.5 bg-gray-700">
              {selectedFoundation && <div className="h-full bg-crimson" style={{
              width: isStepActive('expression') ? '100%' : '0%',
              transition: 'width 0.3s ease'
            }}></div>}
            </div>
            <div className="flex flex-col items-center">
              {selectedExpression ? <CheckCircle className="w-6 h-6 text-crimson" /> : <Circle className={`w-6 h-6 ${isStepActive('expression') ? 'text-crimson' : 'text-gray-700'}`} />}
              <span className="text-xs mt-1">Expression</span>
            </div>
            <div className="w-16 h-0.5 bg-gray-700">
              {selectedExpression && <div className="h-full bg-crimson" style={{
              width: isStepActive('function') ? '100%' : '0%',
              transition: 'width 0.3s ease'
            }}></div>}
            </div>
            <div className="flex flex-col items-center">
              {selectedFunction ? <CheckCircle className="w-6 h-6 text-crimson" /> : <Circle className={`w-6 h-6 ${isStepActive('function') ? 'text-crimson' : 'text-gray-700'}`} />}
              <span className="text-xs mt-1">Function</span>
            </div>
          </div>
          
          <div className="neo-card p-4 sm:p-6 md:p-8 mb-6">
            <div className="space-y-5">
              <ArchetypeSelect type="foundation" label="Foundation" />
              
              <ArchetypeSelect type="expression" label="Expression" />
              
              <ArchetypeSelect type="function" label="Function" />
            </div>
          </div>
          
          <button onClick={handleReveal} disabled={!allArchetypesSelected} className={`btn-primary w-full ${!allArchetypesSelected ? 'opacity-50 cursor-not-allowed' : 'animate-pulse'}`}>
            {allArchetypesSelected ? 'Reveal @rchetype' : 'Complete All Selections'}
          </button>
        </div>
      </main>
      
      <footer className="py-3 px-4 text-center text-xs text-foreground/50">
        <p>© {new Date().getFullYear()} @rchetypeX - All rights reserved</p>
      </footer>
    </div>;
};
export default Selection;