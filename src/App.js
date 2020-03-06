import React, { Component } from "react";

import Welcome from './templates/welcome';
import Cook from './templates/cook';
import Waitress from "./templates/waitress";

import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route path="/Waitress">
              <Waitress />
            </Route>
            <Route path="/Cook">
              <Cook />
            </Route>
          </Switch>
      </Router>
    );
  }
}

export default App;

