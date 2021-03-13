import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";
import "./Registration.css";

class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: {},
            errors: {},
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleCreateAccount = this.handleCreateAccount.bind(this);
    }

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;

        this.setState({
            input,
        });
    }

    handleCreateAccount = (event) => {
        event.preventDefault();

        if (this.validate()) {
            let input = {};
            input["firstName"] = this.state.input.firstName;
            input["lastName"] = this.state.input.lastName;
            input["email"] = this.state.input.email;
            input["password"] = this.state.input.password;
            this.setState({ input: input });

            Axios.post("http://localhost:4000/createAccount", input).then(
                (res) => {
                    console.log(res);
                    console.log(res.data);
                    this.props.history.push("/login");
                    console.log("Should move to next page");
                }
            );
        }
    };

    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["firstName"]) {
            isValid = false;
            errors["firstName"] = "Please enter your name.";
        }

        if (!input["lastName"]) {
            isValid = false;
            errors["lastName"] = "Please enter your last name.";
        }

        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email.";
        }

        if (!input["password"]) {
            isValid = false;
            errors["password"] = "Please enter your correct password.";
        }

        this.setState({
            errors: errors,
        });

        return isValid;
    }

    render() {
        return (
            <div className="CreateAccount" ref={this.props.containerRef}>
                <h1 className="contactHead">Create Account</h1>
                <form>
                    <div>
                        <label htmlFor="firstnName">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={this.state.input.firstName}
                            onChange={this.handleChange}
                        />
                        <br />
                        <span style={{ color: "red" }}>
                            {this.state.errors.firstName}
                        </span>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={this.state.input.lastName}
                            onChange={this.handleChange}
                        />
                        <br />
                        <span style={{ color: "red" }}>
                            {this.state.errors.lastName}
                        </span>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            value={this.state.input.email}
                            onChange={this.handleChange}
                        />
                        <br />
                        <span style={{ color: "red" }}>
                            {this.state.errors.email}
                        </span>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="text"
                            name="password"
                            value={this.state.input.password}
                            onChange={this.handleChange}
                        />
                        <br />
                        <span style={{ color: "red" }}>
                            {this.state.errors.password}
                        </span>
                    </div>
                    <br />
                    <button
                        type="button"
                        className="btn"
                        onClick={this.handleCreateAccount}
                    >
                        Create Account
                    </button>
                    <br />
                    <div className="separator">OR</div>
                </form>
            </div>
        );
    }
}

export default withRouter(CreateAccount);
