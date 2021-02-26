import React, { useEffect } from "react";
import "./LoggedIn.css";

const LoggedIn = (props) => {
    const signOut = () => {
        sessionStorage.removeItem("loggedIn");
        props.history.push("/login");
    };

    const takeALookHandler = () => {
        props.history.push("/models");
    };
    return (
        <div className="main-container">
            <div className="mc-login">
                <div className="logged-in__second-container">
                    <h1 className="logged-in__h1">You Just Landed!</h1>

                    <button className="button-one" onClick={signOut}>
                        Sign Off
                    </button>
                    <button className="button-two" onClick={takeALookHandler}>
                        Take A Look
                    </button>
                </div>
                <div className="loggedin-img"></div>
            </div>
        </div>
    );
};

export default LoggedIn;
