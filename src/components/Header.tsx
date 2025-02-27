import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
const Header: React.FC = () => {
  const navigate = useNavigate();
  return <header className="py-4 px-6">
      <div className="flex justify-between items-center">
        <h1 onClick={() => navigate('/')} className="font-bold cursor-pointer text-[D72638] text-[#d72638]">
          @rchetypeX
        </h1>
        <button onClick={() => navigate('/')} className="text-crimson">
          <X size={24} />
        </button>
      </div>
    </header>;
};
export default Header;