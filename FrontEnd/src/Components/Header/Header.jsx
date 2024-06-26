import React from "react";
import logo from "../../../src/assests/Header/Logo1.png";
import { Link } from "react-router-dom";
import "../Header/Styles/Header.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo-container">
        <Link to="/">
          <img className="header-logo" src={logo} alt="logo" />
        </Link>
      </div>
      <Link to="/">
        <h1 className="header-title-small">ENGINEHOUSE</h1>
      </Link>
      <Navbar />
    </div>
  );
};

export default Header;
