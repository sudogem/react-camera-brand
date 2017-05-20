// Libraries
import React, { Component } from 'react'
// Components
import TopNav from './nav'

const NavContainer = (props) => <div>
    <TopNav />
    {props.children}
  </div>

// /*class NavContainer extends Component {
//   render () {
//     return (
//       <div>
//         <TopNav />
//         <Body />
//       </div>
//     )
//   }
// }*/
export default NavContainer
