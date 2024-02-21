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
  state = {emojiClickList: [], isGameInProgress: true, topScore: 0}

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  getFinishGame = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore
    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  onClickEmojis = id => {
    const {emojisList} = this.props
    const {emojiClickList} = this.state
    const includesId = emojiClickList.includes(id)

    if (includesId) {
      this.getFinishGame(emojiClickList.length)
    } else {
      if (emojisList.length - 1 === emojiClickList.length) {
        this.getFinishGame(emojisList.length)
      }
      this.setState(prev => ({emojiClickList: [...prev.emojiClickList, id]}))
    }
  }

  getEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()
    return (
      <ul className="emojis-container">
        {shuffledEmojisList.map(each => (
          <EmojiCard
            key={each.id}
            onClickEmojis={this.onClickEmojis}
            cardDetails={each}
          />
        ))}
      </ul>
    )
  }

  onPlayAgain = () => {
    this.setState({emojiClickList: [], isGameInProgress: true})
  }

  getWinOrLose = () => {
    const {emojiClickList} = this.state
    const {emojisList} = this.props
    const isWin = emojiClickList.length === emojisList.length
    return (
      <WinOrLoseCard
        topScore={emojiClickList.length}
        onPlayAgain={this.onPlayAgain}
        isWin={isWin}
      />
    )
  }

  //   setWinPage = () => {
  //     this.setState({
  //       isGameInProgress: false,
  //     })
  //   }

  render() {
    const {emojiClickList, isGameInProgress, topScore} = this.state

    // console.log(shuffledEmojisList)
    // if (emojiClickList.length === 12) {
    //   this.setWinPage()
    // }

    return (
      <>
        <NavBar
          score={emojiClickList.length}
          isGameInProgress={isGameInProgress}
          topScore={topScore}
        />
        <div className="game-container">
          {isGameInProgress ? this.getEmojisList() : this.getWinOrLose()}
        </div>
      </>
    )
  }
}

export default EmojiGame
