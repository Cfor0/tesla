import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <section className="home-container">
        <Home></Home>
      </section>
      <section className="home-container2">
        <h1>Section Two</h1>
      </section>
      <section className="home-container3">
        <h1>Section Three</h1>
      </section>
    </div>
  );
}

export default App;
