import { useState } from 'react';

export default function Scoreboard({ score, highScore }) {

    return (
      <>
        <div className="scoreboard">
          <div className="current-score">Score: {score}</div>
          <div className="high-score">High Score: {highScore}</div>
        </div>
      </>
    )
}