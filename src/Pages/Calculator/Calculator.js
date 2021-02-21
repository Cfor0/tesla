import React from "react";
import "./Calculator.css";

const Calculator = () => {
    return (
        <div id="calculator-container">
            <div id="calculator-container__input">
                <div id="vehicle-type-container">
                    <div className="vehicle-type">
                        <h2 className="vehicle-type__name">Sedan</h2>
                    </div>
                    <div className="vehicle-type">
                        <h2 className="vehicle-type__name">SUV</h2>
                    </div>
                    <div className="vehicle-type">
                        <h2 className="vehicle-type__name">Truck</h2>
                    </div>
                    <div className="vehicle-type">
                        <h2 className="vehicle-type__name">Sports Car</h2>
                    </div>
                </div>
                <form id="vehicle-type-input-container__outer">
                    <div className="vehicle-type-input-container__inner">
                        <label className="input-container__inner__label">
                            Local Gas Price
                        </label>
                        <input className="input-container__inner__field" />
                    </div>
                    <div className="vehicle-type-input-container__inner">
                        <label className="input-container__inner__label">
                            Weekly Mileage
                        </label>
                        <input className="input-container__inner__field" />
                    </div>
                    <input
                        className="white__order-now__button calculate-btn"
                        type="submit"
                        value="Calculate"
                    />
                </form>
            </div>
            <div id="calculator-container__output">
                <h1 id="output-title">
                    Benefits of switching to an electric car
                </h1>
                <div id="calculator-container__output__inner">
                    <div className="calculator-container__column">
                        <div className="vehicle-type__result">
                            <h2 className="vehicle-type__name">Gas Car</h2>
                        </div>
                        <h3>Fueling Cost</h3>
                        <p>$232.00</p>
                    </div>
                    <div className="calculator-container__column">
                        <div className="vehicle-type__result">
                            <h2 className="vehicle-type__name">Electric Car</h2>
                        </div>
                        <h3>Fueling Cost</h3>
                        <p>$232.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
