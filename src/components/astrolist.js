import React from 'react';

// App Components/Images
import List from './list.js';


const AstroList = props => {

  const results = props.data;                                 //Map over Astronaut API fetch call return name and craft
  let lists = results.map(person =>
    <List key={person.name} name={person.name} craft={person.craft}/>
  );

    return (
        <ul>
          {lists}
        </ul>
    );
  }


export default AstroList;
