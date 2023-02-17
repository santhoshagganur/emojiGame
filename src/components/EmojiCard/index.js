// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emoji, updateScore} = props
  const {id, emojiName, emojiUrl} = emoji

  const getScores = () => {
    updateScore(id)
  }

  return (
    <li className="emoji-card">
      <button type="button" onClick={getScores} className="button">
        <img src={emojiUrl} alt={emojiName} className="emoji-logo" />
      </button>
    </li>
  )
}

export default EmojiCard
