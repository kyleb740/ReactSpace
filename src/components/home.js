import React, { Component } from 'react';

// App Components/Images
import Header from './header.js';

class Home extends Component {
  render() {
    return (
      <div>
        < Header />
        <p className="about">This project was completed for my Code Louisville React class. The central theme is using public space APIs to show what I have learned using React.<br></br><br></br> The Astronauts route reaches an API that lists the current humanoids in space and the craft they are on.  There is also a API get of the current orbital location of the International Space Station above Earth.  This react app then uses the latitude and longitude to display that location on a Google Maps API.<br></br><br></br>The Mars Rover Route utilizes 2 NASA APIs.  The first is the last weather data the Curiosity Rover sent back from Mars.  The second is a search feature that user can enter a date and get the photos that the Mars rovers took on that particular date.</p>
      </div>
    );
  }
}

export default Home;
