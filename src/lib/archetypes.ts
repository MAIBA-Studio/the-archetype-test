
export interface Archetype {
  id: string;
  category: 'foundation' | 'expression' | 'function';
  name: string;
  emoji: string;
  description: string;
  traits: string[];
  strengths: string[];
  challenges: string[];
}

export interface GeneratedIdentity {
  title: string;
  description: string;
  emojis: string[];
  strengths: string[];
  challenges: string[];
  traits: string[];
}

// Foundation archetypes (Core Persona)
export const foundationArchetypes: Archetype[] = [
  {
    id: 'warrior',
    category: 'foundation',
    name: 'Warrior',
    emoji: '⚔️',
    description: 'Driven by courage and determination to overcome obstacles',
    traits: ['Brave', 'Disciplined', 'Protective'],
    strengths: ['Courage under pressure', 'Protecting others', 'Physical prowess'],
    challenges: ['May be overly aggressive', 'Can be stubborn', 'Difficulty showing vulnerability']
  },
  {
    id: 'caregiver',
    category: 'foundation',
    name: 'Caregiver',
    emoji: '🤲',
    description: 'Nurturing and protective, focused on helping others',
    traits: ['Compassionate', 'Supportive', 'Patient'],
    strengths: ['Deep empathy', 'Creating safe spaces', 'Building trust'],
    challenges: ['Self-neglect', 'Boundary issues', 'Enabling behaviors']
  },
  {
    id: 'explorer',
    category: 'foundation',
    name: 'Explorer',
    emoji: '🧭',
    description: 'Seeks discovery and new experiences beyond known boundaries',
    traits: ['Curious', 'Adventurous', 'Independent'],
    strengths: ['Adaptability', 'Finding new paths', 'Embracing uncertainty'],
    challenges: ['Commitment issues', 'Risk-taking', 'Restlessness']
  },
  {
    id: 'sage',
    category: 'foundation',
    name: 'Sage',
    emoji: '📚',
    description: 'Pursues truth and understanding through knowledge',
    traits: ['Analytical', 'Thoughtful', 'Objective'],
    strengths: ['Deep knowledge', 'Critical thinking', 'Offering guidance'],
    challenges: ['Overthinking', 'Intellectual arrogance', 'Analysis paralysis']
  },
  {
    id: 'creator',
    category: 'foundation',
    name: 'Creator',
    emoji: '🎨',
    description: 'Brings new things into being through imagination and skill',
    traits: ['Imaginative', 'Expressive', 'Original'],
    strengths: ['Innovation', 'Artistic vision', 'Thinking outside the box'],
    challenges: ['Perfectionism', 'Impracticality', 'Chaotic workflow']
  },
  {
    id: 'ruler',
    category: 'foundation',
    name: 'Ruler',
    emoji: '👑',
    description: 'Takes responsibility and creates order in chaos',
    traits: ['Authoritative', 'Strategic', 'Responsible'],
    strengths: ['Leadership', 'Organization', 'Creating structure'],
    challenges: ['Controlling tendencies', 'Fear of losing power', 'Delegating']
  }
];

// Expression archetypes (Identity Modifier)
export const expressionArchetypes: Archetype[] = [
  {
    id: 'rebel',
    category: 'expression',
    name: 'Rebel',
    emoji: '🔥',
    description: 'Challenges the status quo and rejects conventional norms',
    traits: ['Unconventional', 'Bold', 'Questioning'],
    strengths: ['Challenging broken systems', 'Authenticity', 'Catalyzing change'],
    challenges: ['Unnecessary conflict', 'Self-sabotage', 'Rejecting valid traditions']
  },
  {
    id: 'lover',
    category: 'expression',
    name: 'Lover',
    emoji: '❤️',
    description: 'Driven by passion and connection with others',
    traits: ['Passionate', 'Empathetic', 'Sensual'],
    strengths: ['Deep connection', 'Emotional intelligence', 'Appreciation of beauty'],
    challenges: ['Codependency', 'Jealousy', 'People-pleasing']
  },
  {
    id: 'jester',
    category: 'expression',
    name: 'Jester',
    emoji: '🃏',
    description: 'Uses humor and playfulness to navigate life',
    traits: ['Humorous', 'Spontaneous', 'Light-hearted'],
    strengths: ['Lightening tense situations', 'Joy creation', 'Creative problem-solving'],
    challenges: ['Avoiding serious issues', 'Not being taken seriously', 'Inappropriate timing']
  },
  {
    id: 'everyperson',
    category: 'expression',
    name: 'Everyperson',
    emoji: '🧑',
    description: 'Values equality and seeks to belong in communities',
    traits: ['Relatable', 'Down-to-earth', 'Inclusive'],
    strengths: ['Building community', 'Finding common ground', 'Authentic connection'],
    challenges: ['Fearing standing out', 'Conformity', 'Lack of individuality']
  },
  {
    id: 'innocent',
    category: 'expression',
    name: 'Innocent',
    emoji: '🕊️',
    description: 'Maintains a pure, optimistic outlook on the world',
    traits: ['Optimistic', 'Pure-hearted', 'Trusting'],
    strengths: ['Seeing the good', 'Inspiring hope', 'Ethical clarity'],
    challenges: ['Naivety', 'Denial of harsh realities', 'Vulnerability to deception']
  }
];

// Function archetypes (Specialization)
export const functionArchetypes: Archetype[] = [
  {
    id: 'magician',
    category: 'function',
    name: 'Magician',
    emoji: '✨',
    description: 'Transforms situations through knowledge and insight',
    traits: ['Transformative', 'Insightful', 'Charismatic'],
    strengths: ['Creating change', 'Finding win-win solutions', 'Catalyzing growth'],
    challenges: ['Manipulation', 'Unrealistic expectations', 'Elusiveness']
  },
  {
    id: 'hero',
    category: 'function',
    name: 'Hero',
    emoji: '🦸',
    description: 'Shows courage to master challenges and protect others',
    traits: ['Courageous', 'Determined', 'Self-sacrificing'],
    strengths: ['Overcoming adversity', 'Inspiring others', 'Taking action'],
    challenges: ['Savior complex', 'Burnout', 'Need for recognition']
  },
  {
    id: 'outlaw',
    category: 'function',
    name: 'Outlaw',
    emoji: '⛓️',
    description: 'Operates outside conventional boundaries for freedom',
    traits: ['Independent', 'Revolutionary', 'Disruptive'],
    strengths: ['Breaking harmful patterns', 'Radical innovation', 'Personal freedom'],
    challenges: ['Self-destructive tendencies', 'Difficulty maintaining relationships', 'Legal/ethical issues']
  },
  {
    id: 'sage',
    category: 'function',
    name: 'Sage',
    emoji: '🧠',
    description: 'Uses wisdom and intelligence to understand the world',
    traits: ['Wise', 'Knowledgeable', 'Contemplative'],
    strengths: ['Deep understanding', 'Problem-solving', 'Teaching others'],
    challenges: ['Overthinking', 'Detachment from reality', 'Ivory tower syndrome']
  },
  {
    id: 'ruler',
    category: 'function',
    name: 'Ruler',
    emoji: '⚖️',
    description: 'Creates and maintains order with authority',
    traits: ['Responsible', 'Executive', 'Structured'],
    strengths: ['Creating systems', 'Leadership', 'Resource management'],
    challenges: ['Controlling behavior', 'Rigidity', 'Fear of chaos']
  },
  {
    id: 'caretaker',
    category: 'function',
    name: 'Caretaker',
    emoji: '💞',
    description: 'Protects and cares for others, often at personal expense',
    traits: ['Nurturing', 'Selfless', 'Empathetic'],
    strengths: ['Supporting others', 'Emotional connection', 'Creating safety'],
    challenges: ['Self-neglect', 'Codependency', 'Martyrdom']
  }
];

export const generateIdentity = (
  foundation: Archetype,
  expression: Archetype,
  function_: Archetype
): GeneratedIdentity => {
  // Generate a title that combines all three archetypes
  const title = `${expression.name} ${foundation.name} ${function_.name}`;
  
  // Generate a description that combines aspects of all three
  const description = `A ${foundation.traits[0].toLowerCase()} individual who combines ${expression.name.toLowerCase()}'s ${expression.traits[0].toLowerCase()} nature with ${function_.name.toLowerCase()}'s ${function_.traits[0].toLowerCase()} approach.`;
  
  // Combine emojis
  const emojis = [foundation.emoji, expression.emoji, function_.emoji];
  
  // Select strengths (2 from each)
  const strengths = [
    ...foundation.strengths.slice(0, 1),
    ...expression.strengths.slice(0, 1),
    ...function_.strengths.slice(0, 1)
  ];
  
  // Select challenges (2 from each)
  const challenges = [
    ...foundation.challenges.slice(0, 1),
    ...expression.challenges.slice(0, 1),
    ...function_.challenges.slice(0, 1)
  ];
  
  // Select traits (2 from each)
  const traits = [
    ...foundation.traits.slice(0, 1),
    ...expression.traits.slice(0, 1),
    ...function_.traits.slice(0, 1),
    ...foundation.traits.slice(1, 2)
  ];
  
  return {
    title,
    description,
    emojis,
    strengths,
    challenges,
    traits
  };
};
