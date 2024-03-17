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

  async function getCats() {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&api-key=${API_KEY}`);
    const catsData = await response.json();
    setCats(catsData);
    console.log(catsData);
  }

  useEffect(() => {
    setGameboard([...cats]);
  }, [cats]);

  function shuffleCards() {

  }

  return (
    <>
      <div className="container">
        <Scoreboard score={score} highScore={highScore} />
        <button type="button" onClick={getCats}>Get cats</button>
        <Gameboard cats={gameboard} score={score} setScore={setScore} highScore={highScore} setHighScore={setHighScore} />
      </div>
    </>
  )
}

export default App
