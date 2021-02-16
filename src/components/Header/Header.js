import React, {useState} from 'react';
import IconMenu from '../../assets/icon-menu.png';
import IconClose from '../../assets/icon-close.png';
import './Header.scss';

const Header = (props) => {
  const [menuActive, setMenuState] = useState(false);
  const images = require.context('../../assets/', true);
  const NavIcon = (icon) => {
    const source = images(`./icon-${icon}.png`);

    return (
      <img className="Header__icon-image" src={source.default} alt="" />
    )
  }

  const navItems = () => {
    return props.content.nav_items.map((item, index) => {
      return (
        <li className="Header__item" key={index}>
          <a className="Header__link" href={item.link}>
            {item.icon ? NavIcon(item.icon) : ''}
            <span className={`Header__label ${item.icon ? 'Header__label--hidden' : ''}`}>
              {item.label}
            </span>
          </a>
        </li>
      )
    })
  }

  const handleNav = (state) => {
    const body = document.querySelector('body');
    body.classList.toggle('body--nav-open');
    return setMenuState(state)
  }

  return (
    <section className="Header">
      <div className="Header__wrapper grid">
        <button className="Header__menu-button" onClick={() => handleNav(true)}>
          <img className="Header__menu" src={IconMenu} alt="" />
        </button>
        <a className="Header__title" href="/">{props.content.title}</a>
        <nav className={`Header__nav ${menuActive ? 'Header__nav--open': ''}`}>
          <ul className="Header__list">{navItems()}</ul>
          <button className="Header__menu-close" onClick={() => handleNav(false)}>
            <img className="Header__close" src={IconClose} alt="" />
          </button>
        </nav>
      </div>
      <span className={`Header__overlay ${menuActive ? 'Header__overlay--open': ''}`}
        onClick={() => handleNav(false)}>
      </span>
    </section>
  )
}

export default Header;