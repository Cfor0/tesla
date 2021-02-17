import React from "react";
import "./CarModel.css";

const CarModel = (props) => {
  return (
    <>
      <div id="car-banner">
        <header id="car-banner__header">
          <h1 id="car-banner__header__title">
            Model S <span id="car-banner__header__title__sub">Plaid</span>
          </h1>
        </header>
      </div>
      <div id="car-interior"></div>
    </>
  );
};

export default CarModel;
