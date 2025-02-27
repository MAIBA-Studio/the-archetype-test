
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-charcoal text-foreground relative">
      {/* Grain texture overlay */}
      <div className="grain-bg"></div>
      
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center px-6 pb-12">
        <div className="max-w-md w-full mx-auto text-center">
          <div className="text-6xl mb-6">⚠️</div>
          
          <h1 className="text-4xl font-bold mb-6">Page Not Found</h1>
          
          <p className="text-foreground/70 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <button
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            Return Home
          </button>
        </div>
      </main>
      
      <footer className="py-4 px-6 text-center text-xs text-foreground/50">
        <p>© {new Date().getFullYear()} @rchetypeX - All rights reserved</p>
      </footer>
    </div>
  );
};

export default NotFound;
