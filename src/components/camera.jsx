// Libraries
import React, { Component } from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Button from 'react-bootstrap/lib/Button'

// Components
// import CameraListing from './cameraListings'

class Camera extends Component {

  render () {
    return (
        <Grid>
          <h1>Camera</h1>
          <Row>
            <Col md={4}>
              <h4>Heading</h4>
              <p>Adipisicing ratione incidunt eaque expedita rerum porro inventore. Nihil sit ipsam iure officiis sit eos at quibusdam natus dignissimos natus dolore! Vel doloremque ipsa alias nihil harum laborum necessitatibus rerum?</p>
              <p><Button>View details »</Button></p>
            </Col>
            <Col md={4}>
              <h4>Heading</h4>
              <p>Sit quia nemo quis enim provident porro eaque accusamus tenetur provident aliquid commodi? Velit nesciunt maiores obcaecati totam praesentium sint vitae exercitationem quaerat maxime iusto et! Consequatur aspernatur sit impedit.</p>
              <p><Button>View details »</Button></p>
            </Col>
            <Col md={4}>
              <h4>Heading</h4>
              <p>Dolor aliquid dolores perferendis repellendus cum! Quam maiores blanditiis cupiditate voluptatibus voluptas aliquid nisi placeat tempora. Rem debitis accusamus pariatur officia corrupti. Architecto fuga reiciendis quos rem hic? Suscipit dignissimos.</p>
              <p><Button>View details »</Button></p>
            </Col>
          </Row>
        </Grid>
    )
  }
}

export default Camera
