import React, { Component} from 'react';
import {render} from 'react-dom';

class Home extends Component {
  render(){
    return (<h1>Home</h1>)
  }
}

render(<Home />, document.getElementById('container'));