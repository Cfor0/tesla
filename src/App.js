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
import Footer from "./components/Footer/Footer";

import React, { useState } from "react";

function App() {
    // Checks local storage value to determine if user is logged in
    let loggedIn = sessionStorage.getItem("loggedIn");

    const [toggled, setToggled] = useState(false);

    const changeToggleValue = () => {
        setToggled(!toggled);
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <div
                className={`header-responsive__overlay ${
                    toggled ? "open" : "close"
                }`}
            >
                <p onClick={changeToggleValue}>
                    <Link to="/model/models" onClick={scrollToTop}>
                        Model S
                    </Link>
                </p>

                <p onClick={changeToggleValue}>
                    <Link to="/model/model3" onClick={scrollToTop}>
                        Model 3
                    </Link>
                </p>
                <p onClick={changeToggleValue}>
                    <Link to="/model/modelx" onClick={scrollToTop}>
                        Model X
                    </Link>
                </p>
                <p onClick={changeToggleValue}>
                    <Link to="/model/modely" onClick={scrollToTop}>
                        Model Y
                    </Link>
                </p>
                <p onClick={changeToggleValue}>
                    <Link to="/calculator" onClick={scrollToTop}>
                        EV Calculator
                    </Link>
                </p>
                <p onClick={changeToggleValue}>
                    <Link to="/login" onClick={scrollToTop}>
                        Tesla Account
                    </Link>
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
                    <Route
                        exact
                        path="/model/:type"
                        render={(props) => (
                            <CarModel path={props.match.params.type} />
                        )}
                    />
                    <Route exact path="/calculator" component={Calculator} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default App;
