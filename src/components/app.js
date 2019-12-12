import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavCom from "./nav/nav-con";
import Home from "./home";
import Booth from "./booth";

import Pic1 from "../PICS/17861952_418568771837876_2609521855776451008_n.png";
import logo from "../PICS/logo2.png";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <img src={logo} />
        <Router>
          <div className="Buttons">
            <NavCom />
            <Switch>
              <Route exact path="/home" Component={Home} />
              <Route path="/booth" Component={Booth} />
            </Switch>
          </div>
        </Router>
        <div className="HomepagePics">
          <img src={Pic1} />
        </div>
        <div>
          <img src={logo} />
        </div>
      </div>
    );
  }
}
