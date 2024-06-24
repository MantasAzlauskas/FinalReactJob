import React from "react";
import "../Main/Styles/Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services-main-container">
      <h1>Paslaugos</h1>
      <div className="img-container">
        <article className="img-article">
          <Link to="/engines">
            <img
              src={
                "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSrVp2T8DJBonmZAhR5IoiE9VWnkzFwrvrT5EeJbDhKJA5aoswu"
              }
              alt="enginephoto"
              className="img-card"
            />
          </Link>
          <div className="img-info">
            <h2 className="img-title">Varikliai</h2>
          </div>
        </article>

        <article className="img-article">
          <Link to="/spareparts">
            <img
              src={
                "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSNncA_27iDuAjR_uaYdhML-dUFVsKVL1J9JwZW_BFd6VZ6UOdu"
              }
              alt="sparepartsphoto"
              className="img-card"
            />
          </Link>

          <div className="img-info">
            <h2 className="img-title">Dalys</h2>
          </div>
        </article>

        <article className="img-article">
          <Link to="/repair">
            <img
              src={
                "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTEnXbRt73eXTaueQECLpz7Mvjz_BM56mOz4Bw-Bn7koMEM5Ekj"
              }
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
