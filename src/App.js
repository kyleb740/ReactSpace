import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App Components/Images

import Space from './images/space.jpg';
import Home from './components/home.js';
import Astro from './components/astronauts.js';
import Mars from './components/mars.js';
import NotFound from './components/notfound.js';

const backStyle = {
  backgroundImage: `url(${Space})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'noRepeat',
}

class App extends Component {




  render() {
    return (
        <BrowserRouter>
          <div className="back" style={ backStyle }>
          <div className="content" >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/astro" component={Astro} />
              <Route path="/mars" component={Mars} />
              <Route component={NotFound} />
            </Switch>
          </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
