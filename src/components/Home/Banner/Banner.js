import React from 'react';
import './Banner.scss';

const Banner = (props) => {
  const content = props.content;

  return (
    <section className="Banner">
      <div className="Banner__wrapper grid">
        <div className="Banner__content">
          <p className="Banner__eyebrow">{content.eyebrow}</p>
          <h3 className="Banner__title">{content.title}</h3>
        </div>
        <p className="Banner__subtitle">{content.subtitle}</p>
      </div>
    </section>
  );
}

export default Banner