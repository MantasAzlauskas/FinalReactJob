import React from "react";
import "../Main/Styles/Services.css";
import Engine from "../../assests/Main/1_DhAWalmdXQgLd5-BMUsJKQ.png";
import SpareParts from "../../assests/Main/diesel-engine-spare-parts-500x500.png";
import EngineRepair from "../../assests/Main/enginerepair.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services-main-container">
      <h1>Paslaugos</h1>
      <div className="img-container">
        <article className="img-article">
          <Link to="/engines">
            <img src={Engine} alt="enginephoto" className="img-card" />
          </Link>
          <div className="img-info">
            <h2 className="img-title">Varikliai</h2>
          </div>
        </article>

        <article className="img-article">
          <Link to="/spareparts">
            <img src={SpareParts} alt="sparepartsphoto" className="img-card" />
          </Link>

          <div className="img-info">
            <h2 className="img-title">Dalys</h2>
          </div>
        </article>

        <article className="img-article">
          <Link to="/repair">
            <img
              src={EngineRepair}
              alt="enginerepairphoto"
              className="img-card"
            />
          </Link>

          <div className="img-info">
            <h2 className="img-title">Remontas</h2>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Services;
