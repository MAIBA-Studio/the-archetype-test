
import React from 'react';
import { GeneratedIdentity } from '@/lib/archetypes';
import { useArchetype } from '@/context/ArchetypeContext';
import { ArrowLeft, Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface IdentityResultProps {
  identity: GeneratedIdentity;
}

const IdentityResult: React.FC<IdentityResultProps> = ({ identity }) => {
  const { resetSelections } = useArchetype();
  const navigate = useNavigate();

  const handleRestart = () => {
    resetSelections();
    navigate('/selection');
  };

  const handleSave = () => {
    // In a real app, this would save to a database
    toast.success('Identity saved successfully!');
  };

  // Display emojis in their original order
  const displayEmojis = [...identity.emojis];

  return (
    <div className="w-full max-w-sm mx-auto px-4 py-4 animate-fade-in">
      <section id="identity-core" className="text-center mb-8 w-full">
        <div id="glyphs" className="mb-6 flex justify-center gap-4">
          {displayEmojis.map((emoji, index) => (
            <span 
              key={index} 
              className="text-4xl animate-float" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {emoji}
            </span>
          ))}
        </div>
        
        <h2 className="text-3xl font-bold mb-3">{identity.title}</h2>
        
        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          {identity.description}
        </p>
      </section>
      
      <section id="archetype-details" className="w-full space-y-4 mb-8">
        {/* Foundation */}
        <div id="foundation" className="bg-white/5 rounded-xl p-4">
          <h3 className="text-crimson font-semibold mb-2 flex items-center gap-2">
            <span>◉</span> Foundation: {identity.traits[0]}
          </h3>
          <p className="text-gray-300 text-sm">
            The {identity.traits[0]} forms the core of this identity, bringing {identity.traits[1]}-like qualities.
          </p>
        </div>

        {/* Expression */}
        <div id="expression" className="bg-white/5 rounded-xl p-4">
          <h3 className="text-crimson font-semibold mb-2 flex items-center gap-2">
            <span>◉</span> Expression: {identity.traits[2]}
          </h3>
          <p className="text-gray-300 text-sm">
            This identity expresses itself through {identity.traits[2]} methods and {identity.traits[3]} approaches.
          </p>
        </div>

        {/* Function */}
        <div id="function" className="bg-white/5 rounded-xl p-4">
          <h3 className="text-crimson font-semibold mb-2 flex items-center gap-2">
            <span>✧</span> Function: {identity.traits[4]}
          </h3>
          <p className="text-gray-300 text-sm">
            This identity functions with purpose and intention through {identity.traits[4]} specialization.
          </p>
        </div>

        {/* Identity Traits */}
        <div id="identity-traits" className="bg-white/5 rounded-xl p-4 space-y-4">
          {/* Strengths */}
          <div id="strengths">
            <h3 className="text-green-400 text-sm font-semibold mb-2">Strengths</h3>
            <ul className="text-gray-300 text-sm list-disc list-inside">
              {identity.strengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </div>
          
          {/* Challenges */}
          <div id="challenges">
            <h3 className="text-red-400 text-sm font-semibold mb-2">Challenges</h3>
            <ul className="text-gray-300 text-sm list-disc list-inside">
              {identity.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Attributes */}
        <div id="adjectives" className="bg-white/5 rounded-xl p-4">
          <h3 className="text-crimson font-semibold mb-2 flex items-center gap-2">
            <span>✧</span> Key Attributes
          </h3>
          <div className="flex flex-wrap gap-2">
            {identity.traits.map((trait, index) => (
              <span 
                key={index} 
                className="text-xs bg-white/10 px-2 py-1 rounded"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </section>
      
      <section id="action-buttons" className="flex gap-4 w-full">
        <button 
          onClick={handleRestart}
          className="flex-1 bg-transparent border-2 border-crimson text-crimson rounded-xl py-3 font-semibold hover:bg-crimson hover:text-white transition-colors flex items-center justify-center"
        >
          <ArrowLeft size={18} className="mr-2" /> Restart
        </button>
        <button 
          onClick={handleSave}
          className="flex-1 bg-crimson text-white rounded-xl py-3 font-semibold hover:bg-crimson/90 transition-colors flex items-center justify-center"
        >
          <Save size={18} className="mr-2" /> Save
        </button>
      </section>
    </div>
  );
};

export default IdentityResult;
