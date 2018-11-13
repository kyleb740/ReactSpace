import React, { Component } from 'react';

import Header from './header.js';

class Mars extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
      photo: []

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
  }

  render() {
    return (
      <div>
        < Header />
        <h3>Mars Rovers</h3>
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
                <img className="marsPhoto" src={p.img_src}></img>
              ))}
            </div>
      </div>
    );
  }
}

export default Mars;
