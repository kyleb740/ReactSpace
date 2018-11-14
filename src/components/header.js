import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Space from './../images/space.jpg';

const backStyle = {
  backgroundImage: `url(${Space})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'noRepeat',
}

class Header extends Component {
  render() {
    return (
      <div className="back" style={ backStyle }>
        <h1 className="title">Space</h1>
        <h4 className="roads">Roads!?!... Where we're going we don't need roads!</h4>
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
