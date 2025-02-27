import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
const Header: React.FC = () => {
  const navigate = useNavigate();
  return <header className="py-4 px-6">
      <div className="flex justify-center items-center relative">
        <h1 onClick={() => navigate('/')} className="font-bold cursor-pointer text-[#d72638] my-0 text-xl px-0 py-0 text-center">Archetype_</h1>
      </div>
    </header>;
};
export default Header;