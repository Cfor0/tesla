import "./App.css";

// Pages
import Home from "./Pages/Home/Home";
import CarModel from "./Pages/CarModel/CarModel";
import Registration from "./Pages/Registration/Registration";
import Calculator from "./Pages/Calculator/Calculator";
import Contact from "./Pages/Contact/Contact";
import LoggedIn from "./Pages/LoggedIn/LoggedIn";

import { Route, Switch } from "react-router-dom";

function App() {
    // Checks local storage value to determine if user is logged in
    let loggedIn = sessionStorage.getItem("loggedIn");
    console.log(loggedIn);

    return (
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
    );
}

export default App;
