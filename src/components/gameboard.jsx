import { useState } from 'react'
import Card from './card'

export default function Gameboard({ cats, score, setScore, highScore, setHighScore }) {

  const [guessedCards, setGuessedCards] = useState([]);

  function checkGuess(id) {
    let alreadyGuessed = false;
    guessedCards.forEach(guess => {
      if (id === guess) {
        alreadyGuessed = true;
        setScore(0);
        setGuessedCards([]);
      }
    });
    if (!alreadyGuessed) {
      setScore(score => score + 1);
      setGuessedCards([
        ...guessedCards,
        id
      ])
      updateHighScore();
    }
  }

  const updateHighScore = () => {
    if (score >= highScore) {
        setHighScore(score + 1);
    }
  }

    return (
        <>
          <div className="gameboard">
            {cats.map((cat) => (
              <div className="card-container" key={cat.id}>
                <Card id={cat.id} imageURL={cat.url} onClick={() => checkGuess(cat.id)} />
              </div>
            ))}
          </div>
        </>
    )
}