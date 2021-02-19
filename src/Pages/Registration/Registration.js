import React, { Component } from 'react';
import './Registration.css'

// eslint-disable-next-line
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
};
const countErrors = (errors) => {
  let count = 0;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (count = count+1)
  );
  return count;
}

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
          formValid: false,
          errorCount: null,
          errors: {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
          }
        };
    
      };
    
      handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        let errors = this.state.errors;
    
        switch (name) {
          case 'firstname':
            errors.firstname = value.length < 1 ? 'Please include a firstname' : '';
            break;
          case 'lastname':
            errors.lastname = value.length < 1 ? 'Please include a lastname' : '';
            break;
          case 'email': 
            errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';  
            break;
          case 'password':
              errors.password = value.length < 8 ? '' : '';
            break;
          default:
            break;
        }
        this.setState({errors, [name]: value});
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        this.setState({formValid: validateForm(this.state.errors)});
        this.setState({errorCount: countErrors(this.state.errors)});
      }

    render() {
        const {errors, formValid} = this.state;
        return (
            <div className="Registration">
                <h1 className="contactHead">Create Account</h1>
                <form onSubmit={this.handleSubmit} noValidate>
                <label> Firstname </label>
                    <input required type="text" firstname='name' onChange={this.handleChange} noValidate />
                    {errors.firstname.length > 0 && <span className='error'>{errors.firstname}</span>}
                    <br />
                <label> Lastname </label>
                    <input required type="text" lastname='name' onChange={this.handleChange} noValidate />
                    {errors.lastname.length > 0 && <span className='error'>{errors.lastname}</span>}
                    <br />
                <label> Email </label>
                    <input required type="Email" name='email' onChange={this.handleChange} noValidate/>
                    {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
                <br />
                <label> Password </label>
                    <input type="textarea" name='password' onChange={this.handleChange} noValidate/>
                    {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
                <br />
                <input type="submit" value="CREATE ACCOUNT" />
                {this.state.errorCount !== null ? <p className="form-status"> {formValid ? 'Thank you' : 'Form invalid'}</p> : ''}
                <br />

                <div className="separator">OR</div>

                <button className="signin" onClick={this.props.displaySignInComponent}>SIGN IN</button>
            </form>
        </div>
        )
    }
}

export default Registration;