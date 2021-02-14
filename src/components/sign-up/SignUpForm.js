import React, { Component } from 'react';
import { Button } from '../Button';
import './sign-up-form-style.js';
import FormContainer from "./sign-up-form-style";

class SignUpForm extends Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = e => {
        const {name, value} = e.target;

        this.setState({[name]: value})
        console.log(this.state);
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <FormContainer className="sign-up main-login-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-container">
                    <h1>Sign Up</h1>
                        <div className="input-container">
                            <input
                                className='input-empty'
                                type="text"
                                name="displayName"
                                value={displayName}
                                required
                                onChange={this.handleChange}
                            />
                            <label>Name</label>
                        </div>
                        <div className="input-container">
                            <input
                                className='input-empty'
                                type="email"
                                name="email"
                                value={email}
                                required
                                onChange={this.handleChange}
                        />
                            <label>Email</label>
                        </div>
                        <div className="input-container">
                            <input
                                className='input-empty'
                                type="password"
                                name="password"
                                value={password}
                                required
                                onChange={this.handleChange}
                        />
                            <label>Password</label>
                        </div>
                        <div
                            className="input-container">
                            <input
                                className='input-empty'
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                required
                                onChange={this.handleChange}
                        />
                            <label>confirm password</label>
                        </div>
                        <div className="input-container">
                            <Button type="submit" onClick={this.onSubmit}>Sign Up</Button>
                        </div>
                    </div>
                    </form>
            </FormContainer>
        )
    }
}
export default SignUpForm;