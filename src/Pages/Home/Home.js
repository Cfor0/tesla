import React, { useEffect } from "react";
import "./Home.css";
import Navigation from "../../components/Navigation/Navigation.js";
import Title from "../../components/Title/Title";
import ScrollArrow from "../../components/ScrollArrow/ScrollArrow";
import Footer from "../../components/Footer/Footer";

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="App">
                <section className="home-container home-image">
                    <Title
                        title="Model S"
                        caption="Order Online for Touchless Delivery"
                    />
                    <ScrollArrow />
                </section>
                <section className="home-container2 home-image">
                    <Title
                        title="Model Y"
                        caption="Order Online for Touchless Delivery"
                    />
                </section>
                <section className="home-container3 home-image">
                    <div className="last-container">
                        <Title
                            title="Model 3"
                            caption="Order Online for Touchless Delivery"
                        />
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
}

export default Home;
