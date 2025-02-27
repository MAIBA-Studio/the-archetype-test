
import React from 'react';
import { Archetype, foundationArchetypes, expressionArchetypes, functionArchetypes } from '@/lib/archetypes';
import { ChevronDown } from 'lucide-react';
import { useArchetype } from '@/context/ArchetypeContext';

interface ArchetypeSelectProps {
  type: 'foundation' | 'expression' | 'function';
  label: string;
}

// Get all archetypes for each dropdown
const getAllArchetypes = (): Archetype[] => {
  return [...foundationArchetypes, ...expressionArchetypes, ...functionArchetypes];
};

const ArchetypeSelect: React.FC<ArchetypeSelectProps> = ({ type, label }) => {
  const {
    selectedFoundation,
    selectedExpression,
    selectedFunction,
    setSelectedFoundation,
    setSelectedExpression,
    setSelectedFunction,
  } = useArchetype();

  const getArchetypeOptions = (): Archetype[] => {
    // Use all archetypes for each dropdown
    return getAllArchetypes();
  };

  const getCurrentSelection = (): Archetype | null => {
    switch (type) {
      case 'foundation':
        return selectedFoundation;
      case 'expression':
        return selectedExpression;
      case 'function':
        return selectedFunction;
      default:
        return null;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const archetypeId = e.target.value;
    const selected = getAllArchetypes().find(a => a.id === archetypeId) || null;
    
    switch (type) {
      case 'foundation':
        setSelectedFoundation(selected);
        break;
      case 'expression':
        setSelectedExpression(selected);
        break;
      case 'function':
        setSelectedFunction(selected);
        break;
    }
  };

  const currentSelection = getCurrentSelection();
  const archetypes = getArchetypeOptions();

  return (
    <div className="mb-6 w-full animate-fade-in">
      <label className="block text-sm font-medium text-foreground/80 mb-2">
        {label}
      </label>
      <div className="relative">
        <select
          value={currentSelection?.id || ''}
          onChange={handleChange}
          className="archetype-dropdown appearance-none"
        >
          <option value="" disabled>
            Select {label}...
          </option>
          {archetypes.map((archetype) => (
            <option key={archetype.id} value={archetype.id}>
              {archetype.name}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <ChevronDown size={18} className="text-foreground/60" />
        </div>
      </div>
      {currentSelection && (
        <p className="mt-2 text-sm text-foreground/60">
          {currentSelection.description}
        </p>
      )}
    </div>
  );
};

export default ArchetypeSelect;
