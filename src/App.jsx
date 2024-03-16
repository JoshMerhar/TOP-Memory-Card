import { useState } from 'react'
import API_KEY from './utility/api-key'
import Card from './components/card'
import Scoreboard from './components/score'
import './App.css'

function App() {

  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);

  async function getCats() {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&api-key=${API_KEY}`);
    const cats = await response.json();
    console.log(cats);
  }

  return (
    <>
      <Scoreboard score={score} setScore={setScore} />
      <button type="button" onClick={getCats}>Get cats</button>
    </>
  )
}

export default App
