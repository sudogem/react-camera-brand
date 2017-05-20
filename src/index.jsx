// Libraries
import React, { Component } from 'react'
import { render } from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'  // for react-router 3
// import { BrowserRouter as Router, Route, Link, browserHistory } from 'react-router-dom' // for react-router 4

// Components
import Home from './components/home'
import About from './components/about'
import Camera from './components/camera'
import NotFound from './components/notFound'
import NavContainer from './components/navcontainer'

const data = [
  {
    id: 1,
    name: 'Fuji XT2',
    desc: "Fuji's update to the X-T1 may look similar at first glance, but there have been some big improvements and perhaps the biggest of all is the autofocus system. It's a huge leap forward compared with the system found in the X-T1, with AF tracking of moving subjects now much more precise and swift, while the level of sophistication and customisation is impressive too. Add in 8 frames per second burst shooting, a clever double-hinged rear display, bright EVF, Fuji's excellent 24.3MP X Trans III CMOS sensor and plenty of body mounted controls that's all wrapped-up in a tactile body, and you're left with one of the best cameras available today.",
    price: '$16,811'
  },
  {
    id: 2,
    name: 'Olympus OM-D E-M10 II',
    desc: "We loved the original E-M10 for its size, versatility and value for money, but the E-M10 II adds features that take it to another level. The old camera's 3-axis image stabilization system has been uprated to the 5-axis system in Olympus's more advanced OM-D cameras, the viewfinder resolution has been practically doubled and the continuous shooting speed, already impressive at 8fps, creeps up to 8.5fps. Some will criticise the smaller Micro Four Thirds sensor format (roughly half the area of APS-C) but the effect on image quality is minor and it means that the lenses are as compact and lightweight as the camera itself. It's small, but it's no toy – the E-M10 II is a properly powerful camera.",
    price: '$138,157'
  }
]

class Main extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <div>
          <Route path="/" component={NavContainer}>
            <IndexRoute component={Home} data={data} />
            <Route path="/camera" component={Camera} data={data} />
            <Route path="/about" component={About} data={data} />            
            <Route path="*" component={NotFound} />
          </Route>
        </div>
      </Router>
    )
  }
}

render(<Main />, document.getElementById('container'))
