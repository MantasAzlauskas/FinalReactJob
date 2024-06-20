import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faEnvelope,
  faComments,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../../src/assests/Header/Logo.png";
import "../Main/Styles/Contactusform.css";

const Contactusform = () => {
  return (
    <div className="hero">
      <form className="form-container">
        <h1>Susisiekime</h1>
        <div className="row">
          <div className="input-group">
            <input type="text" id="name" required />
            <label htmlFor="name">
              <FontAwesomeIcon icon={faUser} className="contactus-icon" />{" "}
              Vardas Pavardė
            </label>
          </div>
          <div className="input-group">
            <input type="number" id="number" required />
            <label htmlFor="number">
              <FontAwesomeIcon icon={faPhone} className="contactus-icon" /> Tel.
              Nr.
            </label>
          </div>
        </div>

        <div className="input-group">
          <input type="email" id="email" required />
          <label htmlFor="email">
            <FontAwesomeIcon icon={faEnvelope} className="contactus-icon" /> El.
            paštas
          </label>
        </div>
        <div className="input-group">
          <textarea id="message" rows="2" required></textarea>
          <label htmlFor="message">
            <FontAwesomeIcon icon={faComments} className="contactus-icon" />{" "}
            Jūsų užklausa
          </label>
        </div>
        <button type="submit">
          <FontAwesomeIcon icon={faPaperPlane} className="contactus-icon" />{" "}
          Siųsti
        </button>
      </form>
      <div className="request-form">
        <h1>Užklausos forma</h1>
        <p className="contactus-text">
          Turite klausimų, pasiūlymų ar komentarų apie mūsų teikiamas paslaugas
          ir produktus? <br /> <br /> Užpildykite užklausos formą ir su Jumis
          susisieks mūsų darbuotojai.
          <br /> <br /> Atsakysime per 1-2val. darbo dienomis
        </p>
      </div>

      <div className="contactus-logo">
        <img src={logo} alt="logo" width="300px" />
      </div>
    </div>
  );
};

export default Contactusform;
