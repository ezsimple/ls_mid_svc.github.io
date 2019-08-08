import React, { Component } from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';
import './App.css';

import About from './About';
import Home from './Home';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="" componet={NotFound} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
