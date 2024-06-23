import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
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
          <p>Adresas: Palanga, Lietuva</p>
        </div>
        <div className="working-hours">
          <h2>Darbo laikas</h2>
          <p>Pirmadienis - Penktadienis: 8:00 - 17:00</p>
          <p>Pietų petrauka: 12:00 - 13:00</p>
          <p>Šeštadienis - Sekmadienis: Nedirbame</p>
        </div>
        <div className="social-links">
          <h2>Socialiniai tinklai</h2>
          <p>Sekite mus:</p>
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
          <ul>
            {" "}
            <li>
              <a
                href="https://www.google.com/maps/place/Palanga+Pier/@55.9201848,21.0483201,18.75z/data=!4m14!1m7!3m6!1s0x46e52544dfb50115:0xbf57eab0d4b3e633!2sVARIKLI%C5%B2+SAND%C4%96LIS+-+varikliai,+remontas!8m2!3d55.9070927!4d21.2700174!16s%2Fg%2F11tcj9hwjp!3m5!1s0x46e529f99acdf859:0xa552041455e1f5ea!8m2!3d55.9201198!4d21.0490399!16s%2Fg%2F11smvbf6yr?entry=ttu"
                className="location"
              >
                <FontAwesomeIcon icon={faLocationDot} /> Mus rasite čia
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
