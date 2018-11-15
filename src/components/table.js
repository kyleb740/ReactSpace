import React from 'react';


const Table = props => (

      <table>
       <tbody>
        <tr><td>Sol (Day on Mars):</td><td>{props.data.sol}</td></tr>
        <tr><td>Minimum Temp: </td><td>{props.data.min_temp}c</td></tr>
        <tr><td>Maximum Temp: </td><td>{props.data.max_temp}c</td></tr>
        <tr><td>Outlook: </td><td>{props.data.atmo_opacity}</td></tr>
        <tr><td>Sunrise: </td><td>{props.data.sunrise}</td></tr>
        <tr><td>Sunset: </td><td>{props.data.sunset}</td></tr>
      </tbody>
      </table>
    )



export default Table;
