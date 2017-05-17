// Libraries
import React from 'react'

const CameraListings = function ({ data }) {
  const cameraListing = data.map(function (item, idx) {
    return (
      <div key={idx}>
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
      </div>
    )
  })
  return (
    <div>{cameraListing}</div>
  )
}

export default CameraListings
