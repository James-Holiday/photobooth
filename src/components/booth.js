import React, { Component } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import slider1 from "../PICS/1.5.jpg";
import slider2 from "../PICS/1.1.jpg";
import slider3 from "../PICS/1.0.jpg";
import slider4 from "../PICS/1.2.jpg";
import slider5 from "../PICS/1.3.jpg";
import slider6 from "../PICS/1.4.jpg";

export default class Booth extends Component {
  render() {
    return (
      <div className="boothwraper">
        <h1 className="BTH"></h1>
        <h2 className="aboutbooth">
          Somewhere In Time Photo Booth is a high quality photo booth, perfect
          for any event!
        </h2>
        <h2 className="aboutbooth">
          Unlimited prints, photo book, & props included.
        </h2>
        <div className="sliderpics">
          <AwesomeSlider>
            <div data-src={slider1} />
            <div data-src={slider2} />
            <div data-src={slider3} />
            <div data-src={slider4} />
            <div data-src={slider5} />
            <div data-src={slider6} />
          </AwesomeSlider>
        </div>
      </div>
    );
  }
}
