import React, { Component } from 'react';
import './App.css';
import {                                //React Router added via NPM
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App Components/Images
import Home from './components/home.js';
import Astro from './components/astronauts.js';
import Mars from './components/mars.js';
import NotFound from './components/notfound.js';



class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="content" >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/astro" component={Astro} />
              <Route path="/mars" component={Mars} />
              <Route component={NotFound} />
            </Switch>
          </div>

        </BrowserRouter>
    );
  }
}

export default App;
