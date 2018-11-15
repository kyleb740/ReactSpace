import React, { Component } from 'react';

// App Components/Images
import Header from './header.js';
import Error from './../images/error.png';

const Nope = {
  color: 'black',
  textAlign: 'center'
}


class NotFound extends Component {
  render() {
    return (
      <div>
        < Header />
        <h2 style= { Nope }>Page Not Found</h2>
        <img src={Error} alt="error"></img>
      </div>
    );
  }
}

export default NotFound;
