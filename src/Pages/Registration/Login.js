import React, { Component } from "react";
import "./Registration.css";
import Axios from "axios";
import { withRouter } from "react-router-dom";

class Login extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {
        email: "",
        password: "",
    };

    handleEmail = (event) => {
        this.setState({ email: event.target.value });
    };
    handlePassword = (event) => {
        this.setState({ password: event.target.value });
    };

    handleLogin = (event) => {
        event.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password,
        };

        Axios.get(
            `http://localhost:4000/createAccount/${user.email}/${user.password}`
        ).then((res) => {
            console.log(res);
            console.log(res.data);
            console.log(user);
            // On trigger of this method will set the loggedIn session to true
            sessionStorage.setItem("loggedIn", true);
            this.props.history.push("/logged-in");
            window.location.reload(false);
        });
    };

    render() {
        return (
            <div className="login" ref={this.props.containerRef}>
                <form>
                    <h1 className="contactHead">Sign In</h1>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        onChange={this.handleEmail}
                    />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        name="password"
                        onChange={this.handlePassword}
                    />
                    <br />
                    {/* <Link to="/logged-in"> */}
                    <button
                        type="button"
                        className="btn"
                        onClick={this.handleLogin}
                    >
                        SIGN IN
                    </button>
                    {/* </Link> */}

                    <div className="separator">OR</div>
                </form>
            </div>
        );
    }
}

export default withRouter(Login);
