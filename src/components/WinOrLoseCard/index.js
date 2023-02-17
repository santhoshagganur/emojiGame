// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, isWin} = props

  const imageUrl = isWin
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const status = isWin ? 'You Won' : 'You Lose'
  const isItBest = isWin ? 'Best Score' : 'Score'

  return (
    <div className="result-container">
      <div>
        <h1> {status} </h1>
        <p> {isItBest} </p>
        <span> {score}/12 </span>
      </div>
      <div>
        <img src={imageUrl} alt="won" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
