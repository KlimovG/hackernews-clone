import React, { useState } from 'react';
import './nav.css'
import { Form, Loader, Button, Select } from 'semantic-ui-react'

const Nav = (props) => {
  // const [searchValue, setSearchValue] = useState("")
  // const getValue = (e) => {
  //   setSearchValue(prev => prev = e.target.value)
  // }
  // const onSubmitSearch = (searchValue) => {

  // }
  const hitsPerPage = [
    { key: '1', text: '20', value: '20' },
    { key: '2', text: '40', value: '40' },
    { key: '3', text: '60', value: '60' },
    { key: '4', text: '80', value: '80' },
    { key: '5', text: '100', value: '100' }
  ]
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
          <Select className="nav__select" onChange={props.onChangeSelect} placeholder='Number of results' options={hitsPerPage} />
          {props.isLoading ? <Button type="submit" className="nav__btn" ><Loader inline='centered' active size='mini'></Loader></Button> : <Button type="submit" className="nav__btn" >Search</Button>}
          <Form.Input
            label={`Articles per page: ${props.range}`}
            min={1}
            max={30}
            name='range'
            onChange={(e) => props.onChangeRange(e)}
            step={1}
            type='range'
            value={props.range}
          />
        </Form.Group>
      </Form>
    </nav>
  )
}

export default Nav;