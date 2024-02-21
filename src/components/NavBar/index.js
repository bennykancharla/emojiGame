// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isGameInProgress} = props
  return (
    <div className="nav-container">
      <div className="each-nav-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h2 className="nav-heading">Emoji Game</h2>
      </div>
      {isGameInProgress && (
        <div className="each-nav-container">
          <p className="nav-heading scores">Score: {score}</p>
          <p className="nav-heading scores">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
