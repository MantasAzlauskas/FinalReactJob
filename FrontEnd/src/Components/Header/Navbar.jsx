import React from "react";
import { Link } from "react-router-dom";
import requestlogo from "../../../src/assests/Navbar/repair-mechanism-1.png";
import "../Header/Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="nav-links-container">
        <Link to="/engines" className="nav-links">
          Varikliai
        </Link>
        <Link to="/spareparts" className="nav-links">
          Dalys
        </Link>
        <Link to="/repair" className="nav-links">
          Remontas
        </Link>
        <Link to="/contacts" className="nav-links">
          Kontaktai
        </Link>
        <Link to="/contactus" className="nav-links">
          Susisiekite
        </Link>
      </nav>
      <Link to="/requests">
        <img className="request-logo" src={requestlogo} alt="requestlogo" />
      </Link>
    </div>
  );
};

export default Navbar;
