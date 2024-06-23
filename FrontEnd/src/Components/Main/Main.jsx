import React from "react";
import BGVideo from "../../../src/assests/Main/BackgroundVideo.mp4";
import "../Main/Styles/Main.css";
import "../Main/Styles/Services.css";
import Services from "./Services";
import Contactusform from "./Contactusform";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import AboutUs from "./AboutUs";

const Main = () => {
  return (
    <div className="main">
      <div className="main-container">
        <div className="overlay"></div>
        <video src={BGVideo} autoPlay loop muted />
        <div className="content">
          <h1>ENGINEHOUSE</h1>
          <p>
            Enginehouse yra įmonė, kuri specializuojasi variklių ir jų dalių
            prekyboje, taip pat technikos remonte. Mes siūlome platų asortimentą
            aukštos kokybės variklių ir jų komponentų, užtikrinančių ilgalaikį
            ir patikimą veikimą. Mūsų profesionali komanda teikia kvalifikuotas
            remonto paslaugas, padedančias klientams išlaikyti savo techniką
            puikios būklės.
          </p>
        </div>
      </div>
      <Services />
      <AboutUs />
      <Contactusform />
      <ScrollToTop />
    </div>
  );
};

export default Main;
