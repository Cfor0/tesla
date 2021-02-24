import React, { Component } from 'react';
import Axios from 'axios';
import './Registration.css'

class CreateAccount extends Component {
    // constructor(props) {
    //     super(props);
    // }
        state = {
            firstName:"",
            lastName:"",
            email: "",
            password: ""
        }

        handleFirstName=(event)=>{
            this.setState({firstName: event.target.value});
        }

        handleLastName=(event)=>{
            this.setState({lastName: event.target.value});
        }

        handleEmail=(event)=>{
            this.setState({email: event.target.value});
        }
        handlePassword=(event)=>{
            this.setState({password: event.target.value});
        }

        createAccount =(event) => {
            event.preventDefault();
      

            let user = {
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                email:this.state.email,
                password:this.state.password
            }

            Axios.post("http://localhost:4000/createAccount", user)
            .then(res => {
                console.log(res);
                console.log(res.data)
                console.log(user)
            })
        }
    

    

    

        
        render() {
            return (
                <div className="CreateAccount" ref={this.props.containerRef}>
                    <h1 className="contactHead">Create Account</h1>
                    <form >
                        <label htmlFor="firstnName">First Name</label>
                        <input type="text" name="firstName"  onChange={this.handleFirstName}/>
                            <br />
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName"  onChange={this.handleLastName}/>
                            <br />
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email"  onChange={this.handleEmail}/>
                        <br />
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password"  onChange={this.handlePassword}/>
                        <br />
                        <button type="button" className="btn" onClick={this.createAccount}>Create Account</button>
                        <br />

                        <div className="separator">OR</div>
                    </form>
                </div>
            )
        }
    
}

export default CreateAccount;