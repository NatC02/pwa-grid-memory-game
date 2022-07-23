import { useEffect } from 'react';

// prop function to reset game
const Header = ({ handleNewGame, wins }) => {
  // Update page title with win count (as side effect)
  useEffect(() => {document.title = `${wins} wins`}, [wins]);

  return (
    <header className="header">
      <h4>{wins} wins</h4>
      <h3>PWA Grid Memory Game</h3>
      <button onClick={handleNewGame}>New Game</button>
    </header>
  );
};

export default Header;