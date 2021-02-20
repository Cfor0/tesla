import "./App.css";

// Pages
import Home from "./Pages/Home/Home";
import CarModel from "./Pages/CarModel/CarModel";
import Registration from "./Pages/Registration/Registration";
import Store from "./Pages/Store/Store";
import { Route, Switch } from "react-router-dom";

function App() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/models" component={CarModel} />
            <Route exact path="/login" component={Registration} />
            <Route exact path="/store" component={Store} />
        </Switch>
    );
}

export default App;
