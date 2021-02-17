import React from 'react'
import IconThumbUp from '../../../../assets/icon-thumb-up.png'
import IconThumbDown from '../../../../assets/icon-thumb-down.png'
import './Thumbs.scss'

const Thumbs = () => {
  return (
    <div className="Thumbs">
      <button className="Thumbs__thumb Thumbs__thumb--up">
        <img src={IconThumbUp} alt="" />
      </button>
      <button className="Thumbs__thumb Thumbs__thumb--down">
        <img src={IconThumbDown} alt="" />
      </button>
    </div>
  )
}

export default Thumbs