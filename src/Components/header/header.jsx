import React from 'react';
import './header.css';
import Nav from '../nav/nav'

export const Header = (props) => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <a href="./index.html" className="header__logo link">
            <img src="./img/hn-logo.svg" alt="Logo" />
            Hacker News
          </a>
          <Nav luckyQuery={props.luckyQuery} onChangeSelect={props.onChangeSelect} range={props.range} onChangeRange={props.onChangeRange} isLoading={props.isLoading} isValue={props.isValue} onSearch={props.onSearch} value={props.value} />
        </div>
      </div>
    </header>
  )
}

export default Header;