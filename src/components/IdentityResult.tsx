
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

  // Swap the 1st and 2nd emojis for display
  const displayEmojis = [...identity.emojis];
  if (displayEmojis.length >= 2) {
    [displayEmojis[0], displayEmojis[1]] = [displayEmojis[1], displayEmojis[0]];
  }

  return (
    <div className="w-full max-w-lg mx-auto px-4 sm:px-6 py-6 sm:py-10 animate-fade-in">
      <div className="flex justify-center mb-6 space-x-4">
        {displayEmojis.map((emoji, index) => (
          <div 
            key={index} 
            className="text-3xl sm:text-4xl animate-float" 
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {emoji}
          </div>
        ))}
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-crimson/90 to-crimson/70 bg-clip-text text-transparent">
        {identity.title}
      </h1>

      <div className="neo-card p-4 sm:p-6 mb-6">
        <p className="text-center text-foreground/90 mb-6">
          {identity.description}
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-3 text-crimson">Strengths</h3>
            <ul className="space-y-2">
              {identity.strengths.map((strength, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-crimson mr-2">+</span>
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-crimson">Challenges</h3>
            <ul className="space-y-2">
              {identity.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-crimson mr-2">-</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3 text-crimson">Key Traits</h3>
          <div className="flex flex-wrap gap-2">
            {identity.traits.map((trait, index) => (
              <span 
                key={index} 
                className="inline-block bg-secondary/80 px-3 py-1 rounded-full text-sm"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button 
          onClick={handleRestart}
          className="btn-secondary flex items-center justify-center"
        >
          <ArrowLeft size={18} className="mr-2" /> Restart
        </button>
        <button 
          onClick={handleSave}
          className="btn-primary flex items-center justify-center"
        >
          <Save size={18} className="mr-2" /> Save
        </button>
      </div>
    </div>
  );
};

export default IdentityResult;
