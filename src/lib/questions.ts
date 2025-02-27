
export type Question = {
  id: number;
  text: string;
  options: Option[];
  traits: Trait[];
};

export type Option = {
  text: string;
  value: number;
};

export type Trait = {
  id: string;
  weight: number;
};

export const questions: Question[] = [
  {
    id: 1,
    text: "How do you typically recharge after a long day?",
    options: [
      { text: "Spending time with friends or at social events", value: 5 },
      { text: "A mix of social activities and alone time", value: 3 },
      { text: "Quiet time alone with a book or favorite show", value: 1 }
    ],
    traits: [
      { id: "extrovert", weight: 1 },
      { id: "introvert", weight: -1 }
    ]
  },
  {
    id: 2,
    text: "When making important decisions, you usually rely on:",
    options: [
      { text: "Logical analysis and objective factors", value: 5 },
      { text: "A balance of logic and personal values", value: 3 },
      { text: "Your feelings and how it affects people", value: 1 }
    ],
    traits: [
      { id: "thinker", weight: 1 },
      { id: "feeler", weight: -1 }
    ]
  },
  {
    id: 3,
    text: "How do you prefer to plan your activities?",
    options: [
      { text: "Structured schedules with clear timelines", value: 5 },
      { text: "Some planning with room for flexibility", value: 3 },
      { text: "Spontaneous decisions based on the moment", value: 1 }
    ],
    traits: [
      { id: "judger", weight: 1 },
      { id: "perceiver", weight: -1 }
    ]
  },
  {
    id: 4,
    text: "When learning something new, you prefer:",
    options: [
      { text: "Practical, hands-on experiences", value: 5 },
      { text: "A mix of theory and practice", value: 3 },
      { text: "Understanding concepts and theories first", value: 1 }
    ],
    traits: [
      { id: "sensor", weight: 1 },
      { id: "intuitive", weight: -1 }
    ]
  },
  {
    id: 5,
    text: "In a group setting, you are more likely to:",
    options: [
      { text: "Lead the conversation and share ideas freely", value: 5 },
      { text: "Contribute when you have something valuable to add", value: 3 },
      { text: "Listen carefully and speak only when necessary", value: 1 }
    ],
    traits: [
      { id: "extrovert", weight: 1 },
      { id: "introvert", weight: -1 }
    ]
  },
  {
    id: 6,
    text: "When there's conflict, you tend to focus on:",
    options: [
      { text: "Finding the most logical and fair solution", value: 5 },
      { text: "Balancing fairness with everyone's feelings", value: 3 },
      { text: "Making sure everyone feels heard and validated", value: 1 }
    ],
    traits: [
      { id: "thinker", weight: 1 },
      { id: "feeler", weight: -1 }
    ]
  },
  {
    id: 7,
    text: "Your workspace or home is typically:",
    options: [
      { text: "Well-organized with everything in its place", value: 5 },
      { text: "Reasonably tidy with some creative disorder", value: 3 },
      { text: "Creatively arranged based on inspiration", value: 1 }
    ],
    traits: [
      { id: "judger", weight: 1 },
      { id: "perceiver", weight: -1 }
    ]
  },
  {
    id: 8,
    text: "When solving problems, you usually:",
    options: [
      { text: "Rely on proven methods and practical solutions", value: 5 },
      { text: "Use a mix of tried methods and new ideas", value: 3 },
      { text: "Look for novel approaches and patterns", value: 1 }
    ],
    traits: [
      { id: "sensor", weight: 1 },
      { id: "intuitive", weight: -1 }
    ]
  },
  {
    id: 9,
    text: "At a party or gathering, you are most likely to:",
    options: [
      { text: "Meet many new people and engage in various conversations", value: 5 },
      { text: "Divide time between familiar faces and new acquaintances", value: 3 },
      { text: "Stick with close friends or people you already know", value: 1 }
    ],
    traits: [
      { id: "extrovert", weight: 1 },
      { id: "introvert", weight: -1 }
    ]
  },
  {
    id: 10,
    text: "When giving feedback, you prefer to be:",
    options: [
      { text: "Direct and straightforward about improvements needed", value: 5 },
      { text: "Balanced between critique and encouragement", value: 3 },
      { text: "Encouraging and sensitive to the person's feelings", value: 1 }
    ],
    traits: [
      { id: "thinker", weight: 1 },
      { id: "feeler", weight: -1 }
    ]
  }
];
