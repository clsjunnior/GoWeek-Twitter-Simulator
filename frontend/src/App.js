import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login'
import Timeline from './pages/Timeline'

class App extends Component {
  render() {
    return (
      // caminho
      <BrowserRouter>
        <Switch>
          {/* exact somente na pasta raiz */}
          <Route path="/" exact component={Login}></Route>
          <Route path="/Timeline" component={Timeline}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
