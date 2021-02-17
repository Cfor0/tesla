import React from "react";
import "./Home.css";
import Navigation from "../../components/Navigation/Navigation.js";

function Home() {
  return (
    <>
      <Navigation />
      <div className="App">
        <section className="home-container">
          <div className="home-container">{/* <h1>tesla</h1> */}</div>
        </section>
        <section className="home-container2">
          <h1>Section Two</h1>
        </section>
        <section className="home-container3">
          <h1>Section Three</h1>
        </section>
      </div>
    </>
  );
}

export default Home;
