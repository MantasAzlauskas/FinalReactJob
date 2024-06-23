import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "../Main/Styles/AboutUs.css";

const AboutUs = () => {
  const [counterOn, SetCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => SetCounterOn(true)}
      onExit={() => SetCounterOn(false)}
    >
      <div className="main-container-aboutus">
        <div className="container-aboutus">
          <div className="aboutus-content">
            <div className="aboutus-text">
              <h1>Apie mus</h1>
              <p className="aboutus-text-p">
                Enginehouse – tai įmonė, kuriai svarbiausia yra kokybė ir
                patikimumas. Nuo pat mūsų veiklos pradžios, mes siekiame tapti
                jūsų patikimu partneriu, teikiant ne tik variklių ir jų dalių
                prekybą, bet ir aukščiausio lygio techninio aptarnavimo
                paslaugas.
              </p>
              <p className="aboutus-text-p">
                Mes bendradarbiaujame su pasaulyje pripažintais gamintojais, kad
                galėtume pasiūlyti tik geriausius sprendimus mūsų klientams.
              </p>
              <p className="aboutus-text-p">
                Mūsų komanda – tai profesionalai, turintys ilgametę patirtį
                techninio aptarnavimo srityje. Mes nuolat tobuliname savo
                įgūdžius ir žinias, kad galėtume greitai ir efektyviai spręsti
                jūsų techninius iššūkius.
              </p>
              <p className="aboutus-text-p">
                Didžiuojamės, kad galime prisidėti prie jūsų sėkmės, siūlydami
                patikimus produktus ir paslaugas, kurios užtikrina ilgalaikį ir
                stabilų jūsų technikos veikimą. Mūsų misija – būti pirmuoju
                pasirinkimu, kai reikia aukštos kokybės variklių, jų dalių ir
                profesionalaus techninio aptarnavimo.
              </p>
            </div>
          </div>
          <div className="client-container">
            <h1>Mūsų skaičiai</h1>
            <div className="client-row">
              <div className="numbers">
                {counterOn && (
                  <CountUp start={0} end={150} duration={5} delay={0} />
                )}
                ~
              </div>
              <span className="client-text">Naujų klientų per mėnėsį</span>
            </div>
            <div className="client-row">
              <div className="numbers">
                {counterOn && (
                  <CountUp start={0} end={9999} duration={5} delay={0} />
                )}
                +
              </div>
              <span className="client-text">Laimingų klientų</span>
            </div>
            <div className="client-row">
              <div className="numbers">
                {counterOn && (
                  <CountUp start={0} end={9999} duration={5} delay={0} />
                )}
                +
              </div>
              <span className="client-text">Parduota dalių</span>
            </div>
            <div className="client-row">
              <div className="numbers">
                {counterOn && (
                  <CountUp start={0} end={4123} duration={5} delay={0} />
                )}
              </div>
              <span className="client-text">Parduota variklių</span>
            </div>
            <div className="client-row">
              <div className="numbers">
                {counterOn && (
                  <CountUp start={0} end={843} duration={5} delay={0} />
                )}
              </div>
              <span className="client-text">Sutvarkytos technikos</span>
            </div>
            <div className="client-row">
              <div className="numbers">
                {counterOn && (
                  <CountUp start={0} end={843} duration={5} delay={0} />
                )}
              </div>
              <span className="client-text">Sutvarkytos technikos</span>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default AboutUs;
