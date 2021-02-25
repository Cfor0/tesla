import React from "react";
import "./LoggedIn.css";

function clickMe() {
    alert("You clicked me!");
}

const LoggedIn = () => {
    return (
        <div className="main-container">
            <div className="mc-login">
                <div className="logged-in__second-container">
                    <h1 className="logged-in__h1">You Just Landed!</h1>

                    <button className="button-one" onClick={clickMe}>
                        Sign Off
                    </button>
                    <button className="button-two" onClick={clickMe}>
                        Take A Look
                    </button>
                </div>
                <div className="loggedin-img"></div>
            </div>
        </div>
    );
};

export default LoggedIn;
