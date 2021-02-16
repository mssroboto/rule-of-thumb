import React, {useState} from 'react';
import Firebase from '../../../../Common/Firebase/Firebase';
import thumbUp from '../../../../../assets/icon-thumb-up.png';
import thumbDown from '../../../../../assets/icon-thumb-down.png';
import './Vote.scss';

const Vote = (props) => {
  const content = props.content;
  const id = props.id + 1; //TODO: Filter to remove the featured character.
  const positiveVotes = content.votes.positive;
  const negativeVotes = content.votes.negative;
  const [voteCount, setVoteCount] = useState({positive: positiveVotes, negative: negativeVotes});

  const postVote = () => {
    Firebase.database().ref(`sections/trials/characters/${id}/votes`).set(voteCount);
  }

  return (
    <div className="Vote">
      <button className="Vote__button Vote__button--up" onClick={() => setVoteCount({...voteCount, positive: voteCount.positive + 1})}>
        <img src={thumbUp} alt="Vote up" />
      </button>
      <button className="Vote__button Vote__button--down" onClick={() => setVoteCount({...voteCount, negative: voteCount.negative + 1})}>
        <img src={thumbDown} alt="Vote down" />
      </button>
      <button className="Vote__now" onClick={() => postVote()}>Vote now</button>
    </div>
  )
}

export default Vote;