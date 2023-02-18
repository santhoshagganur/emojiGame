// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, isWin, playAgain} = props

  const playOneMore = () => {
    console.log('clicked')
    playAgain()
  }

  const imageUrl = isWin
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const status = isWin ? 'You Won' : 'You Lose'
  const isItBest = isWin ? 'Best Score' : 'Score'

  return (
    <div className="result">
      <div className="result-container">
        <div>
          <h1 className="heading"> {status} </h1>
          <p className="description"> {isItBest} </p>
          <p className="score-result"> {score}/12 </p>
          <button className="play-again" type="button" onClick={playOneMore}>
            Play Again
          </button>
        </div>
        <div>
          <img src={imageUrl} alt="win or lose" />
        </div>
      </div>
    </div>
  )
}

export default WinOrLoseCard
