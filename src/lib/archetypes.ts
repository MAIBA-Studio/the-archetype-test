
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
    id: 'radiant',
    category: 'foundation',
    name: 'Radiant',
    emoji: '🌟',
    description: 'A shining beacon of warmth and inspiration, the Radiant brings light into even the darkest corners of existence.',
    traits: ['Luminous', 'Uplifting', 'Unwavering'],
    strengths: ['Inspiring others', 'Maintaining optimism', 'Creating positive environments'],
    challenges: ['Burnout from constant positivity', 'Difficulty acknowledging darkness', 'Unrealistic expectations']
  },
  {
    id: 'dreamer',
    category: 'foundation',
    name: 'Dreamer',
    emoji: '☁️',
    description: 'Forever lost in visions of what could be, the Dreamer weaves fantasies into reality—sometimes at the cost of the present.',
    traits: ['Whimsical', 'Idealistic', 'Boundless'],
    strengths: ['Visionary thinking', 'Creative problem-solving', 'Inspiring hope'],
    challenges: ['Neglecting practical realities', 'Procrastination', 'Disappointment when reality falls short']
  },
  {
    id: 'deluded',
    category: 'foundation',
    name: 'Deluded',
    emoji: '🤪',
    description: 'A mind untethered from truth, the Deluded clings to illusions, believing in a world that exists only in their head.',
    traits: ['Detached', 'Hallucinatory', 'Unhinged'],
    strengths: ['Unique perspective', 'Resistance to conventional limitations', 'Unpredictable creativity'],
    challenges: ['Disconnect from reality', 'Difficulty with relationships', 'Self-destructive tendencies']
  },
  {
    id: 'advocate',
    category: 'foundation',
    name: 'Advocate',
    emoji: '🕊️',
    description: 'A voice for the unheard, the Advocate fights tirelessly for their cause, moving hearts with words and actions alike.',
    traits: ['Persuasive', 'Passionate', 'Resolute'],
    strengths: ['Championing important causes', 'Motivating others to action', 'Unwavering commitment'],
    challenges: ['Burnout from constant fighting', 'Black and white thinking', 'Putting causes above personal needs']
  },
  {
    id: 'everyman',
    category: 'foundation',
    name: 'Everyman',
    emoji: '👥',
    description: 'Blending into the crowd yet essential to its fabric, the Everyman is the relatable core of any community.',
    traits: ['Humble', 'Grounded', 'Approachable'],
    strengths: ['Building community connections', 'Practical wisdom', 'Relatability'],
    challenges: ['Fear of standing out', 'Resistance to change', 'Self-doubt about uniqueness']
  },
  {
    id: 'conformist',
    category: 'foundation',
    name: 'Conformist',
    emoji: '🏢',
    description: 'Bound by tradition and rules, the Conformist upholds the familiar, avoiding the chaos of change at all costs.',
    traits: ['Obedient', 'Structured', 'Conservative'],
    strengths: ['Stability', 'Preserving traditions', 'Reliability'],
    challenges: ['Resistance to necessary change', 'Difficulty with innovation', 'Limited by conventional thinking']
  }
];

// Expression archetypes (Identity Modifier)
export const expressionArchetypes: Archetype[] = [
  {
    id: 'champion',
    category: 'expression',
    name: 'Champion',
    emoji: '🏆',
    description: 'The Champion thrives in battle—whether of wits, strength, or will—always striving to emerge victorious.',
    traits: ['Heroic', 'Unyielding', 'Triumphant'],
    strengths: ['Overcoming obstacles', 'Inspiring others', 'Leadership in crisis'],
    challenges: ['Overconfidence', 'Difficulty accepting failure', 'Restlessness without challenges']
  },
  {
    id: 'competitor',
    category: 'expression',
    name: 'Competitor',
    emoji: '🏅',
    description: 'Obsessed with the thrill of the chase, the Competitor finds meaning only in the pursuit of being the best.',
    traits: ['Relentless', 'Calculated', 'Driven'],
    strengths: ['Determination', 'Performance under pressure', 'Continuous self-improvement'],
    challenges: ['Unhealthy comparisons', 'Never satisfied', 'Relationship difficulties']
  },
  {
    id: 'tyrant',
    category: 'expression',
    name: 'Tyrant',
    emoji: '⚔️',
    description: 'Demanding absolute rule, the Tyrant crushes opposition beneath their boot, enforcing order through sheer force.',
    traits: ['Cruel', 'Controlling', 'Fearsome'],
    strengths: ['Decisive action', 'Clear boundaries', 'Efficiency through control'],
    challenges: ['Alienating others', 'Resistance from those controlled', 'Loneliness at the top']
  },
  {
    id: 'guardian',
    category: 'expression',
    name: 'Guardian',
    emoji: '🛡️',
    description: 'A shield against harm, the Guardian stands firm, weathering storms to safeguard those under their care.',
    traits: ['Protective', 'Loyal', 'Stalwart'],
    strengths: ['Creating safety', 'Reliability in crisis', 'Defending values'],
    challenges: ['Self-neglect', 'Overprotectiveness', 'Difficulty asking for help']
  },
  {
    id: 'helper',
    category: 'expression',
    name: 'Helper',
    emoji: '🤲',
    description: 'The Helper finds fulfillment in service, pouring kindness into others even when they have none left for themselves.',
    traits: ['Compassionate', 'Supportive', 'Generous'],
    strengths: ['Empathy', 'Creating connections', 'Noticing others\' needs'],
    challenges: ['Boundary issues', 'Martyrdom', 'Neglecting self-care']
  },
  {
    id: 'martyr',
    category: 'expression',
    name: 'Martyr',
    emoji: '🩸',
    description: 'Dying on every hill, the Martyr gives all for their beliefs, even when the world never asked them to.',
    traits: ['Self-Sacrificing', 'Unwavering', 'Tragic'],
    strengths: ['Commitment to principles', 'Inspiring dedication', 'Unflinching in adversity'],
    challenges: ['Self-destruction', 'Manipulation through sacrifice', 'Inability to compromise']
  },
  {
    id: 'pathfinder',
    category: 'expression',
    name: 'Pathfinder',
    emoji: '🧭',
    description: 'With an unshakable drive for discovery, the Pathfinder thrives at the edges of the unknown, forging new roads where none exist.',
    traits: ['Curious', 'Trailblazing', 'Determined'],
    strengths: ['Innovation', 'Adaptability', 'Leading others into new territory'],
    challenges: ['Restlessness', 'Difficulty with routine', 'Sometimes lost without direction']
  },
  {
    id: 'wanderer',
    category: 'expression',
    name: 'Wanderer',
    emoji: '🚶',
    description: 'Never staying in one place for long, the Wanderer chases horizons, seeking meaning in movement itself.',
    traits: ['Drifting', 'Observant', 'Free-Spirited'],
    strengths: ['Adaptability', 'Diverse experiences', 'Freedom from attachments'],
    challenges: ['Commitment issues', 'Rootlessness', 'Difficulty building lasting connections']
  },
  {
    id: 'escapist',
    category: 'expression',
    name: 'Escapist',
    emoji: '🏝️',
    description: 'Fleeing reality at every turn, the Escapist weaves stories, substances, or fantasies to numb the weight of the present.',
    traits: ['Avoidant', 'Elusive', 'Dreamy'],
    strengths: ['Creative imagination', 'Coping through fantasy', 'Alternative perspectives'],
    challenges: ['Denial of problems', 'Addiction tendencies', 'Disconnection from reality']
  },
  {
    id: 'revolutionary',
    category: 'expression',
    name: 'Revolutionary',
    emoji: '🔥',
    description: 'The Revolutionary thrives in upheaval, shattering systems and igniting movements that redefine the world.',
    traits: ['Radical', 'Unshaken', 'Transformative'],
    strengths: ['Vision for change', 'Courage against systems', 'Inspiring movements'],
    challenges: ['Extremism', 'Difficulty with compromise', 'Destructiveness without creation']
  }
];

// Function archetypes (Specialization)
export const functionArchetypes: Archetype[] = [
  {
    id: 'visionary',
    category: 'function',
    name: 'Visionary',
    emoji: '👁️',
    description: 'A mind ahead of its time, the Visionary dreams of what others can't yet see, shaping reality to match their ideals.',
    traits: ['Foresighted', 'Grandiose', 'Unconventional'],
    strengths: ['Long-term thinking', 'Innovation', 'Inspiring others with possibility'],
    challenges: ['Impracticality', 'Frustration with present limitations', 'Disconnection from reality']
  },
  {
    id: 'artisan',
    category: 'function',
    name: 'Artisan',
    emoji: '🎨',
    description: 'For the Artisan, creation is life; every masterpiece they touch breathes with raw emotion and intent.',
    traits: ['Expressive', 'Meticulous', 'Inspired'],
    strengths: ['Creative expression', 'Attention to detail', 'Authentic communication'],
    challenges: ['Perfectionism', 'Emotional volatility', 'Commercial practicality']
  },
  {
    id: 'madGenius',
    category: 'function',
    name: 'Mad Genius',
    emoji: '🧪',
    description: 'Dancing on the razor's edge of genius and insanity, the Mad Genius crafts wonders—and horrors—with equal ease.',
    traits: ['Brilliant', 'Unhinged', 'Erratic'],
    strengths: ['Revolutionary ideas', 'Thinking beyond convention', 'Unpredictable creativity'],
    challenges: ['Mental instability', 'Social alienation', 'Ethical boundaries']
  },
  {
    id: 'trickster',
    category: 'function',
    name: 'Trickster',
    emoji: '🎭',
    description: 'A master of deception, the Trickster bends truth like an art form, their intentions as fluid as their lies.',
    traits: ['Cunning', 'Playful', 'Unpredictable'],
    strengths: ['Adaptability', 'Exposing hypocrisies', 'Creative problem-solving'],
    challenges: ['Untrustworthiness', 'Difficulty with intimacy', 'Self-destructive tendencies']
  },
  {
    id: 'entertainer',
    category: 'function',
    name: 'Entertainer',
    emoji: '🎤',
    description: 'Under the spotlight, the Entertainer commands attention, turning life itself into a dazzling performance.',
    traits: ['Charismatic', 'Theatrical', 'Electrifying'],
    strengths: ['Captivating audiences', 'Emotional expression', 'Creating memorable experiences'],
    challenges: ['Validation addiction', 'Authenticity vs. performance', 'Emptiness when not performing']
  },
  {
    id: 'clown',
    category: 'function',
    name: 'Clown',
    emoji: '🤡',
    description: 'The Clown mocks the world with humor and chaos, finding joy in making others laugh—even when the joke is on them.',
    traits: ['Ridiculous', 'Sharp-Witted', 'Absurd'],
    strengths: ['Diffusing tension', 'Truth-telling through humor', 'Resilience through laughter'],
    challenges: ['Not being taken seriously', 'Hiding pain behind humor', 'Self-deprecation']
  },
  {
    id: 'mentor',
    category: 'function',
    name: 'Mentor',
    emoji: '📜',
    description: 'The Mentor carries knowledge earned through trial, passing it to those ready to receive their wisdom.',
    traits: ['Guiding', 'Patient', 'Wise'],
    strengths: ['Nurturing potential', 'Sharing hard-earned wisdom', 'Building legacies'],
    challenges: ['Over-attachment to students', 'Resistance to new methods', 'Difficulty letting go']
  },
  {
    id: 'scholar',
    category: 'function',
    name: 'Scholar',
    emoji: '📖',
    description: 'For the Scholar, knowledge is sacred, and understanding is the key to unlocking the universe's secrets.',
    traits: ['Inquisitive', 'Logical', 'Methodical'],
    strengths: ['Deep understanding', 'Analytical thinking', 'Objective assessment'],
    challenges: ['Ivory tower syndrome', 'Analysis paralysis', 'Overlooking emotional dimensions']
  },
  {
    id: 'cynic',
    category: 'function',
    name: 'Cynic',
    emoji: '🪞',
    description: 'The Cynic sees the cracks in every system, never fooled by facades—though at the cost of their own hope.',
    traits: ['Skeptical', 'Wry', 'Jaded'],
    strengths: ['Cutting through deception', 'Realistic assessment', 'Protection from naivety'],
    challenges: ['Pessimism', 'Difficulty trusting', 'Alienating others']
  },
  {
    id: 'alchemist',
    category: 'function',
    name: 'Alchemist',
    emoji: '⚗️',
    description: 'Transforming the mundane into the extraordinary, the Alchemist bends reality through knowledge and will.',
    traits: ['Mysterious', 'Experimental', 'Enlightened'],
    strengths: ['Transmuting challenges to opportunities', 'Combining disparate elements', 'Mystical insight'],
    challenges: ['Obsession with perfection', 'Dangerous experimentation', 'Esoteric communication']
  },
  {
    id: 'illusionist',
    category: 'function',
    name: 'Illusionist',
    emoji: '🔮',
    description: 'The Illusionist cloaks reality in a veil of deception, making the impossible seem real.',
    traits: ['Elusive', 'Mesmerizing', 'Tricksy'],
    strengths: ['Creating compelling narratives', 'Appearance management', 'Controlling perceptions'],
    challenges: ['Losing track of truth', 'Empty relationships', 'Internal emptiness']
  },
  {
    id: 'manipulator',
    category: 'function',
    name: 'Manipulator',
    emoji: '🧵',
    description: 'A weaver of schemes, the Manipulator moves pieces unseen, pulling strings with deadly precision.',
    traits: ['Tactical', 'Persuasive', 'Cold'],
    strengths: ['Strategic thinking', 'Understanding motivations', 'Getting desired outcomes'],
    challenges: ['Trust issues', 'Ethical complications', 'Isolation through behavior']
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
