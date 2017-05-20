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
    title: 'Fuji XT2',
    subtitle: 'A stunning camera perfect for enthusiast photographers ',
    desc: "Fuji's update to the X-T1 may look similar at first glance, but there have been some big improvements and perhaps the biggest of all is the autofocus system. It's a huge leap forward compared with the system found in the X-T1, with AF tracking of moving subjects now much more precise and swift, while the level of sophistication and customisation is impressive too. Add in 8 frames per second burst shooting, a clever double-hinged rear display, bright EVF, Fuji's excellent 24.3MP X Trans III CMOS sensor and plenty of body mounted controls that's all wrapped-up in a tactile body, and you're left with one of the best cameras available today.",
    price: '$1515.59'
  },
  {
    id: 2,
    title: 'Olympus OM-D E-M10 II',
    subtitle: 'The brilliant E-M10 II ticks boxes you probably didn\'t even know about',
    desc: "We loved the original E-M10 for its size, versatility and value for money, but the E-M10 II adds features that take it to another level. The old camera's 3-axis image stabilization system has been uprated to the 5-axis system in Olympus's more advanced OM-D cameras, the viewfinder resolution has been practically doubled and the continuous shooting speed, already impressive at 8fps, creeps up to 8.5fps. Some will criticise the smaller Micro Four Thirds sensor format (roughly half the area of APS-C) but the effect on image quality is minor and it means that the lenses are as compact and lightweight as the camera itself. It's small, but it's no toy – the E-M10 II is a properly powerful camera.",
    price: '$599'
  },
  {
    id: 3,
    title: 'Fuji XT20',
    subtitle: 'All the good bits of the X-T2 in a more affordable body',
    desc: "Like the look of the X-T2 at the top of our list, but don't quite want to shell out that much for it? Fuji has the answer in the shape of the X-T20, which manages to distill many of the key features of the X-T2 including the excellent 24.3MP sensor and advanced AF system, but into a slightly more compact and affordable camera. The X-T20 feels very similar to its bigger brother in terms of build quality, while the tactile controls and polished handling make it a very satisfying camera to shoot with. The X-T20 will certainly hit the sweet spot for many photographers.",
    price: '$849.00'
  },
  {
    id: 4,
    title: 'Sony Alpha A7R II',
    subtitle: "Sony's highest resolution full-framer is going down a storm",
    desc: "Despite being small enough to fit in unnoticed amongst other CSCs, the Alpha 7 series of cameras have a full-frame sensor. That means the sensor is the same size as a piece of 35mm film, which is good news for image quality and depth of field control. The A7R II has proved especially popular because it has a pixel count of 42.2 million, so it generates huge images that have bags of detail, and noise is controlled well. What's more, it can also shoot high quality 4K footage and there are lots of professional-level video features available. In addition, there's an excellent stabilisation system and Wi-Fi/NFC technology built-in.",
    price: '$2509'
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
