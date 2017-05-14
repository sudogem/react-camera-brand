// Libraries
import React, {Component} from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'  // for react-router 3
// import { BrowserRouter as Router, Route, Link, browserHistory } from 'react-router-dom' // for react-router 4

// Components
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Camera from './components/camera.jsx'

class Main extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <div>
          <IndexRoute component={Home} />
          <Route path="/" component={Home}/>
          <Route path="/camera" component={Camera}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    )
  }
}

render(<Main />, document.getElementById('container'))
