import React, { Component } from 'react';
import logo  from "../svg/logo.svg";
import styled  from "styled-components";
import LoginForm from '../components/login/LoginForm';
import LoginFooter from "../components/login/LoginFooter";
import {Link} from 'react-router-dom';
class Login extends Component {
    render() {
        return (
            <div>
                <LoginContainer className="main-login-container">
                    <div className="container">
                        <div className="header-top">
                            <Link to="/">
                                <img  src={logo} alt="logo" className="logo" />
                            </Link>
                
                        </div>
                        <LoginForm />
                    </div>
                </LoginContainer>
                <LoginFooter/>
            </div>
        )
    }
}
export default Login;


const LoginContainer = styled.div `
    .header-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
    }
    .logo {
        width:150px;
    }
    
`;
const ImgLink = styled.img `
    width:150px;
`;