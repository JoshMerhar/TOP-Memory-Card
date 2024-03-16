import { useState } from 'react';

export default function Scoreboard({ score, setScore }) {
    const [highScore, setHighScore] = useState(1);
    
    const updateHighScore = () => {
        let currentHighScore = 0;
        if (score >= currentHighScore) {
            setHighScore(currentHighScore);
        }
    }

    return (
      <>
        <div className="scoreboard">
          <div className="current-score">Score: {score}</div>
          <div className="high-score">High Score: {highScore}</div>
        </div>
      </>
    )
}