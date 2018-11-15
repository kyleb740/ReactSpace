import React, { Component } from 'react';

import Header from './header.js';
import MapContainer from './map.js';
import AstroList from './astrolist.js';

class Astro extends Component {
  constructor() {
    super()
    this.state = {
      astro: []
    }
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {this.setState({ astro: data.people })})
      .catch(error => {
        console.log('Error fetching and parsing data', error)
      })
  }



  render() {
    return (
      <div>
        < Header />

        <div className="astro">
          <p>Here is a list of the astronauts currently in space with the craft they are on and below a map showing their birthplace. Also on the map is the current location of the International Space Station orbiting above Earth.</p>
          < AstroList data={this.state.astro}/>
        </div>

        < MapContainer />
        
      </div>
    );
  }
}

export default Astro;
