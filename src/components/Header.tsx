
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

const Header: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <header className="py-4 px-5 flex items-center justify-between relative z-10 text-white">
      <div 
        onClick={() => navigate('/')} 
        className="cursor-pointer font-bold text-lg"
      >
        @rchetypeX
      </div>
      <div 
        onClick={() => navigate('/')}
        className="cursor-pointer p-1"
      >
        <X size={20} />
      </div>
    </header>
  );
};

export default Header;
