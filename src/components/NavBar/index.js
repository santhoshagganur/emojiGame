// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore} = props

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

        <div className="scores-container">
          <p className="score"> Score: {score}</p>
          <p className="score"> Top Score: {topScore} </p>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
