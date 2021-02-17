import React from 'react'
import Character from './Character/Character'
import './Characters.scss'

const Characters = (props) => {
  const content = props.content;

  const characters = () => {
    return content && content.characters.map((character, index) => {
      return (
        <Character
          key={index}
          id={index}
          cta={content.cta}
          ctaVoted={content.cta_voted}
          subtitle={content.subtitle}/>
      )
    })
  }

  return content ? (
    <section className="Characters grid">
      <h2 className="Characters__title">{content.title}</h2>
      {characters()}
    </section>
  ) : <div></div>;
}

export default Characters;