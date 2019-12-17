import React, { Component } from "react";

import Pic1 from "../PICS/17861952_418568771837876_2609521855776451008_n.png";

export default class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="HomepagePics">
          <img src={Pic1} />
        </div>
        <div className="footer">
          <h5 className="h5">~Somewhere in Time Photo Booth Inc.~</h5>
        </div>
      </div>
    );
  }
}
