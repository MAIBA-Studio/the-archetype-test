import React from 'react';
import { Archetype, foundationArchetypes, expressionArchetypes, functionArchetypes } from '@/lib/archetypes';
import { ChevronDown, Lock } from 'lucide-react';
import { useArchetype } from '@/context/ArchetypeContext';

interface ArchetypeSelectProps {
  type: 'foundation' | 'expression' | 'function';
  label: string;
}

// Get all archetypes
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
    isStepActive
  } = useArchetype();

  const getAvailableArchetypes = (): Archetype[] => {
    // Get all archetypes
    const allArchetypes = getAllArchetypes();
    
    // Get IDs of already selected archetypes to filter them out
    const selectedIds = [
      selectedFoundation?.id,
      selectedExpression?.id,
      selectedFunction?.id
    ].filter(Boolean) as string[];

    // Filter out already selected archetypes from available options,
    // but keep the currently selected one for this dropdown
    const currentSelection = getCurrentSelection();
    
    return allArchetypes.filter(archetype => 
      !selectedIds.includes(archetype.id) || 
      (currentSelection && archetype.id === currentSelection.id)
    );
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
    // Find the selected archetype from all archetypes
    const allArchetypes = getAllArchetypes();
    const selected = allArchetypes.find(a => a.id === archetypeId) || null;
    
    switch (type) {
      case 'foundation':
        setSelectedFoundation(selected);
        // Reset subsequent selections when changing foundation
        setSelectedExpression(null);
        setSelectedFunction(null);
        break;
      case 'expression':
        setSelectedExpression(selected);
        // Reset function selection when changing expression
        setSelectedFunction(null);
        break;
      case 'function':
        setSelectedFunction(selected);
        break;
    }
  };

  const isActive = isStepActive(type);
  const currentSelection = getCurrentSelection();
  const availableArchetypes = getAvailableArchetypes();

  return (
    <div className={`mb-6 w-full animate-fade-in ${isActive ? 'opacity-100' : 'opacity-50'}`}>
      <label className="block text-sm font-medium text-foreground/80 mb-2">
        {label}
      </label>
      <div className="relative">
        {isActive ? (
          <select
            value={currentSelection?.id || ''}
            onChange={handleChange}
            className="archetype-dropdown appearance-none"
            disabled={!isActive}
          >
            <option value="" disabled>
              Select {label}...
            </option>
            {availableArchetypes.map((archetype) => (
              <option key={archetype.id} value={archetype.id}>
                {archetype.name}
              </option>
            ))}
          </select>
        ) : (
          <div className="flex items-center justify-between archetype-dropdown bg-secondary/50 cursor-not-allowed">
            <span className="text-foreground/50">Select {label}...</span>
            <Lock size={16} className="text-foreground/40" />
          </div>
        )}
        {isActive && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <ChevronDown size={18} className="text-foreground/60" />
          </div>
        )}
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
