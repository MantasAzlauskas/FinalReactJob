import React, { useEffect, useRef } from "react";
import "../Pages/Styles/Spareparts.css";
import Contactusform from "../Components/Main/Contactusform";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Spareparts = () => {
  const galleriesRef = useRef([]);

  const galleries = [
    {
      title: "Variklio dalys",
      parts: [
        {
          image:
            "https://srotas24.lt/images/9O2iJC5KS11rDKRf8hGo-fx5b9WCiJ2YSWdR-9VFPMw/w:260/aHR0cHM/6Ly9hLmFsbGVncm9pbWcuY29tL3MyNjAvMTE1YWQ2Lzk1N2QxMTQwNDAwN2FhOWNmYmY3N2RkYzBiNDAvVGxvay1FTkdJVEVDSC1FTlQwNTAwMTItU1RE",
          subtitle: "Stūmokliai",
          description:
            "Stūmokliai yra variklio dalys, atsakingos už deguonies ir degalų mišinio stūmoklio judėjimą variklyje.",
        },
        {
          image:
            "https://youthcan.lt/297982-1_Kyotechs-3304-cilindro-galvut%C4%97s-variklio-galvos-3304/cdn-pic.jpg",
          subtitle: "Cilindro galvutės",
          description:
            "Cilindro galvutės yra variklio dalys, kurios atsakingos už deguonies ir degalų mišinio sudeginimą variklyje.",
        },
        {
          image:
            "https://varikliusandelis.lt/wp-content/uploads/2020/11/alkuninis-velenas-isuzu-6hh1-fsr-8976030030.png",
          subtitle: "Alkūniniai velenai",
          description:
            "Alkūniniai velenai yra variklio dalys, kurios verčia vertikalią į horizontalią judėjimą, pakeisdami jėgą iš įprasto veleno į skersinį jėgą.",
        },
        {
          image:
            "https://www.pigiausiosdalys.lt/results/uploads/partimages/b3366d9c8add19ba8580d91095ba9c71_w_380_h_270.jpg",
          subtitle: "Vožtuvai",
          description:
            "Vožtuvai yra variklio dalys, kurios atsakingos už deguonies ir degalų mišinio įleidimą ir išleidimą į variklį.",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7IZ9d5gcagn7qc_OLEpVykx7Wlf_9C_iEdw&s",
          subtitle: "Įsiurbimo kolektoriai",
          description:
            "Įsiurbimo kolektoriai yra variklio dalys, kurios padeda sumaišyti degalus su oro srautu ir nusiųsti juos į cilindrus.",
        },
        {
          image:
            "https://api.delfi.lt/media-api-image-cropper/v1/6df76f80-7b86-11ed-a027-29ed55e34c8c.jpg?w=1200&h=800&fx=0.5&fy=0.25",
          subtitle: "Turbokompresoriai",
          description:
            "Turbokompresoriai yra variklio dalys, kurios padeda padidinti variklio galios ir efektyvumo rodiklius.",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJnQOC6oQIAUh4r9M9kkXnnPFt1kohfqtsmg&s",
          subtitle: "Kuro purkštukai",
          description:
            "Kuro purkštukai yra variklio dalys, kurios atsakingos už degalų tiekimą į variklį.",
        },
      ],
    },
    {
      title: "Transmisijos dalys",
      parts: [
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Automatic_transmission_cut.jpg/250px-Automatic_transmission_cut.jpg",
          subtitle: "Pavarų dėžės",
          description:
            "Pavarų dėžės yra transmisijos dalys, kurios perduoda variklio sukimosi jėgą į pavarų ašį.",
        },
        {
          image:
            "https://www.litechnija.lt/22167-thickbox_default/sankabos-diskas.jpg",
          subtitle: "Sankabos diskai",
          description:
            "Sankabos diskai yra transmisijos dalys, kurios sujungia variklį su pavarų dėže.",
        },
        {
          image:
            "https://webcdn.intercars.eu/thumbnails/99f1m5/18-2146_%232.jpg?sp=r&st=2019-08-02T10:10:24Z&se=2027-08-03T10:10:00Z&sv=2018-03-28&sig=kCBWYktezowZJSsbkZO2vhT9kmwl1msEQHwQbp3Iukc%3D&sr=c",
          subtitle: "Kardano velenai",
          description:
            "Kardano velenai yra transmisijos dalys, kurios perduoda sukimosi jėgą iš variklio į pavaru ašį.",
        },
        {
          image: "https://media.autodoc.de/360_photos/8636634/h-preview.jpg",
          subtitle: "Diferencialai",
          description:
            "Diferencialai yra transmisijos dalys, kurios leidžia ratams sukimosi skirtingu greičiu, gerindami transporto priemonių stabilumą ir manevringumą.",
        },
        {
          image: "https://nodum.lt/wp-content/uploads/2017/11/brem.jpg",
          subtitle: "Pavarų perjungimo mechanizmai",
          description:
            "Pavarų perjungimo mechanizmai yra transmisijos dalys, kurios leidžia vairuotojui keisti pavaras.",
        },
        {
          image:
            "https://a.allegroimg.com/s1080/110eac/68e1fadc4e8e972aef25c5b391fc/Car-Transmission-Torque-Converter-Lock-Up-Solenoid-For-Subaru-Linear-31021",
          subtitle: "Hidrauliniai keitikliai",
          description:
            "Hidrauliniai keitikliai yra transmisijos dalys, kurios valdo pavarų perjungimą naudojant hidraulinį slėgį.",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogDHP1ByuMP81WQUKvvT8JcJYl2eLaFbolw&s",
          subtitle: "Sankabos meistrai",
          description:
            "Sankabos meistrai yra transmisijos dalys, kurios užtikrina sankabos veikimą ir perjungimo patikimumą.",
        },
      ],
    },
    {
      title: "Elektroninės sistemos dalys",
      parts: [
        {
          image:
            "https://srotas24.lt/images/kLH9F2MhF0Rxf9T__35zNuUTYk7RO2LcTNkYArYRW4A/w:260/aHR0cHM/6Ly9hLmFsbGVncm9pbWcuY29tL3MyNjAvMTFhYjQ2L2IzNmIxZGJmNDJhN2FjZjZmOGQ1ZTlmMDU1NTMvU3Rlcm93bmlrLTAyODEwMTE1NjEtOTY1Njk3NDc4MC1CRVotSU1NTw",
          subtitle: "Valdymo blokai (ECU)",
          description:
            "Valdymo blokai (ECU) yra elektroninės sistemos dalys, kurios valdo variklio veikimą, reguliuoja deguonies ir degalų mišinio sudeginimą ir optimizuoja našumą.",
        },
        {
          image:
            "https://www.mokslotechnologijos.lt/images/uploader/ea/308x308.g/easytemp-jutiklis-2.png",
          subtitle: "Jutikliai (deguonies, temperatūros, slėgio)",
          description:
            "Jutikliai yra elektroninės sistemos dalys, kurios matuoja variklio temperatūrą, slėgį ir kitus parametrus, siekdami užtikrinti efektyvų variklio veikimą.",
        },
        {
          image: "https://agrodileris.lt/8270-large_default/laidai.jpg",
          subtitle: "Elektros instaliacijos laidai",
          description:
            "Elektros instaliacijos laidai yra elektroninės sistemos dalys, kurios sujungia visus variklio ir transporto priemonės elektrinius komponentus.",
        },
        {
          image:
            "https://www.especagra.lt/images/uploader/ak/388x388.g/akumuliatorius-12v-150ah-panther-1.jpg?t=291242",
          subtitle: "Akumuliatoriai",
          description:
            "Akumuliatoriai yra elektroninės sistemos dalys, kurios tiekia elektrinę energiją varikliui ir kitoms elektroninėms sistemoms.",
        },
        {
          image:
            "https://motofocus.lt/wp-content/uploads/2017/05/uzdegimo-sistema4.jpg",
          subtitle: "Degimo sistemos",
          description:
            "Degimo sistemos yra elektroninės sistemos dalys, kurios atsakingos už deguonies ir degalų mišinio sudeginimą variklyje.",
        },
        {
          image:
            "https://lt2.pigugroup.eu/colours/329/559/37/32955937/elektrinis-starteris-universal-93412_original.jpg",
          subtitle: "Starteriai",
          description:
            "Starteriai yra elektroninės sistemos dalys, kurios pradeda variklio veikimą, suteikdamos sukimosi jėgą variklio paleidimo metu.",
        },
        {
          image:
            "https://www.vesko.lt/images/uploader/ge/228x228.g/generatorius-re46608-john-deere-1.jpg",
          subtitle: "Generatoriai",
          description:
            "Generatoriai yra elektroninės sistemos dalys, kurios generuoja elektrinę energiją traktoriaus elektros sistemai.",
        },
      ],
    },
    {
      title: "Hidraulinės sistemos dalys",
      parts: [
        {
          image:
            "https://lytagra.lt/28684-large_default/hidraulinis-siurblys-ns-14g-3l-kairys.jpg",
          subtitle: "Hidrauliniai siurbliai",
          description:
            "Hidrauliniai siurbliai yra hidraulinės sistemos dalys, kurios perveda skystąjį kuro srautą per visą hidraulinę sistemą.",
        },
        {
          image:
            "https://lytagra.lt/46115-home_default/cilindras-kauso-cg4-80-56-900-13-6250-000.jpg",
          subtitle: "Hidrauliniai cilindrai",
          description:
            "Hidrauliniai cilindrai yra hidraulinės sistemos dalys, kurios naudojamos palaikyti ir reguliuoti variklio sistemos spaudimą.",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMagPrACUMB0G2mG_Fw6HXaPqan4FldiaQzg&s",
          subtitle: "Valdymo vožtuvai",
          description:
            "Hidrauliniai ventiliai yra hidraulinės sistemos dalys, kurios reguliuoja skystojo kuro srautą ir spaudimą per visą sistemą.",
        },
        {
          image:
            "https://st-dalys.lt/wp-content/uploads/2019/05/8B3bIB3_IzL_syRWsXQWejq_F_.jpeg",
          subtitle: "Hidrauliniai filtrai",
          description:
            "Hidrauliniai filtrai yra hidraulinės sistemos dalys, kurios valo skystąjį kuro srautą nuo dalelių ir nešvarumų.",
        },
        {
          image:
            "https://lytagra.lt/38937-home_default/hidrauline-zarna-600-mm-m16x1-5.jpg",
          subtitle: "Hidrauliniai žarnos",
          description:
            "Hidrauliniai rezervuarai yra hidraulinės sistemos dalys, kurios saugo skystąjį kuro srautą ir suteikia jį hidraulinėms sistemoms.",
        },
        {
          image:
            "https://www.hidraulines-sistemos.lt/uploads/Products/product_1558/1558-780-pic.jpg",
          subtitle: "Hidraulinės alyvos bakai",
          description:
            "Hidraulinės vamzdynų sistemos yra hidraulinės sistemos dalys, kurios sujungia skystojo kuro srautą tarp įvairių hidraulinės sistemos komponentų.",
        },
        {
          image: "https://i.ak24.ee/prd/big/972/972470/896.jpg",
          subtitle: "Slėgio akumuliatoriai",
          description:
            "Hidrauliniai matuokliai yra hidraulinės sistemos dalys, kurios matuoja ir rodo hidraulinės sistemos spaudimą ir srautą.",
        },
      ],
    },
  ];

  useEffect(() => {
    galleriesRef.current.forEach((galleryRef) => {
      const scrollContainer = galleryRef.querySelector(".parts-info");
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
    <div className="main-parts-container">
      <h1>Populiariausios Atsarginės Dalys</h1>
      <p className="parts-title">
        Atsarginės dalys yra esminės traktoriaus techninės būklės priežiūros
        dalis. Jos ne tik užtikrina, kad technika veiktų optimaliai, bet ir
        padidina jos ilgaamžiškumą. Tai apima viską nuo variklio komponentų ir
        transmisijos elementų iki svarbių elektroninių ir hidraulinės sistemos
        detalių. Be šių dalių tinkama techninė priežiūra būtų neįmanoma, o
        traktoriaus veikimas būtų neefektyvus ir rizikingas.
      </p>

      {galleries.map((gallery, index) => (
        <div
          key={index}
          ref={(el) => (galleriesRef.current[index] = el)}
          className="parts-container"
        >
          <h1>{gallery.title}</h1>
          <div className="gallery-wrap">
            <div className="parts-info">
              {gallery.parts.map((part, idx) => (
                <div key={idx} className="part-item">
                  <img
                    src={part.image}
                    alt={`Atsarginė dalis ${idx + 1}`}
                    className="part-image"
                  />
                  <div className="part-info">
                    <h2>{part.subtitle}</h2>
                    <p>{part.description}</p>
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

      <div className="contactus-part">
        <Contactusform />
      </div>

      <ScrollToTop />
    </div>
  );
};

export default Spareparts;
