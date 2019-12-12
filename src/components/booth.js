import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import slider1 from "../PICS/15219990_344685669226187_5693534225527010647_n.jpg";
import slider2 from "../PICS/22289624_506843233010429_7770978378955726630_o.jpg";
import slider3 from "../PICS/22289730_506843163010436_2555845690583214465_o.jpg";

function App() {
  const slider = (
    <AwesomeSlider>
      <div data-src={slider1} />
      <div data-src={slider2} />
      <div data-src={slider3} />
    </AwesomeSlider>
  );
}
export default function() {
  return;
  <div className="">Our Booth</div>;
  // <div className="slider">{slider}</div>;
}
