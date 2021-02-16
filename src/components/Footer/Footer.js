import React from 'react';
import './Footer.scss';

const Footer = (props) => {
  const content = props.content;
  const images = require.context('../../assets/', true);

  const navItems = () => {
    return content.nav_items.map((item, index) => {
      return (
        <li className="Footer__item" key={index}>
          <a className="Footer__link" href={item.link}>
            {item.label}
          </a>
        </li>
      )
    })
  }

  const socialItems = () => {
    return content.social.map((item, index) => {
      const source = images(`./icon-${item.icon}.png`);
      return (
        <li className="Footer__item-icon" key={index}>
          <a className="Footer__icon-link" href={item.link} target="_blank" rel="noreferrer">
            <img className="Footer__icon" src={source.default} alt="" />
          </a>
        </li>
      )
    })
  }

  return (
    <section className="Footer">
      <div className="Footer__wrapper grid">
        <nav className="Footer__nav">
          <ul className="Footer__list">{navItems()}</ul>
        </nav>
        <div className="Footer__social">
          <span className="Footer__follow">{content.title}</span>
          <ul className="Footer__icons">{socialItems()}</ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;