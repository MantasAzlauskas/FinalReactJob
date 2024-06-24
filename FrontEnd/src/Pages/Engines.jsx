import React, { useEffect, useRef } from "react";
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
          image:
            "https://www.enginecopower.com/photos/xtun_models/f/25/25953.jpg?m=1594171319",
          title: "JCB Dieselmax 448",
          type: "4.8 litrų, 4 cilindrų",
          power: "nuo 81 iki 129 kW (110 iki 173 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro Stage V",
          price: "apie 10,000 - 15,000 EUR",
        },
        {
          image:
            "https://www.enginecopower.com/photos/xtun_models/f/25/25955.jpg?m=1594171320",
          title: "JCB Dieselmax 672",
          type: "6.7 litrų, 6 cilindrų",
          power: "nuo 140 iki 225 kW (188 iki 302 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro Stage V",
          price: "apie 15,000 - 20,000 EUR",
        },
        {
          image:
            "https://www.enginecopower.com/photos/xtun_models/f/25/25952.jpg?m=1594171318",
          title: "JCB Ecomax 444",
          type: "4.4 litrų, 4 cilindrų",
          power: "nuo 55 iki 129 kW (74 iki 173 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro Stage IV/V",
          price: "apie 8,000 - 12,000 EUR",
        },
        {
          image:
            "https://d2uhsaoc6ysewq.cloudfront.net/46962/Engines-JCB-444-18491823.jpg",
          title: "JCB EcoMAX T4i",
          type: "4.4 litrų, 4 cilindrų",
          power: "nuo 55 iki 129 kW (74 iki 173 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Tier 4 Interim",
          price: "apie 8,000 - 12,000 EUR",
        },
        {
          image:
            "https://www.rddiesels.com/wp-content/uploads/2021/10/jcb-444-tc-variklis-74kw-32050405-naujas-2.jpg",
          title: "JCB 444 TCA",
          type: "4.4 litrų, 4 cilindrų",
          power: "iki 93 kW (125 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Tier 3",
          price: "apie 5,000 - 8,000 EUR",
        },
        {
          image:
            "https://i0.wp.com/plantparts4u.co.uk/wp-content/uploads/wp-1680271304827.jpg?resize=500%2C500&ssl=1",
          title: "JCB Ecomax 55kW",
          type: " 4.4 litrų, 4 cilindrų",
          power: "55 kW (74 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Tier 3",
          price: "apie 5,000 - 8,000 EUR",
        },
        {
          image:
            "https://www.enginecopower.com/photos/xtun_models/f/25/25950.jpg?m=1594171317",
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
          image:
            "https://img.directindustry.com/images_di/photo-m2/81737-9230968.jpg",
          title: "MAN D2876",
          type: "12.4 litrų, 6 cilindrų",
          power: "nuo 294 iki 478 kW (400 iki 650 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro 6",
          price: "apie 20,000 - 35,000 EUR",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBNCmCLVZSWqbAjeoFknm0ONJYh6xK0CwXAQ&s",
          title: "MAN D2066",
          type: "10.5 litrų, 6 cilindrų",
          power: "184 iki 294 kW (250 iki 400 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro 6",
          price: "apie 12,000 - 18,000 EUR",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Qak1oEhNLo_hm2L6aFOdmQ5jXIpfq0VWbA&s",
          title: "MAN D2676",
          type: "12.4 litrų, 6 cilindrų",
          power: "nuo 206 iki 324 kW (280 iki 440 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro 6",
          price: "apie 15,000 - 25,000 EUR",
        },
        {
          image:
            "https://img.directindustry.com/images_di/photo-g/81737-12225341.jpg",
          title: "MAN D0836",
          type: "6.9 litrų, 6 cilindrų",
          power: "118 iki 206 kW (160 iki 280 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro 6",
          price: "apie 8,000 - 12,000 EUR",
        },
        {
          image:
            "https://img.directindustry.com/images_di/photo-g/81737-12225312.webp",
          title: "MAN D0834",
          type: "4.6 litrų, 4 cilindrų",
          power: "110 iki 162 kW (150 iki 220 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro 6",
          price: "apie 6,000 - 10,000 EUR",
        },
        {
          image:
            "https://st.mascus.com/imagetilewm/product/11e2eb57/man-d2866-loh-01-2-3-6-7-9-20,b0406ece.jpg",
          title: "MAN D2866",
          type: "11.9 litrų, 6 cilindrų",
          power: "nuo 206 iki 353 kW (280 iki 480 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro 6",
          price: "apie 15,000 - 25,000 EUR",
        },
        {
          image:
            "https://fandjexports.com/wp-content/uploads/2017/02/MAN-D2066-LF01-2007-3-980x654.jpg",
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
          image: "https://fptengines.pl/wp-content/uploads/2019/07/c9_1.jpg",
          title: "Iveco Cursor 9",
          type: "8.7 litrų, 6 cilindrų",
          power: "nuo 228 iki 316 kW (310 iki 430 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro 6",
          price: "apie 15,000 - 25,000 EUR",
        },
        {
          image: "https://fptengines.pl/wp-content/uploads/2019/08/c13_06.jpg",
          title: "Iveco Cursor 13",
          type: "12.9 litrų, 6 cilindrų",
          power: "nuo 353 iki 412 kW (480 iki 560 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro 6",
          price: "apie 25,000 - 40,000 EUR",
        },
        {
          image:
            "https://www.lectura-specs.com/models/renamed/orig/engines-n67-ent-235-kw--fpt-industrial.jpg",
          title: "Iveco FPT Industrial N67",
          type: "6.7 litrų, 6 cilindrų",
          power: "nuo 184 iki 310 kW (250 iki 420 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro 6",
          price: "apie 12,000 - 18,000 EUR",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwElLPFV6Hv5v-_P-5Ri8zX-7Dzw_UgeX9fg&s",
          title: "Iveco N45",
          type: "4.5 litrų, 4 cilindrų",
          power: "nuo 115 iki 176 kW (156 iki 239 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro 6",
          price: "apie 10,000 - 15,000 EUR",
        },
        {
          image:
            "https://fptengines.pl/wp-content/uploads/2019/08/nef67_08.jpg",
          title: "Iveco N67",
          type: "6.7 litrų, 6 cilindrų",
          power: "nuo 184 iki 310 kW (250 iki 420 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro 6",
          price: "apie 15,000 - 25,000 EUR",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsEbanGjKfaRNFU1N-sOBp3DRp2FmteTVAA&s",
          title: "Iveco F4AE",
          type: "3.0 litrų, 4 cilindrų",
          power: "nuo 107 iki 156 kW (145 iki 212 AG)",
          fuelInjection: "Common rail",
          emissionStandard: "Euro 6",
          price: "apie 8,000 - 12,000 EUR",
        },
        {
          image:
            "https://img.oemoffhighway.com/files/base/acbm/ooh/image/2018/11/N45_StageV.5beafa65f135a.png?auto=format%2Ccompress&q=70",
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
          image:
            "https://www.det-engines.com/wp-content/uploads/2024/02/Mitsubishi-S6R-PTA-12_0-300x267.png",
          title: "Mitsubishi S6R2",
          type: "16.35 litrų, 6 cilindrų",
          power: "nuo 409 iki 706 kW (556 iki 960 AG)",
          fuelInjection: "Mechaninis",
          emissionStandard: "Euro 3",
          price: "apie 50,000 - 80,000 EUR",
        },
        {
          image:
            "https://www.mhi.com/group/mhiesa/sites/g/files/jwhtju2196/files/styles/original_image/public/13.-S12R-T2MPTK-scaled_4.jpg?itok=95vcYM40",
          title: "Mitsubishi S12R",
          type: "49.03 litrų, 12 cilindrų",
          power: "nuo 1,135 iki 1,471 kW (1,542 iki 2,000 AG)",
          fuelInjection: "Mechaninis",
          emissionStandard: "Euro 3",
          price: "apie 100,000 - 150,000 EUR",
        },
        {
          image:
            "https://machineryline.lt/img/s/atsargine-dalys-variklis-Mitsubishi-6D16-T-USED---1709826238738456548_common--23110712222392308700.jpg",
          title: "Mitsubishi 6D16",
          type: "7.5 litrų, 6 cilindrų",
          power: "nuo 170 iki 224 kW (231 iki 305 AG)",
          fuelInjection: "Mechaninis",
          emissionStandard: "Euro 3",
          price: "apie 20,000 - 30,000 EUR",
        },
        {
          image:
            "https://www.global-motors.eu/wp-content/uploads/2020/06/11345115_b22fe5dd-0f24-4121-8ecf-2f2c1be30212.jpeg",
          title: "Mitsubishi 4D56",
          type: "2.5 litrų, 4 cilindrų",
          power: "nuo 60 iki 85 kW (82 iki 115 AG)",
          fuelInjection: "Mechaninis",
          emissionStandard: "Euro 3",
          price: "apie 5,000 - 8,000 EUR",
        },
        {
          image:
            "https://s1.cdn.autoevolution.com/images/news/gallery/mitsubishis-4g63t-the-iconic-four-cylinder-at-the-heart-of-nine-evo-generations_22.jpg",
          title: "Mitsubishi 4G63",
          type: "2.0 litrų, 4 cilindrų",
          power: "nuo 74 iki 121 kW (100 iki 165 AG)",
          fuelInjection: "Mechaninis",
          emissionStandard: "Euro 3",
          price: "apie 4,000 - 7,000 EUR",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2v7JcDcT_oHmXSaiTsTgUUO6nGDzoBGrXsQ&s",
          title: "Mitsubishi 6M60",
          type: "7.5 litrų, 6 cilindrų",
          power: "nuo 177 iki 206 kW (240 iki 280 AG)",
          fuelInjection: "Mechaninis",
          emissionStandard: "Euro 3",
          price: "apie 25,000 - 35,000 EUR",
        },
        {
          image:
            "https://st.mascus.com/imagetilewm/product/7d16d047/mitsubishi-6d22-t-used,8cb0b9fe-1.jpg",
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
      <p className="engine-title">
        Pasitelkę inovacijas ir patikimumą, pristatome jums populiariausius
        variklių modelius. Nuo galingų traktorių variklių iki kompaktiškų ir
        ekonomiškų sprendimų, mūsų asortimente rasite idealų variklį jūsų
        poreikiams. O tai tik pradžia – pasirinkę mūsų variklį, galime pasiūlyti
        ir daugiau. Jei neradote tinkamo varianto, mūsų specialistai su
        džiaugsmu jums padės atrasti geriausią sprendimą.
      </p>
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
