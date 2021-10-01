import React, { useState } from 'react';
import './nav.css'
import { Form, Loader, Button } from 'semantic-ui-react'

const Nav = (props) => {
  // const [searchValue, setSearchValue] = useState("")
  // const getValue = (e) => {
  //   setSearchValue(prev => prev = e.target.value)
  // }
  // const onSubmitSearch = (searchValue) => {

  // }
  return (
    <nav className="nav">
      {/* <a className="nav__link link" href="#">new</a>
      <a className="nav__link link" href="#">comments</a> */}
      <Form className="nav__form" onSubmit={() => props.onSearch()}>
        <Form.Group className="nav__group">
          <Form.Input
            className="nav__search"
            placeholder='Search...'
            name='search'
            onChange={(e) => props.isValue(e)}
            value={props.value}
          />
          {props.isLoading ? <Button type="submit" className="nav__btn" ><Loader inline='centered' active size='mini'></Loader></Button> : <Button type="submit" className="nav__btn" >Search</Button>}
        </Form.Group>
      </Form>
    </nav>
  )
}

export default Nav;