
// Standardized descriptions for each archetype

interface ArchetypeDescription {
  [key: string]: string;
}

const archetypeDescriptions: ArchetypeDescription = {
  // Foundation archetypes
  "radiant": "✨ A beacon of warmth and inspiration, uplifting others with boundless positivity.",
  "dreamer": "💭 Lost in visions of what could be, weaving fantasies into reality.",
  "deluded": "🌀 Detached from truth, believing in illusions that may never come to pass.",
  "advocate": "📢 A passionate voice for change, standing up for causes with unwavering conviction.",
  "everyman": "🤝 An ordinary soul, grounded and relatable, representing the common experience.",
  "conformist": "📏 Bound by structure, traditions, and the safety of the familiar.",
  
  // Expression archetypes
  "champion": "⚔️ A relentless warrior, striving for victory and proving their worth.",
  "competitor": "🏁 Driven by ambition, thriving in rivalry and the pursuit of excellence.",
  "tyrant": "🖤 Rules through fear, imposing dominance with an iron fist.",
  "guardian": "🛑 A steadfast protector, shielding others from harm at all costs.",
  "helper": "🤍 Dedicated to service, always ready to support and nurture those in need.",
  "martyr": "⛓️ Sacrifices everything for a cause, even at their own expense.",
  "pathfinder": "🗺️ A fearless explorer, carving new roads and seeking uncharted horizons.",
  "wanderer": "🌍 A drifter, moving endlessly in search of meaning or escape.",
  "escapist": "🌌 Flees reality into fantasies, stories, or other distractions.",
  "revolutionary": "⚡ Tears down the old to build something new, igniting movements of change.",
  "maverick": "🎯 A free spirit, rejecting rules and forging their own unpredictable path.",
  "anarchist": "☢️ A force of destruction and upheaval, reveling in chaos.",
  "devoted": "💍 Loyal beyond reason, willing to give everything for what they cherish.",
  "hedonist": "🍾 Chases pleasure above all else, savoring life's indulgences.",
  "obsessive": "🔍 Fixates on a single goal, unable to let go, no matter the cost.",
  
  // Function archetypes
  "visionary": "🌌 A forward-thinker who sees beyond the present, shaping grand futures.",
  "artisan": "🖌️ Expresses emotions through mastery of craft, creating beauty from raw ideas.",
  "madGenius": "⚙️ A brilliant but unstable mind, dancing between genius and madness.",
  "trickster": "🎲 A cunning manipulator of perception, always playing the game.",
  "entertainer": "🎶 A natural showman, dazzling the world with their presence and charm.",
  "clown": "🎈 Mocks reality with humor, finding joy even in the absurd.",
  "mentor": "🦉 A guiding force, sharing hard-earned wisdom with those who seek it.",
  "scholar": "📚 Devoted to learning, forever questioning and analyzing the world.",
  "cynic": "🔍 Sees through illusions, questioning everything—often at the cost of hope.",
  "alchemist": "🔮 Transforms the mundane into the extraordinary, seeking hidden truths.",
  "illusionist": "🕵️‍♂️ A master of deception, bending perception to their will.",
  "manipulator": "🕷️ Pulls the strings from behind the scenes, orchestrating unseen moves.",
  "ruler": "⚖️ Commands authority, shaping kingdoms and destinies with power.",
  "commander": "🎖️ A leader of forces, tactical and assertive, guiding others to victory.",
  "oppressor": "⛓️ Rules through control and fear, enforcing dominance without mercy."
};

export const getArchetypeDescription = (id: string): string => {
  return archetypeDescriptions[id] || "No description available.";
};
