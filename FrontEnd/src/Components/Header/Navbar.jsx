import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // Pridėjau faBars ir faTimes ikonas
import "../Header/Styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon
          icon={isOpen ? faTimes : faBars}
          className="navbar-icon"
        />
      </div>

      <nav className={`nav-links-container ${isOpen ? "active" : ""}`}>
        <Link to="/" className="nav-links" onClick={toggleMenu}>
          Pagrindinis
        </Link>
        <Link to="/engines" className="nav-links" onClick={toggleMenu}>
          Varikliai
        </Link>
        <Link to="/spareparts" className="nav-links" onClick={toggleMenu}>
          Dalys
        </Link>
        <Link to="/repair" className="nav-links" onClick={toggleMenu}>
          Remontas
        </Link>
        <Link to="/contacts" className="nav-links" onClick={toggleMenu}>
          Kontaktai
        </Link>
        <Link to="/contactus" className="nav-links" onClick={toggleMenu}>
          Susisiekite
        </Link>
      </nav>

      <Link to="/login">
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
