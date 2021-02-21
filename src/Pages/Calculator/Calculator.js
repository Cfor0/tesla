import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./Calculator.css";

class Calculator extends Component {
    state = {
        carType: "sedan",
    };

    onChangeHandler = (e) => {
        this.setState(
            {
                carType: e.target.value,
            },
            () => {
                console.log(this.state.carType);
            }
        );
    };
    render() {
        return (
            <div id="calculator-container">
                <div id="calculator-container__input">
                    <h1 id="output-title">Choose Your Vehicle Type</h1>
                    <div id="vehicle-type-container">
                        <div className="input-radio__container">
                            <div className="input-radio">
                                <label className="text__wrapper">
                                    Sedan
                                    <input
                                        className="input"
                                        type="radio"
                                        name="carType"
                                        value="sedan"
                                        checked={this.state.carType === "sedan"}
                                        onChange={this.onChangeHandler}
                                    />
                                    <div className="radio-overlay"></div>
                                </label>
                            </div>
                            <div className="input-radio">
                                <label className="text__wrapper">
                                    SUV
                                    <input
                                        className="input"
                                        type="radio"
                                        name="carType"
                                        value="suv"
                                        checked={this.state.carType === "suv"}
                                        onChange={this.onChangeHandler}
                                    />
                                    <div className="radio-overlay"></div>
                                </label>
                            </div>
                            <div className="input-radio">
                                <label className="text__wrapper">
                                    Truck
                                    <input
                                        className="input"
                                        type="radio"
                                        name="carType"
                                        value="truck"
                                        checked={this.state.carType === "truck"}
                                        onChange={this.onChangeHandler}
                                    />
                                    <div className="radio-overlay"></div>
                                </label>
                            </div>
                            <div className="input-radio">
                                <label className="text__wrapper">
                                    Sports Car
                                    <input
                                        className="input"
                                        type="radio"
                                        name="carType"
                                        value="sport"
                                        checked={this.state.carType === "sport"}
                                        onChange={this.onChangeHandler}
                                    />
                                    <div className="radio-overlay"></div>
                                </label>
                            </div>
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
                            className="clear__order-now__button calculate-btn"
                            type="submit"
                            value="Calculate"
                        />
                    </form>
                </div>
                <div id="calculator-container__output">
                    <h1
                        id="output-title"
                        style={{ fontSize: "2rem", color: "black" }}
                    >
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
                                <h2 className="vehicle-type__name">
                                    Electric Car
                                </h2>
                            </div>
                            <h3>Fueling Cost</h3>
                            <p>$232.00</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;
