// Libraries
import React, { Component } from 'react'

// Components
import CameraListing from './cameraListings'

class Camera extends Component {

  render () {
    return (
      <div>
        <h1>Camera</h1>
        <CameraListing data={this.props.route.data} />
      </div>
    )
  }
}

export default Camera
