import React, {useState} from 'react'
import Firebase from '../../../../Common/Firebase/Firebase'
import thumbUp from '../../../../../assets/icon-thumb-up.png'
import thumbDown from '../../../../../assets/icon-thumb-down.png'
import './Vote.scss'

const Vote = (props) => {
  const content = props.content;
  const positiveVotes = content.votes.positive;
  const negativeVotes = content.votes.negative;
  const [voteUpSelected, setVoteUpSelected] = useState(false);
  const [voted, setVoted] = useState(false);
  const [voteAgain, setVoteAgain] = useState(false);
  const [hideCta, setHideCta] = useState(true);
  const [voteCount, setVoteCount] = useState({positive: positiveVotes, negative: negativeVotes});

  const postVote = () => {
    Firebase.database().ref(`sections/trials/characters/${props.id}/votes`).set(voteCount);
    setVoteAgain(!voteAgain);
  }

  const handleVote = (isUpvote) => {
    setVoteUpSelected(isUpvote);

    !voted && setVoteCount({
      positive: isUpvote ? voteCount.positive + 1 : voteCount.positive,
      negative: isUpvote ? voteCount.negative : voteCount.negative + 1})

    setVoted(true);
    setHideCta(false);
  }

  const resetVote = () => {
    setVoteAgain(!voteAgain);
    setVoted(false);
    setHideCta(true);
  }

  return (
    <div className="Vote">
      <div className={`Vote__buttons ${voteAgain ? 'Vote__buttons--hidden' : ''}`}>
        <button
          className={`Vote__button Vote__button--up ${voted && voteUpSelected ? 'Vote__button--active' : ''}`}
          onClick={() => handleVote(true)}>
          <img src={thumbUp} alt="Vote up" />
        </button>
        <button
          className={`Vote__button Vote__button--down ${voted && !voteUpSelected ? 'Vote__button--active' : ''}`}
          onClick={() => handleVote(false)}>
          <img src={thumbDown} alt="Vote down" />
        </button>
      </div>
      <button
        className={`Vote__cta ${hideCta ? 'Vote__cta--hidden' : ''}`}
        onClick={() =>{voteAgain ? resetVote() : postVote()}}>
        {voteAgain ? 'Vote again' : 'Vote now'}
      </button>
    </div>
  )
}

export default Vote;