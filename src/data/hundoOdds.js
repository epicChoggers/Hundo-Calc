// Pokémon GO Hundo Odds Data
// Based on data from TofuVicGaming (updated August 16, 2025)

export const hundoOddsData = [
  // Wild Catch
  {
    category: "Wild Catch",
    groupId: "wild-regular",
    methods: ["Wild Catch"],
    hundoOdds: "1/4,096",
    hundoOddsPercentage: 0.024,
    ivFloor: "0-0-0",
    minIvPercentage: 0,
    description: "Regular wild encounters",
    shinyEncounterType: "default"
  },
  {
    category: "Wild Catch",
    groupId: "wild-weather",
    methods: ["Wild Catch: Weather Boost"],
    hundoOdds: "1/1,728",
    hundoOddsPercentage: 0.058,
    ivFloor: "4-4-4",
    minIvPercentage: 27,
    description: "Weather boosted wild encounters",
    shinyEncounterType: "default"
  },
  {
    category: "Wild Catch",
    groupId: "wild-mighty",
    methods: ["Mighty Pokemon (includes Weather Boost)"],
    hundoOdds: "1/27",
    hundoOddsPercentage: 3.704,
    ivFloor: "13-13-13",
    minIvPercentage: 87,
    description: "Mighty Pokemon encounters",
    shinyEncounterType: "default"
  },

  // Research Task (all have same odds)
  {
    category: "Research Task",
    groupId: "research-all",
    methods: [
      "Field Research",
      "Party Play Reward", 
      "Pinning Postcards",
      "Referral Reward",
      "Special Research",
      "Timed Research"
    ],
    hundoOdds: "1/216",
    hundoOddsPercentage: 0.463,
    ivFloor: "10-10-10",
    minIvPercentage: 67,
    description: "All research task rewards (field, special, timed, party play, postcards, referral)",
    shinyEncounterType: "default"
  },

  // Egg Hatch
  {
    category: "Egg Hatch",
    groupId: "egg-all",
    methods: ["All Egg Hatches"],
    hundoOdds: "1/216",
    hundoOddsPercentage: 0.463,
    ivFloor: "10-10-10",
    minIvPercentage: 67,
    description: "All types of egg hatches",
    shinyEncounterType: "egg-baby"
  },

  // Raid (both have same odds)
  {
    category: "Raid",
    groupId: "raid-all",
    methods: ["Base", "Weather Boost"],
    hundoOdds: "1/216",
    hundoOddsPercentage: 0.463,
    ivFloor: "10-10-10",
    minIvPercentage: 67,
    description: "All raid encounters (regular and weather boosted)",
    shinyEncounterType: "legendary-raid"
  },

  // GO Battle League
  {
    category: "GO Battle League",
    groupId: "gbl-regular",
    methods: ["Reward"],
    hundoOdds: "1/216",
    hundoOddsPercentage: 0.463,
    ivFloor: "10-10-10",
    minIvPercentage: 67,
    description: "Regular GBL rewards",
    shinyEncounterType: "default"
  },
  {
    category: "GO Battle League",
    groupId: "gbl-events",
    methods: ["GO Battle Day, Week, Weekend Reward"],
    hundoOdds: "1/4,096",
    hundoOddsPercentage: 0.024,
    ivFloor: "0-0-0",
    minIvPercentage: 0,
    description: "Special GBL event rewards",
    shinyEncounterType: "default"
  },

  // Team Rocket (Shadow)
  {
    category: "Team Rocket (Shadow)",
    groupId: "rocket-regular",
    methods: ["Grunts & Leaders"],
    hundoOdds: "1/4,096",
    hundoOddsPercentage: 0.024,
    ivFloor: "0-0-0",
    minIvPercentage: 0,
    description: "Regular Team Rocket encounters",
    shinyEncounterType: "shadow-grunt"
  },
  {
    category: "Team Rocket (Shadow)",
    groupId: "rocket-weather",
    methods: ["Grunts & Leaders: Weather Boost"],
    hundoOdds: "1/1,728",
    hundoOddsPercentage: 0.058,
    ivFloor: "4-4-4",
    minIvPercentage: 27,
    description: "Weather boosted Team Rocket encounters",
    shinyEncounterType: "shadow-grunt"
  },
  {
    category: "Team Rocket (Shadow)",
    groupId: "rocket-giovanni",
    methods: ["Giovanni (includes Weather Boost)"],
    hundoOdds: "1/1,000",
    hundoOddsPercentage: 0.100,
    ivFloor: "6-6-6",
    minIvPercentage: 40,
    description: "Giovanni encounters",
    shinyEncounterType: "shadow-leader"
  },
  {
    category: "Team Rocket (Shadow)",
    groupId: "rocket-raid",
    methods: ["Raid (includes Weather Boost)"],
    hundoOdds: "1/1,000",
    hundoOddsPercentage: 0.100,
    ivFloor: "6-6-6",
    minIvPercentage: 40,
    description: "Shadow raid encounters",
    shinyEncounterType: "shadow-leader"
  },
  {
    category: "Team Rocket (Shadow)",
    groupId: "rocket-raid-boost",
    methods: ["Raid w/ IV Boost (includes Weather Boost)"],
    hundoOdds: "1/729",
    hundoOddsPercentage: 0.137,
    ivFloor: "7-7-7",
    minIvPercentage: 47,
    description: "Shadow raids with IV boost",
    shinyEncounterType: "shadow-leader"
  },

  // Team Rocket (Shadow): If Purifying 13-13-13 and Higher
  {
    category: "Team Rocket (Shadow): If Purifying 13-13-13 and Higher",
    groupId: "purify-regular",
    methods: ["Grunts & Leaders"],
    hundoOdds: "1/152",
    hundoOddsPercentage: 0.658,
    ivFloor: "n/a",
    minIvPercentage: "n/a",
    description: "Purified from regular Team Rocket encounters",
    shinyEncounterType: "shadow-grunt"
  },
  {
    category: "Team Rocket (Shadow): If Purifying 13-13-13 and Higher",
    groupId: "purify-weather",
    methods: ["Grunts & Leaders: Weather Boost"],
    hundoOdds: "1/64",
    hundoOddsPercentage: 1.563,
    ivFloor: "n/a",
    minIvPercentage: "n/a",
    description: "Purified from weather boosted Team Rocket encounters",
    shinyEncounterType: "shadow-grunt"
  },
  {
    category: "Team Rocket (Shadow): If Purifying 13-13-13 and Higher",
    groupId: "purify-giovanni",
    methods: ["Giovanni (includes Weather Boost)"],
    hundoOdds: "1/37",
    hundoOddsPercentage: 2.700,
    ivFloor: "n/a",
    minIvPercentage: "n/a",
    description: "Purified from Giovanni encounters",
    shinyEncounterType: "shadow-leader"
  },
  {
    category: "Team Rocket (Shadow): If Purifying 13-13-13 and Higher",
    groupId: "purify-raid",
    methods: ["Raid"],
    hundoOdds: "1/37",
    hundoOddsPercentage: 2.700,
    ivFloor: "n/a",
    minIvPercentage: "n/a",
    description: "Purified from shadow raid encounters",
    shinyEncounterType: "shadow-leader"
  },

  // Trade - Typical [includes default 5% Lucky Chance]
  {
    category: "Trade - Typical [includes default 5% Lucky Chance]",
    groupId: "trade-no-hearts",
    methods: ["Friend (no hearts)"],
    hundoOdds: "1/987",
    hundoOddsPercentage: 0.101,
    ivFloor: "0-0-0",
    minIvPercentage: 0,
    description: "Trading with friends (no friendship level)",
    shinyEncounterType: "default"
  },
  {
    category: "Trade - Typical [includes default 5% Lucky Chance]",
    groupId: "trade-good",
    methods: ["Good Friend"],
    hundoOdds: "1/941",
    hundoOddsPercentage: 0.106,
    ivFloor: "1-1-1",
    minIvPercentage: 7,
    description: "Trading with good friends",
    shinyEncounterType: "default"
  },
  {
    category: "Trade - Typical [includes default 5% Lucky Chance]",
    groupId: "trade-great",
    methods: ["Great Friend"],
    hundoOdds: "1/887",
    hundoOddsPercentage: 0.113,
    ivFloor: "2-2-2",
    minIvPercentage: 13,
    description: "Trading with great friends",
    shinyEncounterType: "default"
  },
  {
    category: "Trade - Typical [includes default 5% Lucky Chance]",
    groupId: "trade-ultra",
    methods: ["Ultra Friend"],
    hundoOdds: "1/824",
    hundoOddsPercentage: 0.121,
    ivFloor: "3-3-3",
    minIvPercentage: 20,
    description: "Trading with ultra friends",
    shinyEncounterType: "default"
  },
  {
    category: "Trade - Typical [includes default 5% Lucky Chance]",
    groupId: "trade-best",
    methods: ["Best Friend"],
    hundoOdds: "1/669",
    hundoOddsPercentage: 0.149,
    ivFloor: "5-5-5",
    minIvPercentage: 33,
    description: "Trading with best friends",
    shinyEncounterType: "default"
  },
  {
    category: "Trade - Typical [includes default 5% Lucky Chance]",
    groupId: "trade-lucky",
    methods: ["Lucky Friend (includes Lucky Trinket)"],
    hundoOdds: "1/64",
    hundoOddsPercentage: 1.563,
    ivFloor: "12-12-12",
    minIvPercentage: 80,
    description: "Lucky trades",
    shinyEncounterType: "default"
  },

  // Trade - Atypical [excludes default 5% Lucky Chance]
  {
    category: "Trade - Atypical [excludes default 5% Lucky Chance]",
    groupId: "trade-atypical-no-hearts",
    methods: ["Friend (no hearts)"],
    hundoOdds: "1/4,096",
    hundoOddsPercentage: 0.024,
    ivFloor: "0-0-0",
    minIvPercentage: 0,
    description: "Trading without lucky chance consideration",
    shinyEncounterType: "default"
  },
  {
    category: "Trade - Atypical [excludes default 5% Lucky Chance]",
    groupId: "trade-atypical-good",
    methods: ["Good Friend"],
    hundoOdds: "1/3,375",
    hundoOddsPercentage: 0.030,
    ivFloor: "1-1-1",
    minIvPercentage: 7,
    description: "Trading without lucky chance consideration",
    shinyEncounterType: "default"
  },
  {
    category: "Trade - Atypical [excludes default 5% Lucky Chance]",
    groupId: "trade-atypical-great",
    methods: ["Great Friend"],
    hundoOdds: "1/2,744",
    hundoOddsPercentage: 0.036,
    ivFloor: "2-2-2",
    minIvPercentage: 13,
    description: "Trading without lucky chance consideration",
    shinyEncounterType: "default"
  },
  {
    category: "Trade - Atypical [excludes default 5% Lucky Chance]",
    groupId: "trade-atypical-ultra",
    methods: ["Ultra Friend"],
    hundoOdds: "1/2,197",
    hundoOddsPercentage: 0.046,
    ivFloor: "3-3-3",
    minIvPercentage: 20,
    description: "Trading without lucky chance consideration",
    shinyEncounterType: "default"
  },
  {
    category: "Trade - Atypical [excludes default 5% Lucky Chance]",
    groupId: "trade-atypical-best",
    methods: ["Best Friend"],
    hundoOdds: "1/1,331",
    hundoOddsPercentage: 0.075,
    ivFloor: "5-5-5",
    minIvPercentage: 33,
    description: "Trading without lucky chance consideration",
    shinyEncounterType: "default"
  }
];

// Helper function to calculate probability of getting at least one hundo
export const calculateHundoProbability = (attempts, hundoOddsPercentage) => {
  if (attempts <= 0) return 0;
  
  // Convert percentage to decimal
  const probability = hundoOddsPercentage / 100;
  
  // Calculate probability of NOT getting a hundo in all attempts
  const noHundoProbability = Math.pow(1 - probability, attempts);
  
  // Probability of getting at least one hundo
  return (1 - noHundoProbability) * 100;
};

// Helper function to calculate expected number of hundos
export const calculateExpectedHundos = (attempts, hundoOddsPercentage) => {
  if (attempts <= 0) return 0;
  
  const probability = hundoOddsPercentage / 100;
  return attempts * probability;
};

// Helper function to calculate shundo (shiny hundo) odds
// Shundo = Shiny + Hundo (both conditions must be met)
export const calculateShundoProbability = (attempts, hundoOddsPercentage, shinyOddsPercentage) => {
  if (attempts <= 0) return 0;
  
  // Convert percentages to decimals
  const hundoProbability = hundoOddsPercentage / 100;
  const shinyProbability = shinyOddsPercentage / 100;
  
  // Probability of getting both shiny AND hundo in a single encounter
  const shundoProbability = hundoProbability * shinyProbability;
  
  // Calculate probability of NOT getting a shundo in all attempts
  const noShundoProbability = Math.pow(1 - shundoProbability, attempts);
  
  // Probability of getting at least one shundo
  return (1 - noShundoProbability) * 100;
};

// Helper function to calculate expected number of shundos
export const calculateExpectedShundos = (attempts, hundoOddsPercentage, shinyOddsPercentage) => {
  if (attempts <= 0) return 0;
  
  const hundoProbability = hundoOddsPercentage / 100;
  const shinyProbability = shinyOddsPercentage / 100;
  const shundoProbability = hundoProbability * shinyProbability;
  
  return attempts * shundoProbability;
};

// Shiny odds data
export const shinyOddsData = {
  "1:10": {
    odds: "1/10",
    percentage: 10.0,
    encounters: ["Raid Day", "Research Day", "Hatch Day", "DAI Galar Birds"]
  },
  "1:20": {
    odds: "1/20", 
    percentage: 5.0,
    encounters: ["Legendary Raids (also wild Lake Guardians)"]
  },
  "1:25": {
    odds: "1/25",
    percentage: 4.0,
    encounters: ["Community Day"]
  },
  "1:64": {
    odds: "1/64",
    percentage: 1.563,
    encounters: [
      "Permaboost Wild Spawns",
      "Go Fest Ticket Spawns (In Person)",
      "Eggs (Baby Pokémon)",
      "Shadow Pokémon (Rocket Leaders)",
      "Smeargle (Event)"
    ]
  },
  "1:128": {
    odds: "1/128",
    percentage: 0.781,
    encounters: [
      "Go Fest Ticket Spawns (Global Ticket)",
      "Pokémon that have a Mega Form (and are not permaboosted)",
      "Meltan (Event)"
    ]
  },
  "1:256": {
    odds: "1/256",
    percentage: 0.391,
    encounters: ["Shadow Pokemon (Grunts)"]
  },
  "1:512": {
    odds: "1/512",
    percentage: 0.195,
    encounters: ["Everything else"]
  }
};

// Helper function to get shiny odds for encounter type
export const getShinyOdds = (encounterType) => {
  // Map encounter types to shiny odds
  const shinyMapping = {
    // Raid Day, Research Day, Hatch Day, DAI Galar Birds
    "raid-day": "1:10",
    "research-day": "1:10", 
    "hatch-day": "1:10",
    "dai-galar-birds": "1:10",
    
    // Legendary Raids
    "legendary-raid": "1:20",
    
    // Community Day
    "community-day": "1:25",
    
    // Permaboost Wild Spawns
    "wild-permaboost": "1:64",
    
    // Go Fest Ticket Spawns (In Person)
    "go-fest-in-person": "1:64",
    
    // Eggs (Baby Pokémon)
    "egg-baby": "1:64",
    
    // Shadow Pokémon (Rocket Leaders)
    "shadow-leader": "1:64",
    
    // Smeargle (Event)
    "smeargle-event": "1:64",
    
    // Go Fest Ticket Spawns (Global Ticket)
    "go-fest-global": "1:128",
    
    // Pokémon that have a Mega Form
    "mega-form": "1:128",
    
    // Meltan (Event)
    "meltan-event": "1:128",
    
    // Shadow Pokemon (Grunts)
    "shadow-grunt": "1:256",
    
    // Everything else (default)
    "default": "1:512"
  };
  
  const shinyOddsKey = shinyMapping[encounterType] || "1:512";
  return shinyOddsData[shinyOddsKey];
};

// Helper function to calculate shiny probability
export const calculateShinyProbability = (attempts, shinyOddsPercentage) => {
  if (attempts <= 0) return 0;
  
  const probability = shinyOddsPercentage / 100;
  const noShinyProbability = Math.pow(1 - probability, attempts);
  
  return (1 - noShinyProbability) * 100;
};

// Helper function to calculate expected number of shinies
export const calculateExpectedShinies = (attempts, shinyOddsPercentage) => {
  if (attempts <= 0) return 0;
  
  const probability = shinyOddsPercentage / 100;
  return attempts * probability;
};