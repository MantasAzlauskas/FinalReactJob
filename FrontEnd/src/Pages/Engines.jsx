import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import engine1 from "../assests/Pages/Engines/1AD32654-0992-4F95-80FA-CA23C5A83216-1366x1025.jpeg";
import engine2 from "../assests/Pages/Engines/4D375DBE-237A-4D05-942A-5210F292053D-1366x1025.jpeg";
import engine3 from "../assests/Pages/Engines/640858ea1e68449eacdf231b_moteur-perkins-1006-6t.jpg";
import "../Pages/Styles/Engines.css";

const Engines = () => {
  return (
    <div className="engines-container">
      <h2>Populiariausi varikliai</h2>
      <div className="main-carousel-container">
        <Carousel autoPlay infiniteLoop showArrows={true} showThumbs={false}>
          <div className="carousel-container">
            <img src={engine1} alt="Engine 1" />
            <p className="legend">Variklio pavadinimas 1</p>
          </div>
          <div className="carousel-container">
            <img src={engine2} alt="Engine 2" />
            <p>Variklio pavadinimas 2</p>
          </div>
          <div className="carousel-container">
            <img src={engine3} alt="Engine 3" />
            <p className="legend">Variklio pavadinimas 3</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Engines;
