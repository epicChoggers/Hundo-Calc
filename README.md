# Pokémon GO Hundo Calculator

An interactive React application that helps Pokémon GO players calculate their odds of encountering perfect IV Pokémon (hundos) based on their encounter history across different game mechanics.

## Features

- **Interactive Calculator**: Enter the number of attempts for each encounter type to see your probability of getting at least one hundo
- **Comprehensive Data**: Includes all encounter types from wild catches to trades, with accurate odds from TofuVicGaming
- **Category Filtering**: Filter by encounter categories (Wild Catch, Research Task, Raids, etc.)
- **Real-time Calculations**: See probability percentages and expected hundo counts instantly
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface with gradient backgrounds and smooth animations

## Encounter Types Included

- **Wild Catch**: Regular, weather boosted, and Mighty Pokemon encounters
- **Research Tasks**: Field research, special research, timed research, and more
- **Egg Hatches**: All egg types
- **Raids**: Regular and weather boosted raids
- **GO Battle League**: Regular rewards and special event rewards
- **Team Rocket**: Grunts, leaders, Giovanni, and shadow raids (including purification odds)
- **Trades**: All friendship levels with and without lucky chance consideration

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/hundo-calc.git
cd hundo-calc
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Deployment to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Update the `homepage` field in `package.json` with your GitHub username:
```json
"homepage": "https://yourusername.github.io/hundo-calc"
```

3. Deploy:
```bash
npm run deploy
```

## How to Use

1. **Select a Category**: Use the dropdown to filter by encounter type or view all categories
2. **Enter Attempts**: For each encounter type you've done, enter the number of attempts
3. **View Results**: See your probability of getting at least one hundo and expected number of hundos
4. **Check Summary**: View your overall statistics at the bottom

## Data Source

All hundo odds data is sourced from TofuVicGaming (updated August 16, 2025). The calculator uses the most current and accurate probabilities for each encounter type.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Data provided by TofuVicGaming
- Built for the Pokémon GO community
