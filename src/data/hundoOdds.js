// Pokémon GO Hundo Odds Data
// Based on data from TofuVicGaming (updated August 16, 2025)

export const hundoOddsData = [
  // Wild Catch
  {
    category: "Wild Catch",
    method: "Wild Catch",
    hundoOdds: "1/4,096",
    hundoOddsPercentage: 0.024,
    ranking: 17,
    ivFloor: "0-0-0",
    minIvPercentage: 0,
    description: "Regular wild encounters"
  },
  {
    category: "Wild Catch",
    method: "Wild Catch: Weather Boost",
    hundoOdds: "1/1,728",
    hundoOddsPercentage: 0.058,
    ranking: 13,
    ivFloor: "4-4-4",
    minIvPercentage: 27,
    description: "Weather boosted wild encounters"
  },
  {
    category: "Wild Catch",
    method: "Mighty Pokemon (includes Weather Boost)",
    hundoOdds: "1/27",
    hundoOddsPercentage: 3.704,
    ranking: 1,
    ivFloor: "13-13-13",
    minIvPercentage: 87,
    description: "Mighty Pokemon encounters"
  },

  // Research Task
  {
    category: "Research Task",
    method: "Field Research",
    hundoOdds: "1/216",
    hundoOddsPercentage: 0.463,
    ranking: 5,
    ivFloor: "10-10-10",
    minIvPercentage: 67,
    description: "Field research task rewards"
  },
  {
    category: "Research Task",
    method: "Party Play Reward",
    hundoOdds: "1/216",
    hundoOddsPercentage: 0.463,
    ranking: 5,
    ivFloor: "10-10-10",
    minIvPercentage: 67,
    description: "Party play rewards"
  },
  {
    category: "Research Task",
    method: "Pinning Postcards",
    hundoOdds: "1/216",
    hundoOddsPercentage: 0.463,
    ranking: 5,
    ivFloor: "10-10-10",
    minIvPercentage: 67,
    description: "Postcard pinning rewards"
  },
  {
    category: "Research Task",
    method: "Referral Reward",
    hundoOdds: "1/216",
    hundoOddsPercentage: 0.463,
    ranking: 5,
    ivFloor: "10-10-10",
    minIvPercentage: 67,
    description: "Referral program rewards"
  },
  {
    category: "Research Task",
    method: "Special Research",
    hundoOdds: "1/216",
    hundoOddsPercentage: 0.463,
    ranking: 5,
    ivFloor: "10-10-10",
    minIvPercentage: 67,
    description: "Special research task rewards"
  },
  {
    category: "Research Task",
    method: "Timed Research",
    hundoOdds: "1/216",
    hundoOddsPercentage: 0.463,
    ranking: 5,
    ivFloor: "10-10-10",
    minIvPercentage: 67,
    description: "Timed research task rewards"
  },

  // Egg Hatch
  {
    category: "Egg Hatch",
    method: "All Egg Hatches",
    hundoOdds: "1/216",
    hundoOddsPercentage: 0.463,
    ranking: 5,
    ivFloor: "10-10-10",
    minIvPercentage: 67,
    description: "All types of egg hatches"
  },

  // Raid
  {
    category: "Raid",
    method: "Base",
    hundoOdds: "1/216",
    hundoOddsPercentage: 0.463,
    ranking: 5,
    ivFloor: "10-10-10",
    minIvPercentage: 67,
    description: "Regular raid encounters"
  },
  {
    category: "Raid",
    method: "Weather Boost",
    hundoOdds: "1/216",
    hundoOddsPercentage: 0.463,
    ranking: 5,
    ivFloor: "10-10-10",
    minIvPercentage: 67,
    description: "Weather boosted raid encounters"
  },

  // GO Battle League
  {
    category: "GO Battle League",
    method: "Reward",
    hundoOdds: "1/216",
    hundoOddsPercentage: 0.463,
    ranking: 5,
    ivFloor: "10-10-10",
    minIvPercentage: 67,
    description: "Regular GBL rewards"
  },
  {
    category: "GO Battle League",
    method: "GO Battle Day, Week, Weekend Reward",
    hundoOdds: "1/4,096",
    hundoOddsPercentage: 0.024,
    ranking: 18,
    ivFloor: "0-0-0",
    minIvPercentage: 0,
    description: "Special GBL event rewards"
  },

  // Team Rocket (Shadow)
  {
    category: "Team Rocket (Shadow)",
    method: "Grunts & Leaders",
    hundoOdds: "1/4,096",
    hundoOddsPercentage: 0.024,
    ranking: 18,
    ivFloor: "0-0-0",
    minIvPercentage: 0,
    description: "Regular Team Rocket encounters"
  },
  {
    category: "Team Rocket (Shadow)",
    method: "Grunts & Leaders: Weather Boost",
    hundoOdds: "1/1,728",
    hundoOddsPercentage: 0.058,
    ranking: 14,
    ivFloor: "4-4-4",
    minIvPercentage: 27,
    description: "Weather boosted Team Rocket encounters"
  },
  {
    category: "Team Rocket (Shadow)",
    method: "Giovanni (includes Weather Boost)",
    hundoOdds: "1/1,000",
    hundoOddsPercentage: 0.100,
    ranking: 12,
    ivFloor: "6-6-6",
    minIvPercentage: 40,
    description: "Giovanni encounters"
  },
  {
    category: "Team Rocket (Shadow)",
    method: "Raid (includes Weather Boost)",
    hundoOdds: "1/1,000",
    hundoOddsPercentage: 0.100,
    ranking: 12,
    ivFloor: "6-6-6",
    minIvPercentage: 40,
    description: "Shadow raid encounters"
  },
  {
    category: "Team Rocket (Shadow)",
    method: "Raid w/ IV Boost (includes Weather Boost)",
    hundoOdds: "1/729",
    hundoOddsPercentage: 0.137,
    ranking: 8,
    ivFloor: "7-7-7",
    minIvPercentage: 47,
    description: "Shadow raids with IV boost"
  },

  // Team Rocket (Shadow): If Purifying 13-13-13 and Higher
  {
    category: "Team Rocket (Shadow): If Purifying 13-13-13 and Higher",
    method: "Grunts & Leaders",
    hundoOdds: "1/152",
    hundoOddsPercentage: 0.658,
    ranking: 4,
    ivFloor: "n/a",
    minIvPercentage: "n/a",
    description: "Purified from regular Team Rocket encounters"
  },
  {
    category: "Team Rocket (Shadow): If Purifying 13-13-13 and Higher",
    method: "Grunts & Leaders: Weather Boost",
    hundoOdds: "1/64",
    hundoOddsPercentage: 1.563,
    ranking: 3,
    ivFloor: "n/a",
    minIvPercentage: "n/a",
    description: "Purified from weather boosted Team Rocket encounters"
  },
  {
    category: "Team Rocket (Shadow): If Purifying 13-13-13 and Higher",
    method: "Giovanni (includes Weather Boost)",
    hundoOdds: "1/37",
    hundoOddsPercentage: 2.700,
    ranking: 2,
    ivFloor: "n/a",
    minIvPercentage: "n/a",
    description: "Purified from Giovanni encounters"
  },
  {
    category: "Team Rocket (Shadow): If Purifying 13-13-13 and Higher",
    method: "Raid",
    hundoOdds: "1/37",
    hundoOddsPercentage: 2.700,
    ranking: 2,
    ivFloor: "n/a",
    minIvPercentage: "n/a",
    description: "Purified from shadow raid encounters"
  },

  // Trade - Typical [includes default 5% Lucky Chance]
  {
    category: "Trade - Typical [includes default 5% Lucky Chance]",
    method: "Friend (no hearts)",
    hundoOdds: "1/987",
    hundoOddsPercentage: 0.101,
    ranking: 11,
    ivFloor: "0-0-0",
    minIvPercentage: 0,
    description: "Trading with friends (no friendship level)"
  },
  {
    category: "Trade - Typical [includes default 5% Lucky Chance]",
    method: "Good Friend",
    hundoOdds: "1/941",
    hundoOddsPercentage: 0.106,
    ranking: 10,
    ivFloor: "1-1-1",
    minIvPercentage: 7,
    description: "Trading with good friends"
  },
  {
    category: "Trade - Typical [includes default 5% Lucky Chance]",
    method: "Great Friend",
    hundoOdds: "1/887",
    hundoOddsPercentage: 0.113,
    ranking: 9,
    ivFloor: "2-2-2",
    minIvPercentage: 13,
    description: "Trading with great friends"
  },
  {
    category: "Trade - Typical [includes default 5% Lucky Chance]",
    method: "Ultra Friend",
    hundoOdds: "1/824",
    hundoOddsPercentage: 0.121,
    ranking: 7,
    ivFloor: "3-3-3",
    minIvPercentage: 20,
    description: "Trading with ultra friends"
  },
  {
    category: "Trade - Typical [includes default 5% Lucky Chance]",
    method: "Best Friend",
    hundoOdds: "1/669",
    hundoOddsPercentage: 0.149,
    ranking: 6,
    ivFloor: "5-5-5",
    minIvPercentage: 33,
    description: "Trading with best friends"
  },
  {
    category: "Trade - Typical [includes default 5% Lucky Chance]",
    method: "Lucky Friend (includes Lucky Trinket)",
    hundoOdds: "1/64",
    hundoOddsPercentage: 1.563,
    ranking: 3,
    ivFloor: "12-12-12",
    minIvPercentage: 80,
    description: "Lucky trades"
  },

  // Trade - Atypical [excludes default 5% Lucky Chance]
  {
    category: "Trade - Atypical [excludes default 5% Lucky Chance]",
    method: "Friend (no hearts)",
    hundoOdds: "1/4,096",
    hundoOddsPercentage: 0.024,
    ranking: 18,
    ivFloor: "0-0-0",
    minIvPercentage: 0,
    description: "Trading without lucky chance consideration"
  },
  {
    category: "Trade - Atypical [excludes default 5% Lucky Chance]",
    method: "Good Friend",
    hundoOdds: "1/3,375",
    hundoOddsPercentage: 0.030,
    ranking: 17,
    ivFloor: "1-1-1",
    minIvPercentage: 7,
    description: "Trading without lucky chance consideration"
  },
  {
    category: "Trade - Atypical [excludes default 5% Lucky Chance]",
    method: "Great Friend",
    hundoOdds: "1/2,744",
    hundoOddsPercentage: 0.036,
    ranking: 16,
    ivFloor: "2-2-2",
    minIvPercentage: 13,
    description: "Trading without lucky chance consideration"
  },
  {
    category: "Trade - Atypical [excludes default 5% Lucky Chance]",
    method: "Ultra Friend",
    hundoOdds: "1/2,197",
    hundoOddsPercentage: 0.046,
    ranking: 15,
    ivFloor: "3-3-3",
    minIvPercentage: 20,
    description: "Trading without lucky chance consideration"
  },
  {
    category: "Trade - Atypical [excludes default 5% Lucky Chance]",
    method: "Best Friend",
    hundoOdds: "1/1,331",
    hundoOddsPercentage: 0.075,
    ranking: 12,
    ivFloor: "5-5-5",
    minIvPercentage: 33,
    description: "Trading without lucky chance consideration"
  }
];

// Helper function to calculate probability of getting at least one hundo
export const calculateHundoProbability = (attempts, hundoOddsPercentage) => {
  if (attempts <= 0) return 0
  
  // Convert percentage to decimal
  const probability = hundoOddsPercentage / 100
  
  // Calculate probability of NOT getting a hundo in all attempts
  const noHundoProbability = Math.pow(1 - probability, attempts)
  
  // Probability of getting at least one hundo
  return (1 - noHundoProbability) * 100
}

// Helper function to calculate expected number of hundos
export const calculateExpectedHundos = (attempts, hundoOddsPercentage) => {
  if (attempts <= 0) return 0
  
  const probability = hundoOddsPercentage / 100
  return attempts * probability
}
