// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWin, topScore, onPlayAgain} = props

  const onResetBtn = () => {
    onPlayAgain()
  }

  return (
    <div className="win-lose-container">
      <div>
        <h1>You {isWin ? 'Won' : 'Lose'}</h1>
        <p>{isWin ? 'Best Score' : 'Score'}</p>
        <p className="final-score">{topScore}/12</p>
        <button className="play-btn" type="button" onClick={onResetBtn}>
          Play Again
        </button>
      </div>
      <img
        className="win-lose-image"
        src={
          isWin
            ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
        }
        alt="win or lose"
      />
    </div>
  )
}

export default WinOrLoseCard
