export default function Controller({ gameOver, gameWon, gameLost, gameboard, handleClick }) {
    
    return (
        <>
          <div className="game-controls">
            <div className="new-game-text" style={{ display: (!gameOver && gameboard.length === 0) ? 'block' : 'none' }}>Click &quot;New Game&quot; to begin</div>
            <div className="rules" style={{ display: (!gameOver && gameboard.length > 0) ? 'block' : 'none' }}>Click each card without selecting the same one twice to win</div>
            <div className="win-text" style={{ display: gameWon ? 'block' : 'none' }}>You won!</div>
            <div className="lose-text" style={{ display: gameLost ? 'block' : 'none' }}>You lost... Click &quot;New Game&quot; to play again</div>
            <button type="button" className="new-game-button" onClick={handleClick}>New Game</button>
          </div>
        </>
    )
}