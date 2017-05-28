// Libraries
import React, { Component } from 'react'
import Media from 'react-bootstrap/lib/Media'
import Jumbotron from 'react-bootstrap/lib/Jumbotron'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Button from 'react-bootstrap/lib/Button'
import Modal from 'react-bootstrap/lib/Modal'
import PropTypes from 'prop-types'
import Truncate from 'react-truncate'

// Components
import Readmore from './readmore'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      showModal: false,
      cameraDetails: {}
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  mediaAlignmentInstance () {
    return (
      <div>
        <Media>
          <Media.Left align="top">
            <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>Top aligned media</Media.Heading>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

            <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </Media.Body>
        </Media>
        <Media>
          <Media.Left align="middle">
            <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>Middle aligned media</Media.Heading>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

            <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </Media.Body>
        </Media>
        <Media>
          <Media.Left align="bottom">
            <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>Bottom aligned media</Media.Heading>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

            <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </Media.Body>
        </Media>
      </div>
    )
  }

  componentDidMount () {
    return (
      <div>
        <Media>
          <Media.Left align="top">
            <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>Top aligned media</Media.Heading>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

            <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </Media.Body>
        </Media>
        <Media>
          <Media.Left align="middle">
            <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>Middle aligned media</Media.Heading>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

            <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </Media.Body>
        </Media>
        <Media>
          <Media.Left align="bottom">
            <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>Bottom aligned media</Media.Heading>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

            <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </Media.Body>
        </Media>
      </div>
    )
  }

  openModal (item) {
    console.log(item)
    this.setState({ showModal: true, cameraDetails: item})
    // var stateCopy = Object.assign({}, this.state);
    // stateCopy.items = stateCopy.items.slice();
    // stateCopy.items[key] = Object.assign({}, stateCopy.items[key]);
    // stateCopy.items[key].upVotes += 1;
  }

  closeModal () {
    this.setState({ showModal: false })
  }

  render () {
    const self = this
    let cameraListing = this.props.route.data.map(function (item, idx) {
      return (
        /*<div>
          <Media>
            <Media.Left align="top">
              <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
            </Media.Left>
            <Media.Body>
              <Media.Heading>Top aligned media</Media.Heading>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

              <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </Media.Body>
          </Media>
          <Media>
            <Media.Left align="middle">
              <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
            </Media.Left>
            <Media.Body>
              <Media.Heading>Middle aligned media</Media.Heading>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

              <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </Media.Body>
          </Media>
          <Media>
            <Media.Left align="bottom">
              <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
            </Media.Left>
            <Media.Body>
              <Media.Heading>Bottom aligned media</Media.Heading>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

              <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </Media.Body>
          </Media>
        </div>*/
        <Col md={4} key={idx}>
          <h3>{item.title}</h3>
          <h4>{item.subtitle}</h4>
          <Readmore message={item.desc} />
          <p><Button onClick={(e) => self.openModal(item)}>View more details »</Button></p>
        </Col>
      )
    })

    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>Hello, world!</h1>
            <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
          </Grid>
        </Jumbotron>
        <Grid>
          <Row>
            {cameraListing}
          </Row>
        </Grid>

        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.cameraDetails.title} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>{this.state.cameraDetails.title}</h3>
            <h4>{this.state.cameraDetails.subtitle}</h4>
            <p>{this.state.cameraDetails.desc}</p>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

Home.propTypes = {
  route: PropTypes.array
}

export default Home
