
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <header className="py-5 px-6 relative z-10">
      <div 
        onClick={() => navigate('/')} 
        className="cursor-pointer flex items-center justify-center hover:opacity-90 transition-opacity"
      >
        <h1 className="text-2xl font-bold tracking-tighter text-center bg-gradient-to-r from-crimson to-crimson/80 bg-clip-text text-transparent">
          @rchetypeX
        </h1>
      </div>
    </header>
  );
};

export default Header;
