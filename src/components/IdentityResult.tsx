
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
    <div className="w-full max-w-md mx-auto px-4 py-4 animate-fade-in">
      <div className="flex justify-center mb-6 space-x-6">
        {displayEmojis.map((emoji, index) => (
          <div 
            key={index} 
            className="text-4xl animate-float" 
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {emoji}
          </div>
        ))}
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-white">
        {identity.title}
      </h1>
      
      <p className="text-center text-blue-300/80 mb-6">
        {identity.description}
      </p>

      <div className="space-y-4">
        {/* Foundation */}
        <div className="bg-charcoal rounded-lg border border-white/10 p-4">
          <h3 className="text-crimson font-medium mb-1 flex items-center">
            <span className="mr-2">◉</span> Foundation: {identity.traits[0]}
          </h3>
          <p className="text-sm text-white/80 mb-2">
            The {identity.traits[0]} forms the core of this identity.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-charcoal border border-white/10 px-2 py-0.5 rounded-full text-xs font-medium">
              {identity.traits[0]}-like
            </span>
            <span className="bg-charcoal border border-white/10 px-2 py-0.5 rounded-full text-xs font-medium">
              {identity.traits[1]}
            </span>
          </div>
        </div>

        {/* Expression */}
        <div className="bg-charcoal rounded-lg border border-white/10 p-4">
          <h3 className="text-crimson font-medium mb-1 flex items-center">
            <span className="mr-2">◉</span> Expression: {identity.traits[2]}
          </h3>
          <p className="text-sm text-white/80 mb-2">
            This identity expresses itself through unique methods and approaches.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-charcoal border border-white/10 px-2 py-0.5 rounded-full text-xs font-medium">
              {identity.traits[2]}
            </span>
            <span className="bg-charcoal border border-white/10 px-2 py-0.5 rounded-full text-xs font-medium">
              {identity.traits[3]}
            </span>
          </div>
        </div>

        {/* Function */}
        <div className="bg-charcoal rounded-lg border border-white/10 p-4">
          <h3 className="text-crimson font-medium mb-1 flex items-center">
            <span className="mr-2">✧</span> Function: {identity.traits[4]}
          </h3>
          <p className="text-sm text-white/80 mb-2">
            This identity functions with purpose and intention.
          </p>
        </div>

        {/* Strengths */}
        <div className="bg-charcoal rounded-lg border border-white/10 p-4">
          <h3 className="text-green-500 font-medium mb-2">Strengths</h3>
          <ul className="space-y-1 text-sm">
            {identity.strengths.map((strength, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges */}
        <div className="bg-charcoal rounded-lg border border-white/10 p-4">
          <h3 className="text-red-500 font-medium mb-2">Challenges</h3>
          <ul className="space-y-1 text-sm">
            {identity.challenges.map((challenge, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Attributes */}
        <div className="bg-charcoal rounded-lg border border-white/10 p-4">
          <h3 className="text-crimson font-medium mb-2 flex items-center">
            <span className="mr-2">✧</span> Key Attributes
          </h3>
          <div className="flex flex-wrap gap-2">
            {identity.traits.map((trait, index) => (
              <span 
                key={index} 
                className="bg-charcoal border border-white/10 px-2 py-1 rounded-full text-xs font-medium"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8 gap-4">
        <button 
          onClick={handleRestart}
          className="w-1/2 py-3 flex items-center justify-center bg-transparent border border-crimson text-crimson rounded-lg hover:bg-crimson/10"
        >
          <ArrowLeft size={18} className="mr-2" /> Restart
        </button>
        <button 
          onClick={handleSave}
          className="w-1/2 py-3 flex items-center justify-center bg-crimson text-white rounded-lg hover:bg-crimson/90"
        >
          <Save size={18} className="mr-2" /> Save
        </button>
      </div>
    </div>
  );
};

export default IdentityResult;
