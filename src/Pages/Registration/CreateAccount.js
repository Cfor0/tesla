import React, { Component } from 'react';
import './Registration.css'

class CreateAccount extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="CreateAccount
            " ref={this.props.containerRef}>
                <h1 className="contactHead">Create Account</h1>
                <form>
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" name="firstname"/>
                        <br />
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" name="lastname" />
                        <br />
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" />
                    <br />
                    <button type="button" className="btn">Create Account</button>
                    <br />

                    <div className="separator">OR</div>
            </form>
            </div>
        )
    }
}

export default CreateAccount;