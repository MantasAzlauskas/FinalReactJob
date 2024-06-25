import React from "react";
import "../Pages/Styles/Repair.css";
import Contactusform from "../Components/Main/Contactusform";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";

const Repair = () => {
  return (
    <div>
      <div className="main-repair-container">
        <div className="repair-container">
          <h3>
            Mūsų įmonė specializuojasi traktorių, ekskavatorių, žoliapjovių ir
            mini traktoriukų remonte bei jų detalių pakeitimu. Proceso
            pradžioje, kai jūs atvežate traktorių ar kitą technikos priemonę,
            mes atliekame išsamią diagnostiką ir skaičiuojame visą remonto sumą.
            Remonto darbai gali trunkti nuo vieno iki trijų mėnesių priklausomai
            nuo gedimo sudėtingumo.
          </h3>
          <h3>
            Mūsų profesionalūs technikai atlieka detalių keitimą, atnaujinimą
            bei bendrą remontą, kad užtikrintų jūsų technikos ilgaamžiškumą ir
            efektyvumą. Kiekvieną remonto etapą atliekame atsakingai ir
            kruopščiai, siekdami užtikrinti aukštą darbo kokybę ir klientų
            pasitenkinimą.
          </h3>
        </div>
      </div>
      <Contactusform />
      <ScrollToTop />
    </div>
  );
};

export default Repair;
