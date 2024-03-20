import { useState } from 'react'
import Card from './card'

export default function Gameboard({ cats, score, setScore, highScore, setHighScore, shuffleCards, gameOver, setGameOver, setGameLost, loadingScreen }) {

  const [guessedCards, setGuessedCards] = useState([]);

  function checkGuess(id) {
    let alreadyGuessed = false;
    guessedCards.forEach(guess => {
      if (id === guess && !gameOver) {
        alreadyGuessed = true;
        setGameLost(true);
        setGameOver(true);
        setGuessedCards([]);
      }
    });
    if (!alreadyGuessed && !gameOver) {
      setScore(score => score + 1);
      setGuessedCards([
        ...guessedCards,
        id
      ])
      updateHighScore();
      shuffleCards();
    }
  }

  const updateHighScore = () => {
    if (score >= highScore) {
        setHighScore(score + 1);
    }
  }

    return (
        <>
          <div className="gameboard" style={{ display: loadingScreen ? 'none' : 'grid' }}>
            {cats.map((cat) => (
              <div className="card-container" key={cat.id}>
                <Card id={cat.id} imageURL={cat.url} onClick={() => checkGuess(cat.id)} />
              </div>
            ))}
          </div>
        </>
    )
}