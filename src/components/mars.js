import React, { Component } from 'react';


// App Components/Images
import Header from './header.js';
import Table from './table.js';
import Ground from './../images/mars.jpg';


const marsStyle = {                           //Style for Mars Weather Background
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

  photoSearch(event) {                    // API fetch for Mars Rover Phots from NASA based on user input of Date
    event.preventDefault();
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${this.state.date}&api_key=W0kxxK1AslOYwTjvlulQwZDQPvp8Ns1fsJ7aZpuP`)
      .then(response => response.json())
      .then(data => this.setState({ photo: data.photos}))
      .catch(error => {
        console.log('Error fetching and parsing data', error)
      })
  }

  componentDidMount() {                         // API fetch for Mars Rover latest weather data from NASA
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
                < Table data={this.state.weather}/>
              </div>
          <p>Seven rovers have been sent to Mars starting in 1971.  Enter a date to see if one of these rovers captured pictures of the Mars' surface on that day!</p>
            <form onSubmit={this.photoSearch}>     
                <label >Enter Date
                    <input
                      onChange={this.onDateChange}          //On change of input changes state to user input date
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
