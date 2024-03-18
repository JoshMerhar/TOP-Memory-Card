import { useState, useEffect } from 'react'
import API_KEY from './utility/api-key'
import Scoreboard from './components/score'
import Gameboard from './components/gameboard'
import './App.css'

function App() {

  const [cats, setCats] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameboard, setGameboard] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  async function getCats() {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&api-key=${API_KEY}`);
    const catsData = await response.json();
    setCats(catsData);
    setScore(0);
    setGameOver(false);
  }

  useEffect(() => {
    setGameboard([...cats]);
  }, [cats]);

  useEffect(() => {
    checkWin(score);
  }, [score])

  function checkWin(score) {
    if (score === 10) {
      setGameOver(true);
    }
  }

  function shuffleCards() {
    const prevGameboard = [...cats];
    const newGameboard = [];
    for (let i = prevGameboard.length; i > 0; i--) {
      const index = Math.floor(Math.random() * prevGameboard.length);
      const cardId = prevGameboard.splice(index, 1);
      newGameboard.push(cardId[0]);
    }
    setGameboard([...newGameboard]);
  }

  return (
    <>
      <div className="container">
        <Scoreboard score={score} highScore={highScore} />
        <div className="game-controls">
          <div className="rules" style={{ display: gameOver ? 'none' : 'block' }}>Click each card without selecting the same one twice to win</div>
          <div className="win-text" style={{ display: gameOver ? 'block' : 'none' }}>You won!</div>
          <button type="button" className="new-game-button" onClick={getCats}>New Game</button>
        </div>
        <Gameboard cats={gameboard} score={score} setScore={setScore} highScore={highScore} setHighScore={setHighScore} shuffleCards={shuffleCards}/>
      </div>
    </>
  )
}

export default App
