import { useState, useEffect } from "react";
import Card from "./components/Card";
import shuffle from "./utilities/shuffle";

import React from "react";

function App() {
  const [cards, setCards] = useState(shuffle); // Cards array from assets dir

  const [pickOne, setPickOne] = useState(null); // First card selection
  const [pickTwo, setPickTwo] = useState(null); // Second card selection
  const [wins, setWins] = useState(0); // Win counter / streak
  const [disabled, setDisabled] = useState(false); // Delay handler
  const [setBadge, clearBadge] = useAppBadge(); // Handles app badge

  // Handle card selection
  const handleClick = (card) => {
    if (!disabled) {
      pickOne ? setPickTwo(card) : setPickOne(card);
    }
  };

  // When turn is complete, reset selections and disable
  const handleTurn = () => {
    setPickOne(null);
    setPickTwo(null);
    setDisabled(false);
  };

   // Start over
   const handleNewGame = () => {
    setWins(0);
    clearBadge();
    handleTurn();
    setCards(shuffle);
  };

  // Used for selection and match handling
  useEffect(() => {
    let pickTimer;

    // Two cards have been clicked
    if (pickOne && pickTwo) {
      // Check if the cards the same
      if (pickOne.image === pickTwo.image) {
        setCards((prevCards) => {
          // set match property
          return prevCards.map((card) => {
            if (card.image === pickOne.image) {
              // Update card property to reflect match
              return { ...card, matched: true };
            } else {
              // No match
              return card;
            }
          });
        });
        handleTurn();
      } else {
        // Prevent new selections until after delay
        setDisabled(true);
        // Add delay between selections
        pickTimer = setTimeout(() => {
          handleTurn();
        }, 1000);
      }
    }

    // prevent conflicting timeouts between renders
    return () => {
      clearTimeout(pickTimer);
    };
    // whenever the state changes in cards, pickOne, and pickTwo run these values
  }, [cards, pickOne, pickTwo]);

  // If player has found all matches, handle accordingly
  useEffect(() => {
    // Check for any remaining card matches
    const checkWin = cards.filter((card) => !card.matched);

    // All matches made, handle win/badge counters
    if (cards.length && checkWin.length < 1) {
      console.log("You win!");
      setWins(wins + 1);
      handleTurn();
      setCards(shuffle);
    }
  }, [cards, wins]);

  return (
    <>
      <div className="grid">
        {cards.map((card) => {
          const { image, id, matched } = card;

          return (
            <Card
              key={id}
              image={image}
              selected={card === pickOne || card === pickTwo || matched}
              onClick={() => handleClick(card)}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
