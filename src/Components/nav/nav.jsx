import React from 'react';
import './nav.css'
import { Input } from 'semantic-ui-react'

const Nav = () => {
  return (
    <nav className="nav">
      <a className="nav__link link" href="#">new</a>
      <a className="nav__link link" href="#">comments</a>
      <Input className="nav__search" action='Search' placeholder='Search...' />
    </nav>
  )
}

export default Nav;