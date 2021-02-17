import React from 'react'
import IconWiki from '../../../../assets/icon-wiki.png'
import './Box.scss'

const Box = (props) =>{
  const content = props.content;
  const character = props.character;

  return (
    <div className="Box">
      <h2 className="Box__eyebrow">{content.eyebrow}</h2>
      <h3 className="Box__name">{character.name}</h3>
      <p className="Box__description">{character.description}</p>
      <a className="Box__cta" href={character.wiki_link} target="_blank" rel="noreferrer">
        <img className="Box__icon" src={IconWiki} alt="Wikipedia icon" />
        {content.cta}
      </a>
      <h3 className="Box__title">{content.title}</h3>
    </div>
  );
}

export default Box;