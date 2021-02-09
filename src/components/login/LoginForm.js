import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import FBlogo from '../../images/fb-logo.png';

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
    // state = {
    //     email: '',
    //     password: '',
    //     emailError: '',
    //     passwordEmail: ''
    // }
    handleEmailChange = e => {
        this.setState({
            email: e.target.value
        })
        console.log(this.state.email);
    }
    handlePasswordChange = e => {
        this.setState({
            password: e.target.value
        })
        console.log(this.state.password);
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

    onSubmit = e => {
        e.preventDefault();
        const err = this.validate();
        if(!err){
            this.setState(iniState);
        }
    }

    // Checkbox
    handlerCheckBox = e => {
        this.setState({
            checked: e.target.checked
        })
    }

    render() {
        return (
            <FormContainer>
                <div className="form-container">
                    <form>
                        <h1>Sign In</h1>
                        <div className="input-container">
                            <input
                                className={this.state.passwordError ? 'input-error input-empty': 'input-empty'}
                                type="email"
                                required
                                onChange={this.handleEmailChange}
                                value={this.state.email}
                            />
                            <label>Email or Phone Number</label>
                            <span style={{color: '#db7302'}}>{this.state.emailError}</span>
                        </div>
                        <div
                            className="input-container">
                            <input
                                className={this.state.emailError ? 'input-error input-empty': 'input-empty'}
                                type="password"
                                required
                                onChange={this.handlePasswordChange}
                                value={this.state.password}
                            />
                            <label>Password</label>
                            <span style={{color: '#db7302'}}>{this.state.passwordError}</span>
                        </div>
                        <div className="input-container">
                            <Button type="submit" onClick={this.onSubmit}>Sign In</Button>
                        </div>
                        <label className="checkbox-container">
                            Remember me
                            <input type="checkbox" defaultChecked={this.state.checked} onChange={this.handlerCheckBox} />
                            <span className="checkmark"></span>
                        </label>
                        <Link to="/" className="need-help">Need help?</Link>
                        <div className="bottom-form">
                            <img src={FBlogo} alt="fb"/>
                            <Link to="/" className="login-fb-next">
                                Login with facebook
                            </Link>
                            <br/>
                            <br/>
                            <span style={{color:"#999"}}>New to Netflix?</span>
                            <Link to="/" className="sign-up-text">&nbsp;
                                Sign up now
                            </Link>
                        </div>
                    </form>
                </div>
            </FormContainer>
        )
    }
}
export default LoginForm;

const FormContainer = styled.div `
    display: grid;
    justify-content: center;
    position: relative;
    z-index: 5;

    .form-container {
        background: rgba(0,0,0,0.5);
        position: relative;
        width: 28.125rem;
        height: 41.25rem;
        padding: 4rem;
    }

    .input-container {
        display: grid;
        grid-template-columns: 1fr;
        margin-top: 1.2rem;
        position: relative;
    }

    .input-empty {
        color: #fff;
        background: #333;
        border: 0;
        border-radius: 0.25rem;
        height: 3rem;
        padding: .9rem 1.25rem 0;
        outline: none;
    }

    form div label {
        position: absolute;
        top: 0.625rem;
        left: 1.25rem;
        pointer-events: none;
        color: #8a8a8a;
        font-size: 1rem;
        transition: transform 150ms ease-out, font-size 150ms ease-out;
    }
    input:focus ~ label {
        top: .325rem;
        font-size: .7rem;
    }

    .input-error {
        border-bottom: 1px solid #db7302;
    }

    // checkbox

    .checkbox-container {
        color: #828282;
        margin-left: 0.75rem;
        padding-left: 1.825rem;
        position: relative;
        font-size: .9rem;
        cursor: pointer;
    }

    .checkbox-container input {
        display: none;
    }

    .checkbox-container .checkmark {
        display: inline-block;
        background: #454545;
        width: 1.1rem;
        height: 1.1rem;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 0.1rem;
    }
    .checkbox-container input:checked + .checkmark::after {
        content: '';
        position: absolute;
        height: .25rem;
        width:  .625rem;
        border-left: 2px solid #000;
        border-bottom: 2px solid #000;
        top: 25%;
        left: 21%;
        transform: rotate(-45deg);
    }

    .need-help {
        text-decoration: none;
        color: #828282;
        margin-left: 6.6rem;
        font-size: .9rem;
    }

    // bottom-form

    .bottom-form {
        position: absolute;
        bottom: 0;
        margin-bottom: 4rem;
    }


    .bottom-form img{
        width: 1.5625rem;
        margin: 0.625rem 0.625rem -0.4375rem 0;
    }
    .login-fb-next {
        color: #828282;
        font-size: 0.9rem;
    }
    .sign-up-text {
        font-size: 1.1rem;
        color: #fff;
        &:hover {
            text-decoration: underline;
        }
    }
`;

const Button = styled.button `
    color: #fff;
    background: var(--main-red);
    border: 0;
    padding: 1rem;
    cursor: pointer;
    font-size: 1rem;
    margin: 1rem 0;
    &:hover {
        background: var(--main-red-hover);
    }
`;