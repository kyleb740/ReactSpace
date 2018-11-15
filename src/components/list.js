import React from 'react';

const List = props => (               //List in Astronaut Route
        <li className="list">
          {props.name} - {props.craft}
        </li>
  )


export default List;
