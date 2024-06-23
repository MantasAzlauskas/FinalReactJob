import React, { useEffect, useRef } from "react";
import engine1 from "../assests/Pages/Engines/JCB Dieselmax 448.jpg";
import engine2 from "../assests/Pages/Engines/JCB Dieselmax 672.jpg";
import engine3 from "../assests/Pages/Engines/JCB Ecomax 444.jpg";
import engine4 from "../assests/Pages/Engines/JCB EcoMAX T4i.jpg";
import engine5 from "../assests/Pages/Engines/JCB 444 TCA.jpg";
import engine6 from "../assests/Pages/Engines/JCB Ecomax 55kW.png";
import engine7 from "../assests/Pages/Engines/JCB 430 Dieselmax.jpg";
import engine8 from "../assests/Pages/Engines/engine8.jpg";
import engine9 from "../assests/Pages/Engines/engine9.jpg";
import engine10 from "../assests/Pages/Engines/engine10.jpg";
import engine11 from "../assests/Pages/Engines/engine11.jpg";
import engine12 from "../assests/Pages/Engines/engine12.jpg";
import engine13 from "../assests/Pages/Engines/engine13.jpg";
import engine14 from "../assests/Pages/Engines/engine14.jpg";
import engine15 from "../assests/Pages/Engines/engine15.jpg";
import engine16 from "../assests/Pages/Engines/engine16.jpg";
import engine17 from "../assests/Pages/Engines/engine17.jpg";
import engine18 from "../assests/Pages/Engines/engine18.jpg";
import engine19 from "../assests/Pages/Engines/engine19.jpg";
import engine20 from "../assests/Pages/Engines/engine20.jpg";
import engine21 from "../assests/Pages/Engines/engine21.jpg";
import engine22 from "../assests/Pages/Engines/engine22.png";
import engine23 from "../assests/Pages/Engines/engine23.jpg";
import engine24 from "../assests/Pages/Engines/engine24.jpg";
import engine25 from "../assests/Pages/Engines/engine25.jpeg";
import engine26 from "../assests/Pages/Engines/engine26.jpg";
import engine27 from "../assests/Pages/Engines/engine27.jpg";
import engine28 from "../assests/Pages/Engines/engine28.jpg";

import "../Pages/Styles/Engines.css";
import Contactusform from "../Components/Main/Contactusform";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";
import "../Components/ScrollToTop/ScrollToTop.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Engines = () => {
  const galleriesRef = useRef([]);

  const galleries = [
    {
      title: "JCB",
      engines: [
        {
          image: engine1,
          title: "JCB Dieselmax 448",
          type: "4.8 litrų, 4 cilindrų",
          power: "nuo 81 iki 129 kW (110 iki 173 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro Stage V",
          price: "apie 10,000 - 15,000 EUR",
        },
        {
          image: engine2,
          title: "JCB Dieselmax 672",
          type: "6.7 litrų, 6 cilindrų",
          power: "nuo 140 iki 225 kW (188 iki 302 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro Stage V",
          price: "apie 15,000 - 20,000 EUR",
        },
        {
          image: engine3,
          title: "JCB Ecomax 444",
          type: "4.4 litrų, 4 cilindrų",
          power: "nuo 55 iki 129 kW (74 iki 173 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro Stage IV/V",
          price: "apie 8,000 - 12,000 EUR",
        },
        {
          image: engine4,
          title: "JCB EcoMAX T4i",
          type: "4.4 litrų, 4 cilindrų",
          power: "nuo 55 iki 129 kW (74 iki 173 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Tier 4 Interim",
          price: "apie 8,000 - 12,000 EUR",
        },
        {
          image: engine5,
          title: "JCB 444 TCA",
          type: "4.4 litrų, 4 cilindrų",
          power: "iki 93 kW (125 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Tier 3",
          price: "apie 5,000 - 8,000 EUR",
        },
        {
          image: engine6,
          title: "JCB Ecomax 55kW",
          type: " 4.4 litrų, 4 cilindrų",
          power: "55 kW (74 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Tier 3",
          price: "apie 5,000 - 8,000 EUR",
        },
        {
          image: engine7,
          title: "JCB 430 Dieselmax",
          type: " 3.0 litrų, 4 cilindrų",
          power: "55 kW (74 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro Stage V",
          price: "apie 5,000 - 8,000 EUR",
        },
      ],
    },
    {
      title: "MAN",
      engines: [
        {
          image: engine8,
          title: "MAN D2876",
          type: "12.4 litrų, 6 cilindrų",
          power: "nuo 294 iki 478 kW (400 iki 650 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro 6",
          price: "apie 20,000 - 35,000 EUR",
        },
        {
          image: engine9,
          title: "MAN D2066",
          type: "10.5 litrų, 6 cilindrų",
          power: "184 iki 294 kW (250 iki 400 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro 6",
          price: "apie 12,000 - 18,000 EUR",
        },
        {
          image: engine10,
          title: "MAN D2676",
          type: "12.4 litrų, 6 cilindrų",
          power: "nuo 206 iki 324 kW (280 iki 440 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro 6",
          price: "apie 15,000 - 25,000 EUR",
        },
        {
          image: engine11,
          title: "MAN D0836",
          type: "6.9 litrų, 6 cilindrų",
          power: "118 iki 206 kW (160 iki 280 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro 6",
          price: "apie 8,000 - 12,000 EUR",
        },
        {
          image: engine12,
          title: "MAN D0834",
          type: "4.6 litrų, 4 cilindrų",
          power: "110 iki 162 kW (150 iki 220 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro 6",
          price: "apie 6,000 - 10,000 EUR",
        },
        {
          image: engine13,
          title: "MAN D2866",
          type: "11.9 litrų, 6 cilindrų",
          power: "nuo 206 iki 353 kW (280 iki 480 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro 6",
          price: "apie 15,000 - 25,000 EUR",
        },
        {
          image: engine14,
          title: "MAN D2066",
          type: "10.5 litrų, 6 cilindrų",
          power: "nuo 184 iki 294 kW (250 iki 400 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro 6",
          price: "apie 12,000 - 18,000 EUR",
        },
      ],
    },
    {
      title: "Iveco",
      engines: [
        {
          image: engine15,
          title: "Iveco Cursor 9",
          type: "8.7 litrų, 6 cilindrų",
          power: "nuo 228 iki 316 kW (310 iki 430 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro 6",
          price: "apie 15,000 - 25,000 EUR",
        },
        {
          image: engine16,
          title: "Iveco Cursor 13",
          type: "12.9 litrų, 6 cilindrų",
          power: "nuo 353 iki 412 kW (480 iki 560 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro 6",
          price: "apie 25,000 - 40,000 EUR",
        },
        {
          image: engine17,
          title: "Iveco FPT Industrial N67",
          type: "6.7 litrų, 6 cilindrų",
          power: "nuo 184 iki 310 kW (250 iki 420 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro 6",
          price: "apie 12,000 - 18,000 EUR",
        },
        {
          image: engine18,
          title: "Iveco N45",
          type: "4.5 litrų, 4 cilindrų",
          power: "nuo 115 iki 176 kW (156 iki 239 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro 6",
          price: "apie 10,000 - 15,000 EUR",
        },
        {
          image: engine19,
          title: "Iveco N67",
          type: "6.7 litrų, 6 cilindrų",
          power: "nuo 184 iki 310 kW (250 iki 420 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro 6",
          price: "apie 15,000 - 25,000 EUR",
        },
        {
          image: engine20,
          title: "Iveco F4AE",
          type: "3.0 litrų, 4 cilindrų",
          power: "nuo 107 iki 156 kW (145 iki 212 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro 6",
          price: "apie 8,000 - 12,000 EUR",
        },
        {
          image: engine21,
          title: "Iveco FPT Industrial N45",
          type: "4.5 litrų, 4 cilindrų",
          power: "nuo 96 iki 162 kW (130 iki 220 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro 6",
          price: "apie 10,000 - 15,000 EUR",
        },
      ],
    },
    {
      title: "Mitsubishi",
      engines: [
        {
          image: engine22,
          title: "Mitsubishi S6R2",
          type: "16.35 litrų, 6 cilindrų",
          power: "nuo 409 iki 706 kW (556 iki 960 AG)",
          fuelInjection: "Mechaninis",
          emissionStandard: "Euro 3",
          price: "apie 50,000 - 80,000 EUR",
        },
        {
          image: engine23,
          title: "Mitsubishi S12R",
          type: "49.03 litrų, 12 cilindrų",
          power: "nuo 1,135 iki 1,471 kW (1,542 iki 2,000 AG)",
          fuelInjection: "Mechaninis",
          emissionStandard: "Euro 3",
          price: "apie 100,000 - 150,000 EUR",
        },
        {
          image: engine24,
          title: "Mitsubishi 6D16",
          type: "7.5 litrų, 6 cilindrų",
          power: "nuo 170 iki 224 kW (231 iki 305 AG)",
          fuelInjection: "Mechaninis",
          emissionStandard: "Euro 3",
          price: "apie 20,000 - 30,000 EUR",
        },
        {
          image: engine25,
          title: "Mitsubishi 4D56",
          type: "2.5 litrų, 4 cilindrų",
          power: "nuo 60 iki 85 kW (82 iki 115 AG)",
          fuelInjection: "Mechaninis",
          emissionStandard: "Euro 3",
          price: "apie 5,000 - 8,000 EUR",
        },
        {
          image: engine26,
          title: "Mitsubishi 4G63",
          type: "2.0 litrų, 4 cilindrų",
          power: "nuo 74 iki 121 kW (100 iki 165 AG)",
          fuelInjection: "Mechaninis",
          emissionStandard: "Euro 3",
          price: "apie 4,000 - 7,000 EUR",
        },
        {
          image: engine27,
          title: "Mitsubishi 6M60",
          type: "7.5 litrų, 6 cilindrų",
          power: "nuo 177 iki 206 kW (240 iki 280 AG)",
          fuelInjection: "Mechaninis",
          emissionStandard: "Euro 3",
          price: "apie 25,000 - 35,000 EUR",
        },
        {
          image: engine28,
          title: "Mitsubishi 6D22",
          type: "11.1 litrų, 6 cilindrų",
          power: "nuo 176 iki 324 kW (240 iki 440 AG)",
          fuelInjection: "Mechaninis",
          emissionStandard: "Euro 3",
          price: "apie 30,000 - 45,000 EUR",
        },
      ],
    },
  ];

  useEffect(() => {
    galleriesRef.current.forEach((galleryRef) => {
      const scrollContainer = galleryRef.querySelector(".engines-info");
      const backBtn = galleryRef.querySelector(".backBtn");
      const nextBtn = galleryRef.querySelector(".nextBtn");

      const handleScroll = (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
      };

      const handleNextClick = () => {
        scrollContainer.scrollLeft += 900;
      };

      const handleBackClick = () => {
        scrollContainer.scrollLeft -= 900;
      };

      if (scrollContainer && backBtn && nextBtn) {
        scrollContainer.addEventListener("wheel", handleScroll);
        nextBtn.addEventListener("click", handleNextClick);
        backBtn.addEventListener("click", handleBackClick);
      }

      // Cleanup function
      return () => {
        if (scrollContainer && backBtn && nextBtn) {
          scrollContainer.removeEventListener("wheel", handleScroll);
          nextBtn.removeEventListener("click", handleNextClick);
          backBtn.removeEventListener("click", handleBackClick);
        }
      };
    });
  }, []);

  return (
    <div className="main-engine-container">
      <h1>Populiariausi Variklių modeliai</h1>
      {galleries.map((gallery, index) => (
        <div
          key={index}
          ref={(el) => (galleriesRef.current[index] = el)}
          className="engines-container"
        >
          <h1>{gallery.title}</h1>
          <div className="gallery-wrap">
            <div className="engines-info">
              {gallery.engines.map((engine, idx) => (
                <div key={idx} className="engine-item">
                  <img
                    src={engine.image}
                    alt={`Variklis ${idx + 1}`}
                    className="engine-image"
                  />
                  <div className="engine-info">
                    <h2>{engine.title}</h2>
                    <p>Variklio tipas: {engine.type}</p>
                    <p>Galia: {engine.power}</p>
                    <p>Kuro įpurškimas: {engine.fuelInjection}</p>
                    <p>Emisijų standartai: {engine.emissionStandard}</p>
                    <p>Orientacinė kaina: {engine.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="backBtn">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="nextBtn">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      ))}
      <div className="contactus-engine">
        <Contactusform />
      </div>

      <ScrollToTop />
    </div>
  );
};

export default Engines;
