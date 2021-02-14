import React, { Component } from 'react';
import LoginForm from '../components/login/LoginForm';
import LoginFooter from "../components/login/LoginFooter";

class Login extends Component {
    render() {
        return (
            <div>
                <div className="main-login-container">
                    <LoginForm />
                </div>
                <LoginFooter/>
            </div>
        )
    }
}
export default Login;


