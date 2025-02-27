
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

const Header: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <header className="py-4 px-6">
      <div className="flex justify-between items-center">
        <h1 
          onClick={() => navigate('/')} 
          className="text-xl font-bold cursor-pointer"
        >
          @rchetypeX
        </h1>
        <button 
          onClick={() => navigate('/')}
          className="text-crimson"
        >
          <X size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
