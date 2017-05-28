// Libraries
import React, { Component } from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Button from 'react-bootstrap/lib/Button'
import Media from 'react-bootstrap/lib/Media'

class Camera extends Component {
  render () {
    let cameraListing = this.props.route.data.map(function (item, idx) {
      return (
        <div>
          <Media.Left align="top">
            <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>{item.title}</Media.Heading>
            <p>{item.desc}</p>
          </Media.Body>
        </div>
      )
    })
    return (
        <Grid>
          <h1>Camera</h1>
          <Row>
            <Col md={6}>
              {cameraListing}
            </Col>
            <Col md={6}>
              <h4>Manage Camera</h4>
              <form action="">
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input type="text" className="form-control" id="title" placeholder="Title" />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea type="text" className="form-control" id="description" placeholder="Description" />
                </div>
              </form>

            </Col>
          </Row>
        </Grid>
    )
  }
}

export default Camera
