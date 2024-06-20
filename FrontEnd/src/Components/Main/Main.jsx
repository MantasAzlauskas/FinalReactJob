import React, { useState, useEffect } from "react";
import BGVideo from "../../../src/assests/Main/BackgroundVideo.mp4";
import "../Main/Styles/Main.css";
import "../Main/Styles/Services.css";
import Services from "./Services";
import Contactusform from "./Contactusform";

const Main = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="main">
      <div className="main-container">
        <div className="overlay"></div>
        <video src={BGVideo} autoPlay loop muted />
        <div className="content">
          <h1>ENGINEHOUSE</h1>
          <p>
            Enginehouse yra patikima įmonė, kuri specializuojasi variklių ir jų
            dalių prekyboje, taip pat technikos remonte. Mes siūlome platų
            asortimentą aukštos kokybės variklių ir jų komponentų, užtikrinančių
            ilgalaikį ir patikimą veikimą. Mūsų profesionali komanda teikia
            kvalifikuotas remonto paslaugas, padedančias klientams išlaikyti
            savo techniką puikios būklės.
          </p>
        </div>
      </div>
      <Services />
      <Contactusform />
      {showButton && (
        <button onClick={scrollToTop} className="scroll-to-top">
          ↑
        </button>
      )}
    </div>
  );
};

export default Main;
