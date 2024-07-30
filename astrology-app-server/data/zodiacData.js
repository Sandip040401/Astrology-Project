const zodiacData = {
    Aries: {
      name: "Aries",
      good_traits: [
        "Courageous", "Determined", "Confident", "Enthusiastic", "Optimistic", "Honest", "Passionate", "Driven", "Innovative", "Energetic"
      ],
      bad_traits: [
        "Impatient", "Moody", "Short-tempered", "Impulsive", "Aggressive", "Arrogant", "Stubborn", "Self-centered", "Confrontational", "Reckless"
      ],
      personality: [
        "Independent and courageous", "Loves to be the leader", "Adventurous", "Lively and confident", "Impatient with slow progress", "Competitive", "Ambitious", "Loyal to loved ones", "Enjoys challenges", "Passionate about causes"
      ],
      powers: [
        "Leadership", "Courage", "Determination", "Optimism", "Honesty", "Creativity", "Energetic", "Innovative", "Motivational", "Adaptability"
      ],
      weaknesses: [
        "Impatience", "Aggressiveness", "Recklessness", "Arrogance", "Stubbornness", "Mood swings", "Self-centeredness", "Impulsiveness", "Over-competitive", "Lack of focus"
      ]
    },
    Taurus: {
      name: "Taurus",
      good_traits: [
        "Reliable", "Patient", "Practical", "Devoted", "Responsible", "Stable", "Generous", "Loyal", "Persistent", "Artistic"
      ],
      bad_traits: [
        "Stubborn", "Possessive", "Uncompromising", "Lazy", "Self-indulgent", "Jealous", "Materialistic", "Inflexible", "Overly cautious", "Resistant to change"
      ],
      personality: [
        "Dependable and strong-willed", "Appreciates beauty and comfort", "Hardworking", "Patient and reliable", "Loves nature and the outdoors", "Persistent", "Loyal to friends and family", "Enjoys luxury and good food", "Practical and pragmatic", "Values security and stability"
      ],
      powers: [
        "Patience", "Reliability", "Determination", "Practicality", "Loyalty", "Generosity", "Creativity", "Strong work ethic", "Groundedness", "Financial acumen"
      ],
      weaknesses: [
        "Stubbornness", "Possessiveness", "Materialism", "Inflexibility", "Laziness", "Self-indulgence", "Jealousy", "Over-caution", "Resistance to change", "Narrow-mindedness"
      ]
    },
    Gemini: {
      name: "Gemini",
      good_traits: [
        "Adaptable", "Outgoing", "Intelligent", "Curious", "Affectionate", "Versatile", "Witty", "Imaginative", "Quick-witted", "Communicative"
      ],
      bad_traits: [
        "Indecisive", "Nervous", "Inconsistent", "Superficial", "Restless", "Impulsive", "Gossipy", "Unreliable", "Anxious", "Two-faced"
      ],
      personality: [
        "Quick-thinking and energetic", "Loves socializing and meeting new people", "Curious and inquisitive", "Adaptable and versatile", "Enjoys learning new things", "Witty and humorous", "Charming and persuasive", "Easily bored and restless", "Communicative and articulate", "Flexible and open-minded"
      ],
      powers: [
        "Adaptability", "Communication", "Curiosity", "Intelligence", "Wit", "Charm", "Versatility", "Creativity", "Social skills", "Persuasion"
      ],
      weaknesses: [
        "Indecisiveness", "Nervousness", "Inconsistency", "Superficiality", "Restlessness", "Impulsiveness", "Gossiping", "Unreliability", "Anxiety", "Two-faced behavior"
      ]
    },
    Cancer: {
      name: "Cancer",
      good_traits: [
        "Loyal", "Protective", "Intuitive", "Caring", "Empathetic", "Tenacious", "Sensitive", "Creative", "Compassionate", "Supportive"
      ],
      bad_traits: [
        "Moody", "Pessimistic", "Suspicious", "Manipulative", "Insecure", "Overly emotional", "Clingy", "Overprotective", "Vindictive", "Self-pitying"
      ],
      personality: [
        "Emotional and nurturing", "Protective of loved ones", "Intuitive and empathetic", "Home and family-oriented", "Loyal and dedicated", "Creative and imaginative", "Sensitive and compassionate", "Caring and supportive", "Tends to be moody", "Strong-willed and tenacious"
      ],
      powers: [
        "Intuition", "Empathy", "Creativity", "Loyalty", "Caring nature", "Supportiveness", "Emotional depth", "Sensitivity", "Tenacity", "Protectiveness"
      ],
      weaknesses: [
        "Moodiness", "Pessimism", "Suspicion", "Manipulativeness", "Insecurity", "Overly emotional nature", "Clinginess", "Overprotectiveness", "Vindictiveness", "Self-pity"
      ]
    },
    Leo: {
      name: "Leo",
      good_traits: [
        "Confident", "Generous", "Warm-hearted", "Cheerful", "Humorous", "Charismatic", "Creative", "Passionate", "Loyal", "Ambitious"
      ],
      bad_traits: [
        "Arrogant", "Stubborn", "Self-centered", "Lazy", "Inflexible", "Dogmatic", "Dominating", "Impatient", "Overdramatic", "Jealous"
      ],
      personality: [
        "Confident and charismatic", "Natural leader", "Loves to be in the spotlight", "Generous and warm-hearted", "Creative and passionate", "Ambitious and driven", "Loyal and protective of loved ones", "Cheerful and humorous", "Enjoys luxury and comfort", "Tends to be dramatic"
      ],
      powers: [
        "Confidence", "Leadership", "Charisma", "Creativity", "Generosity", "Passion", "Loyalty", "Ambition", "Humor", "Warmth"
      ],
      weaknesses: [
        "Arrogance", "Stubbornness", "Self-centeredness", "Laziness", "Inflexibility", "Dogmatism", "Dominating nature", "Impatience", "Overdramatic tendencies", "Jealousy"
      ]
    },
    Virgo: {
      name: "Virgo",
      good_traits: [
        "Loyal", "Analytical", "Kind", "Hardworking", "Practical", "Reliable", "Modest", "Perfectionist", "Helpful", "Health-conscious"
      ],
      bad_traits: [
        "Overcritical", "Judgmental", "Fussy", "Worrying", "Overly cautious", "Cold", "Skeptical", "Conservative", "Perfectionist", "Aloof"
      ],
      personality: [
        "Detail-oriented and analytical", "Practical and reliable", "Loyal and dedicated", "Hardworking and disciplined", "Health-conscious and clean", "Helpful and supportive", "Modest and humble", "Perfectionist", "Likes routine and order", "Tends to worry a lot"
      ],
      powers: [
        "Analytical skills", "Attention to detail", "Practicality", "Reliability", "Hard work", "Dedication", "Modesty", "Health-consciousness", "Helping nature", "Organizational skills"
      ],
      weaknesses: [
        "Overcritical nature", "Judgmental tendencies", "Fussiness", "Worrying", "Over-cautiousness", "Cold demeanor", "Skepticism", "Conservatism", "Perfectionism", "Aloofness"
      ]
    },
    Libra: {
      name: "Libra",
      good_traits: [
        "Diplomatic", "Charming", "Fair-minded", "Social", "Idealistic", "Romantic", "Peaceful", "Graceful", "Cooperative", "Balanced"
      ],
      bad_traits: [
        "Indecisive", "Self-pitying", "Superficial", "Unreliable", "Avoids confrontations", "Manipulative", "Vain", "Detached", "Lazy", "Non-confrontational"
      ],
      personality: [
        "Diplomatic and fair-minded", "Loves socializing and being around people", "Charming and graceful", "Idealistic and romantic", "Peaceful and harmonious", "Cooperative and team-oriented", "Values justice and fairness", "Aesthetic and artistic", "Tends to avoid confrontations", "Balances different aspects of life well"
      ],
      powers: [
        "Diplomacy", "Charm", "Fairness", "Social skills", "Idealism", "Romanticism", "Peacefulness", "Gracefulness", "Cooperation", "Balance"
      ],
      weaknesses: [
        "Indecisiveness", "Self-pity", "Superficiality", "Unreliability", "Avoidance of confrontations", "Manipulativeness", "Vanity", "Detachment", "Laziness", "Non-confrontational behavior"
      ]
    },
    Scorpio: {
      name: "Scorpio",
      good_traits: [
        "Resourceful", "Brave", "Passionate", "Stubborn", "Loyal", "Ambitious", "Intuitive", "Determined", "Decisive", "Mysterious"
      ],
      bad_traits: [
        "Jealous", "Secretive", "Resentful", "Manipulative", "Suspicious", "Obsessive", "Vindictive", "Domineering", "Intense", "Possessive"
      ],
      personality: [
        "Intense and passionate", "Resourceful and determined", "Brave and fearless", "Loyal and protective", "Stubborn and strong-willed", "Mysterious and secretive", "Ambitious and driven", "Intuitive and perceptive", "Decisive and resolute", "Loves deeply and intensely"
      ],
      powers: [
        "Resourcefulness", "Bravery", "Passion", "Determination", "Loyalty", "Ambition", "Intuition", "Decisiveness", "Perception", "Mystery"
      ],
      weaknesses: [
        "Jealousy", "Secretiveness", "Resentfulness", "Manipulativeness", "Suspicion", "Obsessiveness", "Vindictiveness", "Domineering nature", "Intensiveness", "Possessiveness"
      ]
    },
    Sagittarius: {
      name: "Sagittarius",
      good_traits: [
        "Generous", "Idealistic", "Great sense of humor", "Curious", "Energetic", "Adventurous", "Independent", "Optimistic", "Honest", "Philosophical"
      ],
      bad_traits: [
        "Impatient", "Promising more than can deliver", "Tactless", "Careless", "Restless", "Irresponsible", "Overconfident", "Inconsistent", "Blunt", "Superficial"
      ],
      personality: [
        "Adventurous and energetic", "Loves freedom and independence", "Optimistic and enthusiastic", "Curious and open-minded", "Generous and kind-hearted", "Honest and straightforward", "Philosophical and idealistic", "Great sense of humor", "Enjoys traveling and exploring", "Impatient with routine"
      ],
      powers: [
        "Generosity", "Idealism", "Humor", "Curiosity", "Energy", "Adventurous spirit", "Independence", "Optimism", "Honesty", "Philosophical nature"
      ],
      weaknesses: [
        "Impatience", "Overpromising", "Tactlessness", "Carelessness", "Restlessness", "Irresponsibility", "Overconfidence", "Inconsistency", "Bluntness", "Superficiality"
      ]
    },
    Capricorn: {
      name: "Capricorn",
      good_traits: [
        "Responsible", "Disciplined", "Self-control", "Good managers", "Ambitious", "Practical", "Patient", "Loyal", "Resourceful", "Cautious"
      ],
      bad_traits: [
        "Know-it-all", "Unforgiving", "Condescending", "Pessimistic", "Stubborn", "Overly serious", "Cold", "Aloof", "Materialistic", "Cynical"
      ],
      personality: [
        "Disciplined and responsible", "Ambitious and driven", "Practical and resourceful", "Patient and persistent", "Loyal and dedicated", "Good at managing tasks and people", "Cautious and careful", "Self-controlled and self-reliant", "Values tradition and order", "Tends to be serious and reserved"
      ],
      powers: [
        "Responsibility", "Discipline", "Self-control", "Management skills", "Ambition", "Practicality", "Patience", "Loyalty", "Resourcefulness", "Caution"
      ],
      weaknesses: [
        "Know-it-all attitude", "Unforgiving nature", "Condescension", "Pessimism", "Stubbornness", "Overly serious demeanor", "Coldness", "Aloofness", "Materialism", "Cynicism"
      ]
    },
    Aquarius: {
      name: "Aquarius",
      good_traits: [
        "Progressive", "Original", "Independent", "Humanitarian", "Inventive", "Innovative", "Intellectual", "Friendly", "Visionary", "Rebellious"
      ],
      bad_traits: [
        "Aloof", "Detached", "Uncompromising", "Stubborn", "Unpredictable", "Rebellious", "Inconsistent", "Overly idealistic", "Impersonal", "Perverse"
      ],
      personality: [
        "Independent and innovative", "Progressive and forward-thinking", "Humanitarian and idealistic", "Intellectual and curious", "Friendly and social", "Visionary and creative", "Original and unique", "Values freedom and individuality", "Rebellious and unconventional", "Tends to be aloof and detached"
      ],
      powers: [
        "Originality", "Innovation", "Independence", "Humanitarianism", "Intellectual curiosity", "Friendliness", "Vision", "Creativity", "Progressiveness", "Rebellion"
      ],
      weaknesses: [
        "Aloofness", "Detachment", "Stubbornness", "Unpredictability", "Rebellion", "Inconsistency", "Overly idealistic nature", "Impersonality", "Perverseness", "Uncompromising attitude"
      ]
    },
    Pisces: {
      name: "Pisces",
      good_traits: [
        "Compassionate", "Artistic", "Intuitive", "Gentle", "Wise", "Musical", "Selfless", "Empathetic", "Romantic", "Imaginative"
      ],
      bad_traits: [
        "Fearful", "Overly trusting", "Sad", "Desire to escape reality", "Can be a victim or martyr", "Overly sensitive", "Indecisive", "Lack of boundaries", "Lazy", "Gullible"
      ],
      personality: [
        "Compassionate and empathetic", "Intuitive and spiritual", "Creative and artistic", "Gentle and kind", "Romantic and dreamy", "Selfless and giving", "Imaginative and idealistic", "Wise and insightful", "Musical and poetic", "Tends to be overly sensitive"
      ],
      powers: [
        "Compassion", "Artistry", "Intuition", "Gentleness", "Wisdom", "Musical talent", "Selflessness", "Empathy", "Romanticism", "Imagination"
      ],
      weaknesses: [
        "Fearfulness", "Over-trusting nature", "Sadness", "Desire to escape", "Victim mentality", "Over-sensitivity", "Indecisiveness", "Lack of boundaries", "Laziness", "Gullibility"
      ]
    }
  };
  
  export default zodiacData;
  