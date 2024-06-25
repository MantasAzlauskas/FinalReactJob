import React from "react";
import Logo from "../assests/Header/Logo1.png";
import "../Pages/Styles/Contacts.css";

const Contacts = () => {
  return (
    <div className="contact-page-container">
      <h1>ENGINEHOUSE - Jūsų partneris kokybei ir patikimumui! </h1>

      <div className="contact-container">
        <div className="main-contactinfo">
          <h2>Kontaktinė informacija</h2>
          <h3>ENGINEHOUSE, UAB</h3>
          <p>
            <strong>Miestas:</strong> <br /> Palanga, Lietuva
          </p>
          <p>
            <strong>Telefonas:</strong> <br /> +370 123 45678
          </p>
          <p>
            <strong>El. paštas:</strong>
            <br /> info@example.com
          </p>
          <p>
            <strong>Darbo valandos:</strong> <br /> Pirmadienis - Penktadienis
            8:00 - 17:00 val. Šeštadienis - Sekmadienis: Nedirbame
          </p>
        </div>
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
};

export default Contacts;
