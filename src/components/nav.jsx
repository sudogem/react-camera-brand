// Libraries
import React from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'

// Components
import { Link } from 'react-router'

/*const TopNav = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/camera">Camera</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
     <hr/>
  </div>
)*/

const TopNav = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Camera Guide</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#/"></NavItem>
      <NavItem eventKey={2} href="#/camera">Camera</NavItem>
      <NavItem eventKey={3} href="#/about">About</NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
)

export default TopNav
