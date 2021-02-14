import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Button } from '../Button';
import { auth, signInWithGoogle } from '../firebase/firebase';
import Header from '../Header';
import FormContainer from "./loginFormStyle";

const iniState = {
    checked: true,
    email: '',
    password: '',
    emailError: '',
    passwordEmail: ''
}

const regexp = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

class LoginForm extends Component {

    state = iniState;

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    // validate
    validate = ()=> {

        let inputError = false;
        const errors = {
            emailError: '',
            passwordError: ''
        }

        if(!this.state.email){
            inputError = true;
            errors.emailError = 'Please enter a valid email';
        }else if (!this.state.email.match(regexp)){
            inputError = true;
            errors.emailError = (
                <span style={{color:'red'}}>Your email must be valid</span>
            )
        }

        // password validation

        if(this.state.password.length < 4){
            inputError = true;
            errors.passwordError = 'Password should be more that 4 characters';
        }
        this.setState({
            ...errors
        })
        return inputError;
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});

             setTimeout(() => {
                window.location.href="/";   
            }, 1000);
        }catch(error){
            alert('please check email or password')
            console.error(error)
        }
    }

    // Checkbox
    handlerCheckBox = e => {
        this.setState({
            checked: e.target.checked
        })
    }

    render() {

        const {email, password} = this.state;
        return (
            <div>

                {/* <Header/> */}
            <FormContainer>
                <div className="form-container">
                    <form onSubmit={this.handleSubmit}>
                        <h1>Sign In</h1>
                        <div className="input-container">
                            <input
                                className={this.state.passwordError ? 'input-error input-empty': 'input-empty'}
                                type="email"
                                value={email}
                                name="email"
                                
                                onChange={this.handleChange}
                            />
                            <label>Email</label>
                            <span style={{color: '#db7302'}}>{this.state.emailError}</span>
                        </div>
                        <div
                            className="input-container">
                            <input
                                className={this.state.emailError ? 'input-error input-empty': 'input-empty'}
                                type="password"
                                value={password}
                                name="password"
                                
                                onChange={this.handleChange}
                                />
                            <label>Password</label>
                            <span style={{color: '#db7302'}}>{this.state.passwordError}</span>
                        </div>
                        <div className="input-container">
                            <Button type="submit" onClick={this.handleSubmit}>Sign In</Button>
                        </div>
                        <label className="checkbox-container">
                            Remember me
                            <input type="checkbox" defaultChecked={this.state.checked} onChange={this.handlerCheckBox} />
                            <span className="checkmark"></span>
                        </label>
                        <Link to="/" className="need-help">Need help?</Link>
                        <div  className="input-container">
                            <Button style={{background: 'blue', marginTop: '-.7rem'}} type="submit" onClick={signInWithGoogle}>Sign In with Google</Button>
                        </div>
                        <div className="bottom-form">
                            <br/>
                            <br/>
                            <span style={{color:"#999"}}>New to Netflix?</span>
                            <Link to="/signup" className="sign-up-text">&nbsp;
                                Sign up now
                            </Link>
                        </div>
                    </form>
                </div>
            </FormContainer>
            </div>
        )
    }
}
export default LoginForm;
