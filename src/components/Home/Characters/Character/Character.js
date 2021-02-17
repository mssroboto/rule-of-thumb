import React, {useState, useEffect} from 'react';
import Firebase from '../../../Common/Firebase/Firebase'
import Vote from './Vote/Vote'
import VoteBar from './VoteBar/VoteBar'
import VoteButton from './VoteButton/VoteButton'
import './Character.scss'

const Character = (props) => {
  const [content, setContent] = useState();
  const id = props.id;
  const images = content && require.context('../../../../assets/', true);
  const source = content && images(`./${content.image}`);
  const featured = content && content.featured;

  useEffect(() => {
    Firebase.database().ref(`sections/trials/characters/${id}`).on('value', (snapshot) => {
      setContent(snapshot.val())
    });
  },[id])

  return content && !featured ? (
    <section className="Character" style={{backgroundImage: `url(${source.default})`}}>
      <div className="Character__content">
        <h3 className="Character__name">{content.name}</h3>
        <div className="Character__subtitle">
          <span className="Character__date">{content.end_date}</span>
          <span className="Character__category"> in {content.category}</span>
        </div>
        <p className="Character__description">{content.description}</p>
        <VoteButton votes={content.votes} />
        <Vote content={content} id={id}/>
      </div>
      <VoteBar votes={content.votes} />
    </section>
  ) : <div className="Character__placeholder"></div>;
}

export default Character