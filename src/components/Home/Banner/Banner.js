import React, {useState} from 'react'
import IconClose from '../../../assets/icon-close.png'
import './Banner.scss'

const Banner = (props) => {
  const content = props.content;
  const [close, setClose] = useState(false);

  return (
    <section className={`Banner ${close ? 'Banner--close' : ''}`} >
      <div className="Banner__wrapper">
        <div className="Banner__content">
          <p className="Banner__eyebrow">{content.eyebrow}</p>
          <h3 className="Banner__title">{content.title}</h3>
        </div>
        <p className="Banner__subtitle">{content.subtitle}</p>
        <button className="Banner__close" onClick={()=> setClose(true)}>
          <img src={IconClose} alt="Close"/>
        </button>
      </div>
    </section>
  );
}

export default Banner