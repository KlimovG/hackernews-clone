import React from 'react';
import './header.css';
import Nav from '../nav/nav'

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <a href="./index.html" className="header__logo link">
            <img src="./img/hn-logo.svg" alt="Logo" />
            Hacker News
          </a>
          <Nav />
        </div>
      </div>
    </header>
  )
}

export default Header;