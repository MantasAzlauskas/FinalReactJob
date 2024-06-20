import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../Footer/Styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h2>Kontaktai</h2>
          <p>Tel.: +370 123 45678</p>
          <p>El. paštas: info@example.com</p>
          <p>Adresas: Kaunas, Lietuva</p>
        </div>
        <div className="working-hours">
          <h2>Darbo laikas</h2>
          <p>Pirmadienis - Penktadienis: 8:00 - 17:00</p>
          <p>Šeštadienis - Sekmadienis: Uždaryta</p>
        </div>
        <div className="social-links">
          <h2>Socialiniai tinklai</h2>
          <p>Sekite mus:</p>
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>© {currentYear} ENGINEHOUSE</p>
      </div>
    </footer>
  );
};

export default Footer;
