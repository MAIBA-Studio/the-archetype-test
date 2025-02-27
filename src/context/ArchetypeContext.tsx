
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Archetype, GeneratedIdentity, foundationArchetypes, expressionArchetypes, functionArchetypes, generateIdentity } from '@/lib/archetypes';

type ArchetypeContextType = {
  selectedFoundation: Archetype | null;
  selectedExpression: Archetype | null;
  selectedFunction: Archetype | null;
  generatedIdentity: GeneratedIdentity | null;
  setSelectedFoundation: (archetype: Archetype | null) => void;
  setSelectedExpression: (archetype: Archetype | null) => void;
  setSelectedFunction: (archetype: Archetype | null) => void;
  generateArchetype: () => void;
  resetSelections: () => void;
  allArchetypesSelected: boolean;
};

const ArchetypeContext = createContext<ArchetypeContextType | undefined>(undefined);

export const ArchetypeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedFoundation, setSelectedFoundation] = useState<Archetype | null>(null);
  const [selectedExpression, setSelectedExpression] = useState<Archetype | null>(null);
  const [selectedFunction, setSelectedFunction] = useState<Archetype | null>(null);
  const [generatedIdentity, setGeneratedIdentity] = useState<GeneratedIdentity | null>(null);

  const allArchetypesSelected = Boolean(
    selectedFoundation && selectedExpression && selectedFunction
  );

  const generateArchetype = () => {
    if (allArchetypesSelected) {
      const identity = generateIdentity(
        selectedFoundation as Archetype,
        selectedExpression as Archetype,
        selectedFunction as Archetype
      );
      setGeneratedIdentity(identity);
    }
  };

  const resetSelections = () => {
    setSelectedFoundation(null);
    setSelectedExpression(null);
    setSelectedFunction(null);
    setGeneratedIdentity(null);
  };

  return (
    <ArchetypeContext.Provider
      value={{
        selectedFoundation,
        selectedExpression,
        selectedFunction,
        generatedIdentity,
        setSelectedFoundation,
        setSelectedExpression,
        setSelectedFunction,
        generateArchetype,
        resetSelections,
        allArchetypesSelected
      }}
    >
      {children}
    </ArchetypeContext.Provider>
  );
};

export const useArchetype = (): ArchetypeContextType => {
  const context = useContext(ArchetypeContext);
  if (context === undefined) {
    throw new Error('useArchetype must be used within an ArchetypeProvider');
  }
  return context;
};
