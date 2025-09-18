import React, { useState, useMemo } from 'react';
import { hundoOddsData, calculateHundoProbability, calculateExpectedHundos, calculateShundoProbability, calculateExpectedShundos, getShinyOdds, calculateShinyProbability, calculateExpectedShinies } from '../data/hundoOdds';
import './HundoCalculator.css';

const HundoCalculator = () => {
  const [attempts, setAttempts] = useState({});
  const [selectedGroup, setSelectedGroup] = useState('raid-all');

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
    return hundoOddsData.find(item => item.groupId === selectedGroup);
  }, [selectedGroup]);

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
    const hundoProbability = calculateHundoProbability(numAttempts, selectedGroupData.hundoOddsPercentage);
    const hundoExpected = calculateExpectedHundos(numAttempts, selectedGroupData.hundoOddsPercentage);
    
    // Get shiny odds for this encounter type
    const shinyOdds = getShinyOdds(selectedGroupData.shinyEncounterType);
    const shinyProbability = calculateShinyProbability(numAttempts, shinyOdds.percentage);
    const shinyExpected = calculateExpectedShinies(numAttempts, shinyOdds.percentage);
    
    // Calculate shundo (shiny hundo) odds - both conditions must be met
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
  };

  const result = calculateResults();

  return (
    <div className="hundo-calculator">
      <header className="calculator-header">
        <h1>Pokémon GO Hundo Calculator</h1>
        <p>Calculate your odds of getting perfect IV Pokémon (hundos) based on your encounter history</p>
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
          </select>
        </div>
        
        {selectedGroupData && (
          <div className="shiny-info">
            <span className="shiny-odds-text">
              Shiny odds: {result.shinyOdds.odds} ({result.shinyOdds.percentage}%)
            </span>
          </div>
        )}
      </div>

      {selectedGroupData && (
        <div className="calculator-content">
          <div className="method-card">
            <div className="method-header">
              <h3>{selectedGroupData.methods.length > 1 ? selectedGroupData.methods.join(', ') : selectedGroupData.methods[0]}</h3>
              <div className="method-stats">
                <span className="odds">{selectedGroupData.hundoOdds}</span>
                <span className="percentage">({selectedGroupData.hundoOddsPercentage}%)</span>
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
