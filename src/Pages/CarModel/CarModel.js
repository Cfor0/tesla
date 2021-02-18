import React from "react";
import ScrollArrow from "../../components/ScrollArrow/ScrollArrow";

import "./CarModel.css";

const CarModel = (props) => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div id="car-banner">
        <header id="car-banner__header">
          <h1 id="car-banner__header__title">Model S</h1>
          {/* <span id="car-banner__header__title__sub">Plaid</span> */}
        </header>
        <div id="car-banner__header__bottom">
          <div className="car-banner__header__bottom__column">
            <h2 className="header__column__title">3.1 s</h2>
            <span className="header__column__body">From 0-60 mph</span>
          </div>
          <div className="car-banner__header__bottom__column">
            <h2 className="header__column__title">353 mi</h2>
            <span className="header__column__body">Range (EPA est.)</span>
          </div>
          <div className="car-banner__header__bottom__column">
            <h2 className="header__column__title">AWD</h2>
            <span className="header__column__body">Dual Motor</span>
          </div>
          <div className="car-banner__header__bottom__column">
            <button className="header__column__button">Order Now</button>
          </div>
        </div>
        <ScrollArrow />
      </div>
      <div id="car-safety">
        <div className="car-safety__container__text">
          <h4 className="car-safety__container__text__sub">Safety</h4>
          <h3 className="car-safety__container__text__title">
            Built for Safety
          </h3>
          <p className="car-safety__container__text__body">
            Safety is the most important part of the overall Model 3 design. The
            metal structure is a combination of aluminum and steel, for maximum
            strength in every area. In a roof-crush test, Model 3 resisted four
            times its own mass, even with an all-glass roof: that's the same
            weight as two full-grown African elephants.
          </p>
        </div>
        <div className="car-safety__container__image"></div>
        <div className="car-banner__header__title"></div>
      </div>
    </div>
  );
};

export default CarModel;
