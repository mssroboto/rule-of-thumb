import React from 'react'
import Hero from './Hero/Hero'
import Characters from './Characters/Characters'
import Banner from './Banner/Banner'
import Submit from './Submit/Submit'

const Home = (props) => {
  const trials= props.content.trials;
  const featuredCharacter = trials.characters.filter((character) => {
    return character.featured;
  })[0];

  return (
    <section className="Home">
      <Hero content={props.content.hero} character={featuredCharacter} />
      <Banner content={props.content.banner} />
      <Characters content={trials} />
      <Submit content={props.content.submit} />
    </section>
  );
}

export default Home;