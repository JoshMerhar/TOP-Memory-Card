import { useState, useEffect } from 'react'
import API_KEY from './utility/api-key'
import Scoreboard from './components/score'
import Gameboard from './components/gameboard'
import './App.css'

function App() {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameboard, setGameboard] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(false);

  async function getCats() {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&api-key=${API_KEY}`);
    const catsData = await response.json();
    showLoadingScreen();
    setGameboard([...catsData]);
    setScore(0);
    setGameOver(false);
    setGameWon(false);
    setGameLost(false);
  }

  useEffect(() => {
    checkWin(score);
  })

  function checkWin(score) {
    if (score === 10) {
      setGameWon(true);
      setGameOver(true);
    } else if (gameLost) {
      setGameOver(true);
    }
  }

  function shuffleCards() {
    const prevGameboard = [...gameboard];
    const newGameboard = [];
    for (let i = prevGameboard.length; i > 0; i--) {
      const index = Math.floor(Math.random() * prevGameboard.length);
      const cardId = prevGameboard.splice(index, 1);
      newGameboard.push(cardId[0]);
    }
    setGameboard([...newGameboard]);
  }

  function showLoadingScreen() {
    setLoadingScreen(true);
    setTimeout(() => {
      setLoadingScreen(false);
    }, 2000);
  }

  return (
    <>
      <div className="container">
        <Scoreboard score={score} highScore={highScore} />
        <div className="game-controls">
          <div className="new-game-text" style={{ display: (!gameOver && gameboard.length === 0) ? 'block' : 'none' }}>Click &quot;New Game&quot; to begin</div>
          <div className="rules" style={{ display: (!gameOver && gameboard.length > 0) ? 'block' : 'none' }}>Click each card without selecting the same one twice to win</div>
          <div className="win-text" style={{ display: gameWon ? 'block' : 'none' }}>You won!</div>
          <div className="lose-text" style={{ display: gameLost ? 'block' : 'none' }}>You lost... Click &quot;New Game&quot; to try again</div>
          <button type="button" className="new-game-button" onClick={getCats}>New Game</button>
        </div>
        <div className="loading-screen" style={{ opacity: loadingScreen ? 1 : 0 }}>LOADING . . .</div>
        <Gameboard 
          cats={gameboard} 
          score={score} 
          setScore={setScore} 
          highScore={highScore} 
          setHighScore={setHighScore} 
          shuffleCards={shuffleCards} 
          gameOver={gameOver}
          setGameOver={setGameOver}
          setGameLost={setGameLost}
          loadingScreen={loadingScreen}
        />
      </div>
    </>
  )
}

export default App
