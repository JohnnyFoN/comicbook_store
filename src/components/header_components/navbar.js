import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import basket from "../../resources/50basket.png";
import logo3 from "../../resources/60logo3.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="navbar">
        <NavLink className="navbarElement logo" to="/">
          <img src={logo3}></img>
        </NavLink>
        <NavLink className="navbarElement" to="/">
          Home
        </NavLink>
        <NavLink className="navbarElement" to="/marvel_comics">
          Marvel
        </NavLink>
        <NavLink className="navbarElement" to="/contact">
          Contact
        </NavLink>
        <NavLink className="navbarElement" id="basket" to="/basket">
          <div>
            <img src={basket}></img>
            <span className="bucketItemsNumber">9</span>
          </div>
        </NavLink>
      </div>
    );
  }
}

export default Navbar;
