// Libraries
import React, { Component } from 'react'
import {render} from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';  // for react-router 3
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; // for react-router 4

// Components
import About from './components/about'


class Camera extends Component {
  render() {
    return (
      <div>
        <Nav />
        <h1>Camera</h1>
      </div>    
    )
  }
}

class Nav extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/camera">Camera</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <hr/>
      </div>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <h1>Home</h1>     
      </div>
    )
  }
}

class Main extends Component {
  render(){
    return (
      <Router history={hashHistory}>
        <div>
          {/*<ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/camera">Camera</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <hr/>*/}
          <IndexRoute component={Home} />
          <Route exact path="/" component={Home}/>
          <Route path="/camera" component={Camera}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>      
    )
  }
}

render(<Main />, document.getElementById('container'))

/*class App extends Component {
  render() {
    // render(<Home />, document.getElementById('container'));
    return (
      <Router history={hashHistory} >
        <Route path="/" component={Home} />
        <Route path="/camera" component={Camera} />
      </Router>
    );
  }
}*/

/*render(
    <Router history={hashHistory}>
      <div>
        <Route path="/" component={Home}/>
        <Route path="/cars" component={Camera}/>
        <Route path="/about" component={About}/>
      </div>
    </Router>,
    document.getElementById('container')
);*/

/*render((
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/cars" component={Camera}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
), document.getElementById('container'));*/
