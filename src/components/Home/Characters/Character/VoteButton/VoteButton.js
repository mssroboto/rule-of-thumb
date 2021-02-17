import React from 'react'
import thumbUp from '../../../../../assets/icon-thumb-up.png'
import thumbDown from '../../../../../assets/icon-thumb-down.png'
import './VoteButton.scss'

const VoteButton = (props) => {
  const {votes} = props;
  const positiveVotes = votes.positive;
  const negativeVotes = votes.negative;
  const isPositive = positiveVotes >= negativeVotes;
  const thumbImg = isPositive ? <img src={thumbUp} alt="Vote up" /> : <img src={thumbDown} alt="Vote Down" />;
  const voteClassName = isPositive ?
    'VoteButton--up' :
    'VoteButton--down';
  return (
    <div className={`VoteButton ${voteClassName}`}>
      {thumbImg}
    </div>
  )
}

export default VoteButton;