import React from "react";
import ScrollArrow from "../../components/ScrollArrow/ScrollArrow";

import "./CarModel.css";

const CarModel = (props) => {
    return (
        <div style={{ overflowX: "hidden" }}>
            <div id="car-banner">
                <header id="car-banner__header">
                    <h1 id="car-banner__header__title">Model S</h1>
                </header>
                <div id="car-banner__header__bottom">
                    <div className="car-banner__header__bottom__column">
                        <h2 className="header__column__title">3.1 s</h2>
                        <span className="header__column__body">
                            From 0-60 mph
                        </span>
                    </div>
                    <div className="car-banner__header__bottom__column">
                        <h2 className="header__column__title">353 mi</h2>
                        <span className="header__column__body">
                            Range (EPA est.)
                        </span>
                    </div>
                    <div className="car-banner__header__bottom__column">
                        <h2 className="header__column__title">AWD</h2>
                        <span className="header__column__body">Dual Motor</span>
                    </div>
                    <div className="car-banner__header__bottom__column">
                        <button className="clear__order-now__button">
                            Order Now
                        </button>
                    </div>
                </div>
                <ScrollArrow />
            </div>
            <div className="car-safety">
                <div className="car-safety__container__text">
                    <h4 className="car-safety__container__text__sub">Safety</h4>
                    <h3 className="car-safety__container__text__title">
                        Designed for Safety
                    </h3>
                    <p className="car-safety__container__text__body">
                        Safety is the most important part of the overall Model 3
                        design. The metal structure is a combination of aluminum
                        and steel, for maximum strength in every area. In a
                        roof-crush test, Model 3 resisted four times its own
                        mass, even with an all-glass roof: that's the same
                        weight as two full-grown African elephants.
                    </p>
                    <button className="white__order-now__button">
                        Order Now
                    </button>
                </div>
                <div className="car-safety__container__image"></div>
                <div className="car-banner__header__title"></div>
            </div>
            <div className="performance">
                <div className="performance-banner">
                    <div className="car-banner__header__bottom__start">
                        <div className="car-banner__header__bottom__column__start">
                            <h2 className="header__column__title">3.1 s</h2>
                            <span className="header__column__body__start">
                                Quickest acceleration—from zero to 60 mph in as
                                little as 3.1 seconds
                            </span>
                        </div>
                        <div className="car-banner__header__bottom__column__start">
                            <h2 className="header__column__title">162 mph</h2>
                            <span className="header__column__body__start">
                                Improved handling and aerodynamics allow for a
                                top speed of 162 mph
                            </span>
                        </div>
                        <div className="car-banner__header__bottom__column__start">
                            <h2 className="header__column__title">AWD</h2>
                            <span className="header__column__body__start">
                                Dual Motor All-Wheel Drive instantly controls
                                traction and torque, in all weather conditions
                            </span>
                        </div>
                    </div>
                </div>
                <div className="performance-footer">
                    <div className="performance-footer__container__title">
                        <div>
                            <h3 className="car-safety__container__text__sub">
                                Performance
                            </h3>
                            <h4 className="car-safety__container__text__title">
                                Quickest Acceleration
                            </h4>
                            <button className="white__order-now__button__rel">
                                Order Now
                            </button>
                        </div>
                    </div>

                    <div className="performance-text">
                        <p>
                            Model 3 comes with the option of dual motor
                            all-wheel drive, 20” Überturbine Wheels and
                            Performance Brakes and lowered suspension for total
                            control, in all weather conditions. And a carbon
                            fiber spoiler improves stability at high speeds, all
                            allowing Model 3 to accelerate from 0-60 mph in as
                            little as 3.1 seconds.
                        </p>
                    </div>
                </div>
            </div>
            <div className="performance">
                <div className="performance-banner-two">
                    <div className="car-banner__header__bottom__start">
                        <div className="car-banner__header__bottom__column__start">
                            <h2 className="header__column__title">2</h2>
                            <span className="header__column__body__start">
                                Independent motors digitally control torque to
                                the front and rear wheels
                            </span>
                        </div>
                        <div className="car-banner__header__bottom__column__start">
                            <h2 className="header__column__title">10 ms</h2>
                            <span className="header__column__body__start">
                                Dual motors respond to changing conditions in as
                                little as 10 milliseconds
                            </span>
                        </div>
                        <div className="car-banner__header__bottom__column__start">
                            <h2 className="header__column__title">
                                Cloud Icon
                            </h2>
                            <span className="header__column__body__start">
                                Unparalleled traction and control, in all
                                weather conditions
                            </span>
                        </div>
                    </div>
                </div>
                <div className="performance-footer">
                    <div className="performance-footer__container__title">
                        <div>
                            <h3 className="car-safety__container__text__sub">
                                All-Wheel Drive
                            </h3>
                            <h4 className="car-safety__container__text__title">
                                Dual Motor
                            </h4>
                            <button className="white__order-now__button__rel">
                                Order Now
                            </button>
                        </div>
                    </div>

                    <div className="performance-text">
                        <p>
                            Tesla All-Wheel Drive has two independent motors for
                            improved redundancy, each with only one moving part
                            for minimal maintenance and maximum durability.
                            Unlike traditional all-wheel drive systems, they
                            digitally control torque to the front and rear
                            wheels for far better handling and traction control.
                        </p>
                    </div>
                </div>
            </div>
            <div className="car-safety-reverse">
                <div className="car-safety__container__image-reverse">
                    <div className="car-banner__header__bottom__start">
                        <div className="car-banner__header__bottom__column__start">
                            <h2 className="header__column__title">353 mi</h2>
                            <span className="header__column__body__start">
                                Go anywhere with up to 353 mi of estimated range
                                on a single charge
                            </span>
                        </div>
                        <div className="car-banner__header__bottom__column__start">
                            <h2 className="header__column__title">15 min</h2>
                            <span className="header__column__body__start">
                                Recharge up to 175 mi in 15 minutes at
                                Supercharger locations
                            </span>
                        </div>
                        <div className="car-banner__header__bottom__column__start">
                            <h2 className="header__column__title">20,000+</h2>
                            <span className="header__column__body__start">
                                Superchargers placed along well-traveled routes
                                around the worl
                            </span>
                        </div>
                    </div>
                </div>
                <div className="car-safety__container__text">
                    <h4 className="car-safety__container__text__sub">Safety</h4>
                    <h3 className="car-safety__container__text__title">
                        Go Anywhere
                    </h3>
                    <p className="car-safety__container__text__body">
                        Model 3 is fully electric, so you never need to visit a
                        gas station again. If you charge overnight at home, you
                        can wake up to a full battery every morning. And when
                        you’re on the road, it’s easy to plug in along the
                        way—at any public station or with the Tesla charging
                        network. We currently have over 20,000 Superchargers
                        worldwide, with six new locations opening every week.
                    </p>
                    <img
                        className="car-safety__container__text__image"
                        alt="map"
                        src="https://tesla-cdn.thron.com/delivery/public/image/tesla/31a606f1-7ae2-456e-8588-f5a779759336/bvlatuR/std/0x0/model-3-range-map"
                    />
                    <button className="white__order-now__button__reverse">
                        Order Now
                    </button>
                </div>
            </div>
            <div className="performance">
                <div className="performance-banner-three">
                    <div className="car-banner__header__bottom__side">
                        <div className="car-banner__header__bottom__column__start__side">
                            <h2 className="header__column__title">15 inch</h2>
                            <span className="header__column__body__start">
                                A touchscreen display designed to improve over
                                time
                            </span>
                        </div>
                        <div className="car-banner__header__bottom__column__startt__side">
                            <h2 className="header__column__title">Software</h2>
                            <span className="header__column__body__start">
                                Over-the-air software updates introduce new
                                features, functionality and performance
                            </span>
                        </div>
                        <div className="car-banner__header__bottom__column__startt__side">
                            <h2 className="header__column__title">UV</h2>
                            <span className="header__column__body__start">
                                An expansive Glass Roof provides more headroom
                                and UV protection
                            </span>
                        </div>
                    </div>
                </div>
                <div className="performance-footer">
                    <div className="performance-footer__container__title">
                        <div>
                            <h3 className="car-safety__container__text__sub">
                                Interior
                            </h3>
                            <h4 className="car-safety__container__text__title">
                                Built Around the Driver
                            </h4>
                            <button className="white__order-now__button__rel">
                                Order Now
                            </button>
                        </div>
                    </div>

                    <div className="performance-text">
                        <p>
                            The inside of Model 3 is unlike any other car. You
                            can use your smartphone as a key, and access all
                            driver controls in the central 15-inch touchscreen.
                            The all-glass roof extends from front to back,
                            creating a sense of openness from every seat.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarModel;
