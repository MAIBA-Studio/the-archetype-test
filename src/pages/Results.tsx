
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import ResultsView from '@/components/ResultsView';
import { useTest } from '@/context/TestContext';

const Results = () => {
  const navigate = useNavigate();
  const { results, resetTest } = useTest();

  useEffect(() => {
    // If no results, redirect to the test
    if (!results) {
      navigate('/test');
    }
  }, [results, navigate]);

  const handleRetake = () => {
    resetTest();
    navigate('/test');
  };

  if (!results) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-50">
      <Header />
      
      <main className="flex-1 pt-28 px-6 pb-16">
        <ResultsView 
          results={results}
          onRetake={handleRetake}
        />
      </main>
      
      <footer className="py-8 px-6 border-t">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-semibold tracking-tight mb-4 md:mb-0">
            <span className="font-bold">Persona</span>
            <span className="font-light">Lens</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PersonaLens. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Results;
