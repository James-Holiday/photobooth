import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavCom extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Buttons">
        <NavLink exact to="/">
          Home
        </NavLink>

        <NavLink to="/booth">Our Booth</NavLink>
        <NavLink to="/reservation">Reservations</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    );
  }
}
