import React from 'react';
import Box from './Box/Box';
import Thumbs from './Thumbs/Thumbs';
import Closing from './Closing/Closing';
import './Hero.scss';

const Hero = (props) => {
  const content = props.content;
  const character = props.character;
  const images = require.context('../../../assets/', true);
  const source = images(`./${character.image_featured}`);

  return (
    <section className="Hero" style={{ backgroundImage: `url(${source.default})` }}>
      <div className="Hero__wrapper grid">
        <Box content={content} character={character}/>
        <Thumbs />
      </div>
      <Closing content={content} />
    </section>
  );
}

export default Hero;