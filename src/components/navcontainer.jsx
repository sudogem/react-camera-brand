// Libraries
import React from 'react'

// Components
import Nav from './nav.jsx'

const NavContainer = (props) => <div>
    <Nav />
    {props.children}
  </div>

export default NavContainer
