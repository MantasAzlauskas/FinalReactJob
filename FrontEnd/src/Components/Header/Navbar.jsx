import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../Header/Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="nav-links-container">
        <Link to="/" className="nav-links">
          Pagrindinis
        </Link>
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
        <FontAwesomeIcon
          icon={faUser}
          className="navbar-icon"
          aria-label="login"
        />
      </Link>
    </div>
  );
};

export default Navbar;
