import React, { Component } from 'react';

import Header from './header.js';

class NotFound extends Component {
  render() {
    return (
      <div>
        < Header />
        <i>error_outline</i>
        <h2>Page Not Found</h2>
      </div>
    );
  }
}

export default NotFound;
