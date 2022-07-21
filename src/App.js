import { useState, useEffect } from 'react';
import Card from './components/Card';
import shuffle from './utilities/shuffle';

import React from 'react';

function App() {

  const [cards, setCards] = useState(shuffle); // Cards array from assets dir

  const [pickOne, setPickOne] = useState(null); // First card selection
  const [pickTwo, setPickTwo] = useState(null); // Second card selection
  const [disabled, setDisabled] = useState(false); // delay between selections
  const [wins, setWins] = useState(0); // Win counter / streak 

  return (
    <>
      <div className="grid">
        {cards.map((card) => {
          const { image, id, matched } = card;
          
          return (
            <Card
              key={id}
              image={image}
              selected={false}
              onClick={() => {}}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
