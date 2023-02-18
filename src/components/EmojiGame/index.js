/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {clickedEmojis: [], topScore: 0, isGameEnd: false}

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  updateScore = id => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isPresent = clickedEmojis.includes(id)
    if (isPresent) {
      this.finishGameUpdateScores(clickedEmojis.length)
    } else if (clickedEmojis.length === emojisList.length - 1) {
      this.finishGameUpdateScores(clickedEmojis.length)
    } else {
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
    }
  }

  finishGameUpdateScores = newScore => {
    const {topScore} = this.state
    if (newScore > topScore) {
      this.setState({topScore: newScore})
    }
    this.endTheGame()
  }

  endTheGame = () => {
    this.setState({isGameEnd: true})
  }

  getEmojisGame = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()
    return (
      <div className="emoji-container">
        <ul className="emoji-game-container">
          {shuffledEmojisList.map(eachEmoji => (
            <EmojiCard
              emoji={eachEmoji}
              key={eachEmoji.id}
              updateScore={this.updateScore}
            />
          ))}
        </ul>
      </div>
    )
  }

  playAgain = () => {
    const {topScore, clickedEmojis} = this.state
    if (topScore < clickedEmojis.length) {
      this.setState({topScore: clickedEmojis.length})
    }
    this.setState({clickedEmojis: []})
    this.setState({isGameEnd: false})
  }

  renderWinOrLose = () => {
    const {clickedEmojis} = this.state
    const {emojisList} = this.props
    const isWin = clickedEmojis.length === emojisList.length

    return (
      <WinOrLoseCard
        score={clickedEmojis.length}
        isWin={isWin}
        playAgain={this.playAgain}
      />
    )
  }

  render() {
    const {isGameEnd, clickedEmojis, topScore} = this.state

    return (
      <div className="bg-container">
        <NavBar score={clickedEmojis.length} topScore={topScore} />
        <div>{isGameEnd ? this.renderWinOrLose() : this.getEmojisGame()}</div>
      </div>
    )
  }
}

export default EmojiGame
