import React, { Component } from "react";
import "./Calculator.css";

class Calculator extends Component {
    state = {
        carType: "sedan",
        gasPrice: "",
        travelTime: "",
        gasTotal: "",
        EVTotal: "",
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    // Submit Handler
    calculateHandler = (e) => {
        e.preventDefault();
        console.log("SUBMITTED");

        if (this.state.carType === "sedan") {
            this.setState({
                gasTotal: this.calculateGasCost(this.state.gasPrice, 27),
                EVTotal: this.calculateEVCost(0.14, 130),
            });
        } else if (this.state.carType === "suv") {
            console.log(this.state.carType);
            this.setState({
                gasTotal: this.calculateGasCost(this.state.gasPrice, 22),
                EVTotal: this.calculateEVCost(0.14, 87),
            });
        } else if (this.state.carType === "truck") {
            console.log(this.state.carType);
            this.setState({
                gasTotal: this.calculateGasCost(this.state.gasPrice, 18),
                EVTotal: this.calculateEVCost(0.14, 16),
            });
        } else {
            console.log(this.state.carType);
            this.setState({
                gasTotal: this.calculateGasCost(this.state.gasPrice, 24),
                EVTotal: this.calculateEVCost(0.14, 135),
            });
        }
    };

    convertTimeToMiles = (travelTime) => travelTime * 1.25;

    calculateGasCost = (gasPrice, mpg) => {
        // Calculates amount of miles used
        let milesUsed =
            Number(this.convertTimeToMiles(this.state.travelTime)) /
            Number(mpg);

        // Calculates cost for miles each trip
        let costPerTrip = milesUsed * gasPrice;

        // Calculates cost for miles on average each year(Taking into account travelling there and travelling back)
        let costPerYear = costPerTrip * 2 * 260;

        return costPerYear;
    };

    calculateEVCost = (kwPrice, mpg) => {
        // Calculates amount of miles used
        let milesUsed =
            Number(this.convertTimeToMiles(this.state.travelTime)) /
            Number(mpg);

        // Calculates cost for miles each trip
        let costPerTrip = milesUsed * kwPrice;

        // Calculates cost for miles on average each year(Taking into account travelling there and travelling back)
        let costPerYear = costPerTrip * 2 * 260;

        return costPerYear;
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
                    <form
                        id="vehicle-type-input-container__outer"
                        onSubmit={this.calculateHandler}
                    >
                        <div className="vehicle-type-input-container__inner">
                            <label className="input-container__inner__label">
                                Local Gas Price (USD)
                            </label>
                            <input
                                className="input-container__inner__field"
                                name="gasPrice"
                                type="text"
                                value={this.state.gasPrice}
                                onChange={this.onChangeHandler}
                                placeholder="0.00"
                            />
                        </div>
                        <div className="vehicle-type-input-container__inner">
                            <label className="input-container__inner__label">
                                Daily Commute Time (Min)
                            </label>
                            <input
                                className="input-container__inner__field"
                                name="travelTime"
                                type="text"
                                value={this.state.travelTime}
                                onChange={this.onChangeHandler}
                                placeholder="20"
                            />
                        </div>
                        <input
                            className="clear__order-now__button calculate-btn"
                            type="submit"
                            value="Calculate"
                        />
                    </form>
                </div>
                <div id="calculator-container__output">
                    {this.state.gasTotal !== "" && (
                        <>
                            <h1
                                id="output-title"
                                style={{
                                    fontSize: "2rem",
                                    color: "black",
                                    marginBottom: "3rem",
                                }}
                            >
                                Benefits of switching to an electric car
                            </h1>
                            <div id="calculator-container__output__inner">
                                <div className="calculator-container__column">
                                    <div className="vehicle-type__result">
                                        <h2 className="vehicle-type__name">
                                            Gas Car
                                        </h2>
                                    </div>
                                    <h3>Fueling Cost Per Year</h3>
                                    <p>${this.state.gasTotal.toFixed(2)}</p>
                                </div>
                                <div className="calculator-container__column">
                                    <div className="vehicle-type__result">
                                        <h2 className="vehicle-type__name">
                                            Electric Car
                                        </h2>
                                    </div>
                                    <h3>Fueling Cost Per Year</h3>
                                    <p>${this.state.EVTotal.toFixed(2)}</p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        );
    }
}

export default Calculator;
