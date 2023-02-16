import React from "react";
import "../App.css";
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <img src={logo} alt="logo" className="logo" />
        <h2>ReactFacts</h2>
      </div>
      <div>
        <h3>React Course- Project 1</h3>
      </div>
    </nav>
  );
};

export default Navbar;
