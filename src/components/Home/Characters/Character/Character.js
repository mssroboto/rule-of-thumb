import React from 'react';
import Vote from './Vote/Vote'
import VoteBar from './VoteBar/VoteBar'
import VoteButton from './VoteButton/VoteButton'
import './Character.scss';

const Character = (props) => {
  const content = props.content;
  const id = props.id;
  const images = require.context('../../../../assets/', true);
  const source = images(`./${content.image}`);

  return (
    <section className="Character" style={{ backgroundImage: `url(${source.default})` }}>
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
  );
}

export default Character