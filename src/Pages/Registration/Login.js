import React, { Component } from 'react';
import './Registration.css'

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="login
            " ref={this.props.containerRef}>
                <form>
                <h1 className="contactHead">Sign In</h1>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" />
                    <br />
                    <button type="button" className="btn">SIGN IN</button>

                    <div className="separator">OR</div>
            </form>
            </div>
        )
    }
}

export default Login;