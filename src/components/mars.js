import React, { Component } from 'react';

import Header from './header.js';

import Ground from './../images/mars.jpg';

const marsStyle = {
  backgroundImage: `url(${Ground})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'noRepeat',
}

class Mars extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
      photo: [],
      weather: []

    }
    this.onDateChange = this.onDateChange.bind(this);
    this.photoSearch = this.photoSearch.bind(this);

  }


  onDateChange(event) {
    this.setState({date: event.target.value});
  }

  photoSearch(event) {
    event.preventDefault();
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${this.state.date}&api_key=W0kxxK1AslOYwTjvlulQwZDQPvp8Ns1fsJ7aZpuP`)
      .then(response => response.json())
      .then(data => this.setState({ photo: data.photos}))
      .catch(error => {
        console.log('Error fetching and parsing data', error)
      })
  }

  componentDidMount() {
    fetch('https://api.maas2.jiinxt.com')
      .then(response => response.json())
      .then(data => {this.setState({ weather: data })})
      .catch(error => {
        console.log('Error fetching and parsing data', error)
      })
  }

  render() {
    return (
      <div>
        < Header />
        <div className="mars">
          <h3>Mars Rovers</h3>
          <p>Here is the most recent weather on Mars sent by the Curiosity Rover:</p>
              <div className="weather" style={ marsStyle }>
                <table>
                 <tbody>
                  <tr><td>Sol (Day on Mars):</td><td>{this.state.weather.sol}</td></tr>
                  <tr><td>Minimum Temp: </td><td>{this.state.weather.min_temp}c</td></tr>
                  <tr><td>Maximum Temp: </td><td>{this.state.weather.max_temp}c</td></tr>
                  <tr><td>Outlook: </td><td>{this.state.weather.atmo_opacity}</td></tr>
                  <tr><td>Sunrise: </td><td>{this.state.weather.sunrise}</td></tr>
                  <tr><td>Sunset: </td><td>{this.state.weather.sunset}</td></tr>
                </tbody>
                </table>
              </div>
          <p>Seven rovers have been sent to Mars starting in 1971.  Enter a date to see if one of these rovers captured pictures of the Mars' surface on that day!</p>
            <form onSubmit={this.photoSearch}>
                <label >Enter Date
                    <input
                      onChange={this.onDateChange}
                      placeholder="YYYY-MM-DD"
                      className="date"
                      name='date'
                      value={this.state.date}/>
                </label><br></br>
                <input type="submit" value="Submit" />
            </form>
              <div>
                {this.state.photo.map(p => (
                  <img className="marsPhoto" alt="" src={p.img_src}></img>
                ))}
              </div>
        </div>
      </div>
    );
  }
}

export default Mars;
