import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Space</h1>
        <h3>Roads!?!... Where we're going we don't need roads!</h3>
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/astro">Astronauts</Link></li>
          <li><Link to="/mars">Mars Rover</Link></li>
        </ul>
      </div>
    );
  }
}

export default Header;
