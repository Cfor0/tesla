import React from "react";
import "./Home.css";
import Navigation from "../../components/Navigation/Navigation.js";
import Title from "../../components/Title/Title";

function Home(props) {
  return (
    <>
      {/* <Navigation /> */}
      <div className="App">
        <section className="home-container">
            <Title
              title = 'Model S'
              caption = 'Order Online for Touchless Delivery'            
            />
        </section>
        <section className="home-container2">
        <Title
              title = 'Model Y'            
            />
        </section>
        <section className="home-container3">
        <Title
              title = 'Model 3'            
            />
        </section>
      </div>
    </>
  );
}

export default Home;
