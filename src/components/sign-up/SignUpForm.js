import React, { Component } from 'react';
import { Button } from '../Button';
import './sign-up-form-style.js';
import FormContainer from "./sign-up-form-style";
import { auth, createUserProfileDocument } from '../firebase/firebase';

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
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("passwords don't match")
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user,{displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

            setTimeout(() => {
                window.location.href="/";   
            }, 1000);
        }catch(error){
            console.error(error)
        }
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