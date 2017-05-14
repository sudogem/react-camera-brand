// Libraries
import React from 'react'
import {Link} from 'react-router'

const Nav = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/camera">Camera</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
     <hr/>
  </div>
)

export default Nav
