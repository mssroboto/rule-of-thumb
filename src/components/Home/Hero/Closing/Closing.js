import React from 'react';
import './Closing.scss';

const Closing = (props) => {
  const content = props.content;

  return (
    <div className="Closing">
      <div className="Closing__wrapper grid">
        <h4 className="Closing__subtitle">{content.subtitle}</h4>
        <p className="Closing__days">{content.remaining_days}</p>
      </div>
    </div>
  )
}

export default Closing;