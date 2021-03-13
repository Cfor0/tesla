import "./App.css";

// Pages
import Home from "./Pages/Home/Home";
import CarModel from "./Pages/CarModel/CarModel";
import Registration from "./Pages/Registration/Registration";
import Calculator from "./Pages/Calculator/Calculator";
import Contact from "./Pages/Contact/Contact";
import LoggedIn from "./Pages/LoggedIn/LoggedIn";

import { Route, Switch, Link } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

import React, { useState } from "react";

function App() {
    // Checks local storage value to determine if user is logged in
    let loggedIn = sessionStorage.getItem("loggedIn");

    const [toggled, setToggled] = useState(false);

    const changeToggleValue = () => {
        setToggled(!toggled);
    };

    return (
        <>
            <div
                className={`header-responsive__overlay ${
                    toggled ? "open" : "close"
                }`}
            >
                <p onClick={changeToggleValue}>
                    <Link to="/models">Model S</Link>
                </p>

                <p onClick={changeToggleValue}>
                    <Link to="/models">Model 3</Link>
                </p>
                <p onClick={changeToggleValue}>
                    <Link to="/models">Model X</Link>
                </p>
                <p onClick={changeToggleValue}>
                    <Link to="/models">Model Y</Link>
                </p>
                <p onClick={changeToggleValue}>
                    <Link to="/calculator">EV Calculator</Link>
                </p>
                <p onClick={changeToggleValue}>
                    <Link to="/login">Tesla Account</Link>
                </p>
            </div>
            <div>
                <Navigation toggleValue={toggled} setToggle={setToggled} />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Registration} />
                    {loggedIn !== null && (
                        <Route exact path="/logged-in" component={LoggedIn} />
                    )}
                    <Route exact path="/models" component={CarModel} />
                    <Route exact path="/calculator" component={Calculator} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </div>
        </>
    );
}

export default App;
