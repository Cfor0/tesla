import React, { Component } from "react";
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import "./Registration.css";

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogginActive: true,
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    changeState() {
        const isLogginActive = this.state;
        if (isLogginActive) {
            this.buttonChange.classList.remove();
        }
        this.setState((prevState) => ({
            isLogginActive: !prevState.isLogginActive,
        }));
    }

    changeLoginState = (state) => {
        this.setState({
            isLogginActive: !state,
        });
    };

    render() {
        const { isLogginActive } = this.state;
        const current = isLogginActive ? "CREATE ACCOUNT" : "SIGN IN";
        const currentActive = isLogginActive ? "SIGN IN" : "CREATE ACCOUNT";
        return (
            <div className="Registration">
                <div
                    className="container"
                    ref={(ref) => (this.container = ref)}
                >
                    {isLogginActive && (
                        <Login
                            loginState={isLogginActive}
                            containerRef={(ref) => (this.current = ref)}
                        />
                    )}
                    {!isLogginActive && (
                        <CreateAccount
                            changeState={this.changeLoginState}
                            loginState={this.isLogginActive}
                            containerRef={(ref) => (this.current = ref)}
                        />
                    )}
                </div>
                <ButtonChange
                    current={current}
                    currentActive={currentActive}
                    containerRef={(ref) => (this.buttonChange = ref)}
                    onClick={this.changeState.bind(this)}
                />
            </div>
        );
    }
}

const ButtonChange = (props) => {
    return (
        <button
            className="buttonchange"
            ref={props.containerRef}
            onClick={props.onClick}
        >
            <div className="text">{props.current}</div>
        </button>
    );
};

export default Registration;
