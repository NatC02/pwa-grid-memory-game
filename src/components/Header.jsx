import { useEffect } from 'react';

// prop function to reset game
const Header = ({ handleNewGame, wins }) => {
  // Update page title with win count (side effect)
  useEffect(() => (document.title = `${wins} wins`), [wins]);

  return (
    <header className="header">
      <h4>{wins} wins</h4>
      <h3>Progressive Web App Grid Memory Game</h3>
      <button onClick={handleNewGame}>New Game</button>
    </header>
  );
};

export default Header;