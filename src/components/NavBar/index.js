// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isGameEnd} = props

  const renderNavbarScores = () => {
    if (isGameEnd) {
      return null
    }
    return (
      <div className="scores-container">
        <p className="score"> Score: {score}</p>
        <p className="score"> Top Score: {topScore} </p>
      </div>
    )
  }

  return (
    <nav>
      <div className="navbar-container">
        <div className="scores-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            className="game-logo"
            alt="emoji logo"
          />
          <h1 className="main-heading"> Emoji Game </h1>
        </div>
        <div>{renderNavbarScores}</div>
      </div>
    </nav>
  )
}

export default NavBar
