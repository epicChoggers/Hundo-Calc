import React, { useState, useMemo } from 'react'
import { hundoOddsData, calculateHundoProbability, calculateExpectedHundos } from '../data/hundoOdds'
import './HundoCalculator.css'

const HundoCalculator = () => {
  const [attempts, setAttempts] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  // Filter data based on selected category
  const filteredData = useMemo(() => {
    if (selectedCategory === 'all') {
      return hundoOddsData;
    }
    return categories[selectedCategory] || [];
  }, [selectedCategory, categories]);

  // Handle input changes
  const handleAttemptChange = (method, value) => {
    const numValue = parseInt(value) || 0;
    setAttempts(prev => ({
      ...prev,
      [method]: numValue
    }));
  };

  // Calculate results for each method
  const calculateResults = () => {
    return filteredData.map(item => {
      const numAttempts = attempts[item.method] || 0;
      const probability = calculateHundoProbability(numAttempts, item.hundoOddsPercentage);
      const expected = calculateExpectedHundos(numAttempts, item.hundoOddsPercentage);
      
      return {
        ...item,
        attempts: numAttempts,
        probability,
        expected
      };
    });
  };

  const results = calculateResults();

  // Calculate totals
  const totalAttempts = Object.values(attempts).reduce((sum, val) => sum + val, 0);
  const totalExpected = results.reduce((sum, item) => sum + item.expected, 0);

  return (
    <div className="hundo-calculator">
      <header className="calculator-header">
        <h1>Pokémon GO Hundo Calculator</h1>
        <p>Calculate your odds of getting perfect IV Pokémon (hundos) based on your encounter history</p>
      </header>

      <div className="calculator-controls">
        <div className="category-filter">
          <label htmlFor="category-select">Filter by Category:</label>
          <select 
            id="category-select"
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {Object.keys(categories).map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="calculator-grid">
        {results.map(item => (
          <div key={item.method} className="method-card">
            <div className="method-header">
              <h3>{item.method}</h3>
              <div className="method-stats">
                <span className="odds">{item.hundoOdds}</span>
                <span className="percentage">({item.hundoOddsPercentage}%)</span>
                <span className="ranking">Rank #{item.ranking}</span>
              </div>
            </div>
            
            <div className="method-details">
              <p className="description">{item.description}</p>
              <div className="iv-info">
                <span>IV Floor: {item.ivFloor}</span>
                <span>Min IV%: {item.minIvPercentage}%</span>
              </div>
            </div>

            <div className="input-section">
              <label htmlFor={`attempts-${item.method}`}>
                Number of attempts:
              </label>
              <input
                id={`attempts-${item.method}`}
                type="number"
                min="0"
                value={attempts[item.method] || ''}
                onChange={(e) => handleAttemptChange(item.method, e.target.value)}
                placeholder="0"
              />
            </div>

            {item.attempts > 0 && (
              <div className="results">
                <div className="result-item">
                  <span className="label">Probability of at least 1 hundo:</span>
                  <span className="value probability">
                    {item.probability.toFixed(3)}%
                  </span>
                </div>
                <div className="result-item">
                  <span className="label">Expected number of hundos:</span>
                  <span className="value expected">
                    {item.expected.toFixed(3)}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {totalAttempts > 0 && (
        <div className="summary-section">
          <h2>Overall Summary</h2>
          <div className="summary-stats">
            <div className="summary-item">
              <span className="label">Total Attempts:</span>
              <span className="value">{totalAttempts}</span>
            </div>
            <div className="summary-item">
              <span className="label">Total Expected Hundos:</span>
              <span className="value">{totalExpected.toFixed(3)}</span>
            </div>
          </div>
        </div>
      )}

      <footer className="calculator-footer">
        <p>Data source: TofuVicGaming (updated August 16, 2025)</p>
        <p>Made with ❤️ for the Pokémon GO community</p>
      </footer>
    </div>
  );
};

export default HundoCalculator
