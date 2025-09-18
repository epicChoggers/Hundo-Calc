import React, { useState, useMemo } from 'react';
import { hundoOddsData, calculateHundoProbability, calculateExpectedHundos, calculateShundoProbability, calculateExpectedShundos, getShinyOdds, calculateShinyProbability, calculateExpectedShinies } from '../data/hundoOdds';
import './HundoCalculator.css';

const HundoCalculator = () => {
  const [attempts, setAttempts] = useState({});
  const [selectedGroup, setSelectedGroup] = useState('raid-all');
  const [customIvFloor, setCustomIvFloor] = useState(0);
  const [customShinyRatio, setCustomShinyRatio] = useState("1/512"); // Default to 1/512

  // Helper function to parse ratio string and convert to percentage
  const parseRatioToPercentage = (ratioString) => {
    try {
      const parts = ratioString.split('/');
      if (parts.length !== 2) return 0.195; // Default to 1/512 if invalid
      
      const numerator = parseFloat(parts[0]);
      const denominator = parseFloat(parts[1]);
      
      if (denominator === 0 || isNaN(numerator) || isNaN(denominator)) {
        return 0.195; // Default to 1/512 if invalid
      }
      
      return (numerator / denominator) * 100;
    } catch (error) {
      return 0.195; // Default to 1/512 if parsing fails
    }
  };

  // Group data by category
  const categories = useMemo(() => {
    const categoryMap = {};
    hundoOddsData.forEach(item => {
      if (!categoryMap[item.category]) {
        categoryMap[item.category] = [];
      }
      categoryMap[item.category].push(item);
    });
    return categoryMap;
  }, []);

  // Get selected group data
  const selectedGroupData = useMemo(() => {
    if (selectedGroup === 'custom') {
      // Calculate hundo odds based on custom IV floor
      const possibleValues = 16 - customIvFloor; // Number of possible IV values (customIvFloor to 15)
      const favorableValues = 1; // Only 15-15-15 is a hundo
      const hundoProbability = Math.pow(favorableValues / possibleValues, 3) * 100;
      
      // Parse custom shiny ratio to percentage
      const customShinyPercentage = parseRatioToPercentage(customShinyRatio);
      
      return {
        category: "Custom",
        groupId: "custom",
        methods: ["Custom Encounter"],
        hundoOdds: `1/${Math.round(1 / (hundoProbability / 100))}`,
        hundoOddsPercentage: hundoProbability,
        ivFloor: `${customIvFloor}-${customIvFloor}-${customIvFloor}`,
        minIvPercentage: Math.round((customIvFloor / 15) * 100),
        description: "Custom encounter with user-defined IV floor and shiny odds",
        shinyEncounterType: "custom",
        customShinyOdds: customShinyPercentage,
        customShinyRatio: customShinyRatio
      };
    }
    return hundoOddsData.find(item => item.groupId === selectedGroup);
  }, [selectedGroup, customIvFloor, customShinyRatio]);

  // Handle input changes
  const handleAttemptChange = (value) => {
    const numValue = parseInt(value) || 0;
    setAttempts(prev => ({
      ...prev,
      [selectedGroup]: numValue
    }));
  };

  // Calculate results for selected group
  const calculateResults = () => {
    if (!selectedGroupData) return null;
    
    const numAttempts = attempts[selectedGroup] || 0;
    
    // Get shiny odds for this encounter type
    let shinyOdds;
    if (selectedGroupData.shinyEncounterType === 'custom') {
      shinyOdds = {
        odds: selectedGroupData.customShinyRatio,
        percentage: selectedGroupData.customShinyOdds
      };
    } else {
      shinyOdds = getShinyOdds(selectedGroupData.shinyEncounterType);
    }
    const shinyProbability = calculateShinyProbability(numAttempts, shinyOdds.percentage);
    const shinyExpected = calculateExpectedShinies(numAttempts, shinyOdds.percentage);
    
    // For Team Rocket encounters, calculate both pre and post purification results
    if (selectedGroupData.category === "Team Rocket (Shadow)") {
      // Pre-purification results
      const preHundoProbability = calculateHundoProbability(numAttempts, selectedGroupData.hundoOddsPercentage);
      const preHundoExpected = calculateExpectedHundos(numAttempts, selectedGroupData.hundoOddsPercentage);
      const preShundoProbability = calculateShundoProbability(numAttempts, selectedGroupData.hundoOddsPercentage, shinyOdds.percentage);
      const preShundoExpected = calculateExpectedShundos(numAttempts, selectedGroupData.hundoOddsPercentage, shinyOdds.percentage);
      
      // Post-purification results
      const postHundoProbability = calculateHundoProbability(numAttempts, selectedGroupData.purifiedOddsPercentage);
      const postHundoExpected = calculateExpectedHundos(numAttempts, selectedGroupData.purifiedOddsPercentage);
      const postShundoProbability = calculateShundoProbability(numAttempts, selectedGroupData.purifiedOddsPercentage, shinyOdds.percentage);
      const postShundoExpected = calculateExpectedShundos(numAttempts, selectedGroupData.purifiedOddsPercentage, shinyOdds.percentage);
      
      return {
        ...selectedGroupData,
        attempts: numAttempts,
        shinyOdds,
        shinyProbability,
        shinyExpected,
        // Pre-purification results
        preHundoProbability,
        preHundoExpected,
        preShundoProbability,
        preShundoExpected,
        // Post-purification results
        postHundoProbability,
        postHundoExpected,
        postShundoProbability,
        postShundoExpected
      };
    } else {
      // Regular results for non-Team Rocket encounters
      const hundoProbability = calculateHundoProbability(numAttempts, selectedGroupData.hundoOddsPercentage);
      const hundoExpected = calculateExpectedHundos(numAttempts, selectedGroupData.hundoOddsPercentage);
      const shundoProbability = calculateShundoProbability(numAttempts, selectedGroupData.hundoOddsPercentage, shinyOdds.percentage);
      const shundoExpected = calculateExpectedShundos(numAttempts, selectedGroupData.hundoOddsPercentage, shinyOdds.percentage);
      
      return {
        ...selectedGroupData,
        attempts: numAttempts,
        hundoProbability,
        hundoExpected,
        shinyOdds,
        shinyProbability,
        shinyExpected,
        shundoProbability,
        shundoExpected
      };
    }
  };

  const result = calculateResults();

  return (
    <div className="hundo-calculator">
      <header className="calculator-header">
        <h1>Pokémon GO Hundo Calculator</h1>
      
      </header>

      <div className="calculator-controls">
        <div className="method-selector">
          <label htmlFor="method-select">Select Encounter Method:</label>
          <select 
            id="method-select"
            value={selectedGroup} 
            onChange={(e) => setSelectedGroup(e.target.value)}
          >
            <option value="">Choose a method...</option>
            {Object.entries(categories).map(([category, groups]) => (
              <optgroup key={category} label={category}>
                {groups.map(group => (
                  <option key={group.groupId} value={group.groupId}>
                    {group.methods.length > 1 ? group.methods.join(', ') : group.methods[0]}
                  </option>
                ))}
              </optgroup>
            ))}
            <optgroup label="Custom">
              <option value="custom">Custom Encounter</option>
            </optgroup>
          </select>
        </div>
        
        {selectedGroupData && (
          <div className="shiny-info">
            <span className="shiny-odds-text">
              Shiny odds: {result.shinyOdds.odds} ({result.shinyOdds.percentage}%) per encounter
            </span>
          </div>
        )}

        {selectedGroup === 'custom' && (
          <div className="custom-inputs">
            <div className="custom-input-group">
              <label htmlFor="custom-iv-floor">IV Floor (0-15):</label>
              <input
                id="custom-iv-floor"
                type="number"
                min="0"
                max="15"
                value={customIvFloor}
                onChange={(e) => setCustomIvFloor(parseInt(e.target.value) || 0)}
              />
            </div>
            <div className="custom-input-group">
              <label htmlFor="custom-shiny-ratio">Shiny Odds (ratio):</label>
              <input
                id="custom-shiny-ratio"
                type="text"
                value={customShinyRatio}
                onChange={(e) => setCustomShinyRatio(e.target.value)}
                placeholder="1/512"
                pattern="[0-9]+/[0-9]+"
              />
            </div>
          </div>
        )}
      </div>

      {selectedGroupData && (
        <div className="calculator-content">
          <div className="method-card">
            <div className="method-header">
              <h3>{selectedGroupData.methods.length > 1 ? selectedGroupData.methods.join(', ') : selectedGroupData.methods[0]}</h3>
              <div className="method-stats">
                {selectedGroupData.category === "Team Rocket (Shadow)" ? (
                  <div className="dual-odds-display">
                    <div className="odds-display">
                      <span className="odds-label">Pre-Purification:</span>
                      <span className="odds">{selectedGroupData.hundoOdds} odds for Hundo</span>
                      <span className="percentage">({selectedGroupData.hundoOddsPercentage}%)</span>
                    </div>
                    <div className="odds-display">
                      <span className="odds-label">Post-Purification:</span>
                      <span className="odds">{selectedGroupData.purifiedOdds} odds for Purified Hundo</span>
                      <span className="percentage">({selectedGroupData.purifiedOddsPercentage}%)</span>
                    </div>
                  </div>
                ) : (
                  <div className="odds-display">
                    <span className="odds-label">Hundo Odds:</span>
                    <span className="odds">{selectedGroupData.hundoOdds} odds for Hundo</span>
                    <span className="percentage">({selectedGroupData.hundoOddsPercentage}%)</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="method-details">
              <p className="description">{selectedGroupData.description}</p>
              <div className="iv-info">
                <span>IV Floor: {selectedGroupData.ivFloor}</span>
                <span>Min IV%: {selectedGroupData.minIvPercentage}%</span>
              </div>
            </div>

            <div className="input-section">
              <label htmlFor="attempts-input">
                Number of attempts:
              </label>
              <input
                id="attempts-input"
                type="number"
                min="0"
                value={attempts[selectedGroup] || ''}
                onChange={(e) => handleAttemptChange(e.target.value)}
                placeholder="0"
              />
            </div>

            {result && result.attempts > 0 && (
              <div className="results">
                {result.category === "Team Rocket (Shadow)" ? (
                  <>
                    <div className="results-section">
                      <h4 className="results-title">Hundo Results</h4>
                      <div className="dual-results">
                        <div className="result-group">
                          <h5 className="result-group-title">Pre-Purification</h5>
                          <div className="result-item">
                            <span className="label">Probability of at least 1 hundo:</span>
                            <span className="value probability">
                              {result.preHundoProbability.toFixed(3)}%
                            </span>
                          </div>
                          <div className="result-item">
                            <span className="label">Expected number of hundos:</span>
                            <span className="value expected">
                              {result.preHundoExpected.toFixed(3)}
                            </span>
                          </div>
                        </div>
                        <div className="result-group">
                          <h5 className="result-group-title">Post-Purification</h5>
                          <div className="result-item">
                            <span className="label">Probability of at least 1 hundo:</span>
                            <span className="value probability">
                              {result.postHundoProbability.toFixed(3)}%
                            </span>
                          </div>
                          <div className="result-item">
                            <span className="label">Expected number of hundos:</span>
                            <span className="value expected">
                              {result.postHundoExpected.toFixed(3)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="results-section">
                      <h4 className="results-title">Shiny Results</h4>
                      <div className="result-item">
                        <span className="label">Probability of at least 1 shiny:</span>
                        <span className="value shiny-probability">
                          {result.shinyProbability.toFixed(3)}%
                        </span>
                      </div>
                      <div className="result-item">
                        <span className="label">Expected number of shinies:</span>
                        <span className="value shiny-expected">
                          {result.shinyExpected.toFixed(3)}
                        </span>
                      </div>
                    </div>

                    <div className="results-section">
                      <h4 className="results-title">Shundo Results (Shiny + Hundo)</h4>
                      <div className="dual-results">
                        <div className="result-group">
                          <h5 className="result-group-title">Pre-Purification</h5>
                          <div className="result-item">
                            <span className="label">Probability of at least 1 shundo:</span>
                            <span className="value shundo-probability">
                              {result.preShundoProbability.toFixed(3)}%
                            </span>
                          </div>
                          <div className="result-item">
                            <span className="label">Expected number of shundos:</span>
                            <span className="value shundo-expected">
                              {result.preShundoExpected.toFixed(3)}
                            </span>
                          </div>
                        </div>
                        <div className="result-group">
                          <h5 className="result-group-title">Post-Purification</h5>
                          <div className="result-item">
                            <span className="label">Probability of at least 1 shundo:</span>
                            <span className="value shundo-probability">
                              {result.postShundoProbability.toFixed(3)}%
                            </span>
                          </div>
                          <div className="result-item">
                            <span className="label">Expected number of shundos:</span>
                            <span className="value shundo-expected">
                              {result.postShundoExpected.toFixed(3)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="results-section">
                      <h4 className="results-title">Hundo Results</h4>
                      <div className="result-item">
                        <span className="label">Probability of at least 1 hundo:</span>
                        <span className="value probability">
                          {result.hundoProbability.toFixed(3)}%
                        </span>
                      </div>
                      <div className="result-item">
                        <span className="label">Expected number of hundos:</span>
                        <span className="value expected">
                          {result.hundoExpected.toFixed(3)}
                        </span>
                      </div>
                    </div>

                    <div className="results-section">
                      <h4 className="results-title">Shiny Results</h4>
                      <div className="result-item">
                        <span className="label">Probability of at least 1 shiny:</span>
                        <span className="value shiny-probability">
                          {result.shinyProbability.toFixed(3)}%
                        </span>
                      </div>
                      <div className="result-item">
                        <span className="label">Expected number of shinies:</span>
                        <span className="value shiny-expected">
                          {result.shinyExpected.toFixed(3)}
                        </span>
                      </div>
                    </div>

                    <div className="results-section">
                      <h4 className="results-title">Shundo Results (Shiny + Hundo)</h4>
                      <div className="result-item">
                        <span className="label">Probability of at least 1 shundo:</span>
                        <span className="value shundo-probability">
                          {result.shundoProbability.toFixed(3)}%
                        </span>
                      </div>
                      <div className="result-item">
                        <span className="label">Expected number of shundos:</span>
                        <span className="value shundo-expected">
                          {result.shundoExpected.toFixed(3)}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}



      <footer className="calculator-footer">
        <p>Source: <a href="https://www.reddit.com/r/TheSilphRoad/comments/1mroo5u/list_of_hundo_odds_and_iv_floors_for_every/" target="_blank" rel="noopener noreferrer">Hundo odds</a>, <a href="https://www.reddit.com/r/TheSilphRoad/comments/1g22fc4/global_shiny_rates/" target="_blank" rel="noopener noreferrer">Shiny odds</a></p>
        <p>Made with ❤️ for the Pokémon GO community</p>
      </footer>
    </div>
  );
};

export default HundoCalculator;
