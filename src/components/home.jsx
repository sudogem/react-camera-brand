// Libraries
import React, { Component } from 'react'

// Components
import CameraListing from './cameraListings'

class Home extends Component {
  render () {
    // /*let cameraListing = this.props.route.data.map(function (item, idx) {
    //   return (
    //     <div key={idx}>
    //       <h3>{item.name}</h3>
    //       <p>{item.desc}</p>
    //     </div>
    //   )
    // })*/

    return (
      <div>
        <h1>Home</h1>
        <CameraListing data={this.props.route.data} />
      </div>
    )
  }
}

export default Home
