import React from 'react'
import './Closing.scss'

const Closing = (props) => {
  const content = props.content;

  return (
    <div className="Closing">
      <div className="Closing__wrapper ">
        <h4 className="Closing__subtitle">{content.subtitle}</h4>
        <p className="Closing__copy">
          <span className="Closing__date">{content.date} </span>
          <span className="Closing__days">{content.days}</span>
        </p>
      </div>
    </div>
  )
}

export default Closing;