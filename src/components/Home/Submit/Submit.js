import React from 'react';
import './Submit.scss';

const Submit = (props) => {
  const content = props.content;

  return (
    <section className="Submit">
      <div className="Submit__wrapper grid">
        <h3 className="Submit__title">{content.title}</h3>
        <a className="Submit__cta" href={content.cta.link}>{content.cta.label}</a>
      </div>
    </section>
  );
}

export default Submit