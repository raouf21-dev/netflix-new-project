import React from 'react'
import { Link } from 'react-router-dom';
import SignUpForm from '../components/sign-up/SignUpForm';
import LoginFooter from "../components/login/LoginFooter";
import styled from 'styled-components';
import logo  from "../svg/logo.svg";

const  SignUp = () => {
    return (
        <div className="sign-up-container">

            <SignUpForm/>
            <LoginFooter/>
        </div>
    )
}
export default SignUp;
