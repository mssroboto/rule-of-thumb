import React from 'react';
import Character from './Character/Character';
import './Characters.scss';

const Characters = (props) => {
  const content = props.content;
  const pastCharacters = props.content.characters.filter((character) => {
    return !character.featured;
  });

  const characters = () => {
    return pastCharacters.map((character, index) => {
      return (
        <Character
          content={character}
          key={index}
          id={index}
          cta={content.cta}
          ctaVoted={content.cta_voted}
          subtitle={content.subtitle}/>
      )
    })
  }

  return (
    <section className="Characters grid">
      <h2 className="Characters__title">{content.title}</h2>
      {characters()}
    </section>
  );
}

export default Characters;