import React from 'react'
import thumbUp from '../../../../../assets/icon-thumb-up.png'
import thumbDown from '../../../../../assets/icon-thumb-down.png'
import './VoteBar.scss'

const VoteBar = (props) => {
  const positiveVotes = props.votes.positive;
  const negativeVotes = props.votes.negative;
  const totalVotes = positiveVotes + negativeVotes;
  const positivePercentage = (positiveVotes * 100) / totalVotes;
  const negativePercentage = (negativeVotes * 100) / totalVotes;
  const positive = positivePercentage.toFixed(1);
  const negative = negativePercentage.toFixed(1);

  return (
    <div className="VoteBar">
      <div className="VoteBar__votes VoteBar__votes--up" style={{width: `${positive}%`}}>
      </div>
      <div className="VoteBar__votes VoteBar__votes--down" style={{width: `${negative}%`}}>
      </div>
      <div className="VoteBar__percentage-counter">
        <div className="VoteBar__counter">
          <img className="VoteBar__count VoteBar__count--thumb" src={thumbUp} alt="Vote Down" />
          <p className="VoteBar__count VoteBar__count--number">{positive}%</p>
        </div>
        <div className="VoteBar__counter VoteBar__counter--right">
          <p className="VoteBar__count VoteBar__count--number">{negative}%</p>
          <img className="VoteBar__count VoteBar__count--thumb" src={thumbDown} alt="Vote Down" />
        </div>
      </div>
    </div>
  )
}

export default VoteBar;