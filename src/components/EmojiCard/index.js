// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {cardDetails, onClickEmojis} = props
  const {id, emojiName, emojiUrl} = cardDetails
  const onClickEmoji = () => {
    onClickEmojis(id)
  }
  return (
    <li>
      <button type="button" className="emoji-btn" onClick={onClickEmoji}>
        <img className="image" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
