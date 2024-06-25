import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faEnvelope,
  faComments,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../../src/assests/Header/Logo1.png";
import "../Main/Styles/Contactusform.css";

const Contactusform = () => {
  const initialFormData = {
    name: "",
    number: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          number: formData.number,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Įvyko klaida siunčiant užklausą į serverį.");
      }

      setSuccess(true);
      setMessage("Jūsų užklausa išsiųsta sėkmingai!");
      setFormData(initialFormData);

      setTimeout(() => {
        setSuccess(false);
        setMessage("");
      }, 3000);
    } catch (error) {
      setSuccess(false);
      setMessage("Įvyko klaida siunčiant užklausą.");
      console.error("Klaida siunčiant užklausą:", error);
    }
  };

  return (
    <div className="main-hero-container">
      <div className="info-about-parts">
        <h1>Informacija</h1>
        <h3>
          Jei radote Jums tinkamą variklį ar atsarginę dalį, ar turite klausimų
          dėl konkretaus produkto - rašykite mums. Mūsų komanda pasiruošusi
          padėti ir suteikti visą reikalingą informaciją.
        </h3>
        <h3>
          Nepavyko rasti to, ko ieškojote? Susisiekite su mumis ir mes padėsime
          Jums surasti reikiamą variklį ar atsarginę dalį pagal Jūsų poreikius.
        </h3>
        <h3>
          Atkreipkite dėmesį, kad mes neturime prekių vietoje. Esame tik
          užsakymus priimanti įmonė, todėl visas prekes užsakome specialiai
          Jums, kai pateikiate užsakymą.
        </h3>
      </div>
      <div className="hero">
        <form className="form-container" onSubmit={handleSubmit}>
          {message && (
            <div className={success ? "success-message" : "error-message"}>
              {message}
            </div>
          )}
          <h1>Susisiekime</h1>
          <div className="row">
            <div className="input-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="name">
                <FontAwesomeIcon icon={faUser} className="contactus-icon" />
                Vardas Pavardė
              </label>
            </div>
            <div className="input-group">
              <input
                type="number"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
              />
              <label htmlFor="number">
                <FontAwesomeIcon icon={faPhone} className="contactus-icon" />
                Tel. Nr.
              </label>
            </div>
          </div>

          <div className="input-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">
              <FontAwesomeIcon icon={faEnvelope} className="contactus-icon" />
              El. paštas
            </label>
          </div>
          <div className="input-group">
            <textarea
              id="message"
              name="message"
              rows="2"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <label htmlFor="message">
              <FontAwesomeIcon icon={faComments} className="contactus-icon" />
              Jūsų užklausa
            </label>
          </div>
          <button type="submit">
            <FontAwesomeIcon icon={faPaperPlane} className="contactus-icon" />{" "}
            Siųsti
          </button>
        </form>
        <div className="contactus-logo">
          <img src={logo} alt="logo" width="300px" />
        </div>
        <div className="request-form">
          <h1>Užklausos forma</h1>
          <div className="contactus-text">
            <p>
              Turite klausimų, pasiūlymų ar komentarų apie mūsų teikiamas
              paslaugas ir produktus?
            </p>
            <p>
              Užpildykite užklausos formą ir su Jumis susisieks mūsų
              darbuotojai.
            </p>
            <p>Atsakysime per 1-2val. darbo dienomis</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactusform;
