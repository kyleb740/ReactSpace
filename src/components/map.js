import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null
    }

  }

  componentDidMount(){
    fetch('https://api.wheretheiss.at/v1/satellites/25544')
      .then(response => response.json())
      .then(data => {this.setState({ latitude: data.latitude, longitude: data.longitude })})
  }


  render() {
    const style = {
        width: '90%',
        height: '70%',
      }

    const lat = this.state.latitude
    const long = this.state.longitude

    return (
      <Map
        google={this.props.google}
        zoom={1.5}
        style={style}
        initialCenter={{
            lat: 27,
            lng: -2
          }}>

        <Marker
          title={'Alexander Gerst // Kunzelsau, West Germany'}
          name={'Kunzelsau, West Germany'}
          position={{lat: 49.2841, lng: 9.6909}} />
        <Marker
          title={'Serena Auñón-Chancellor // Indianapolis, Indiana'}
          name={'Indianapolis, Indiana'}
          position={{lat: 39.46, lng: -86.9}} />
        <Marker
          title={'Sergey Prokopyev // Sverdlovsk, Russia '}
          name={'Sverdlovsk, Russia'}
          position={{lat: 56.50, lng: 60.35}} />
        <Marker
          title={' Current Location of International Space Station '}
          name={'ISS'}
          position={{lat: lat, lng: long}} />

        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBZ1helu1-2qeD9UnZKVtlxbjOcuYI-d30')
})(MapContainer)
