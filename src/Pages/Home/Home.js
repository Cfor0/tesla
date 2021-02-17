import React from "react";
import "./Home.css";
import Navigation from "../../components/Navigation/Navigation.js";
import Title from "../../components/Title/Title";
import ScrollArrow from "../../components/ScrollArrow/ScrollArrow";

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
            <ScrollArrow />
        </section>
        <section className="home-container2">
        <Title
              title = 'Model Y'
              caption = 'Order Online for Touchless Delivery'              
            />
        </section>
        <section className="home-container3">
        <Title
              title = 'Model 3' 
              caption = 'Order Online for Touchless Delivery'             
            />
        </section>
      </div>
    </>
  );
}

export default Home;
