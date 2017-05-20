// Libraries
import React from 'react'
// Components
import Nav from './nav'

const NavContainer = (props) => <div>
    <Nav />
    {props.children}
  </div>

export default NavContainer
