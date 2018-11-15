import React from 'react';
import List from './list.js';


const AstroList = props => {

  const results = props.data;
  let lists = results.map(person =>
    <List name={person.name} craft={person.craft}/>
  );

    return (
        <ul>
          {lists}
        </ul>
    );
  }


export default AstroList;
