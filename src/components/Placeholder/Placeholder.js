import React from 'react'
import './Placeholder.scss'

const Placeholder = (props) => (
  <section className="Placeholder">
    <h1>
      {props.title}
    </h1>
  </section>
)

export default Placeholder;