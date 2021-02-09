import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from "react-router-dom";
import logo from '../svg/logo.svg';
function ChoosePlan() {
    return (
        <MainContainer>
            <div className="header-top">
                <Link to="/">
                    <img src={logo} alt="logo"/>
                </Link>
                <NavLink to="/login" className="btn singIn-btn">
                    Sign In
                </NavLink>
            </div>
        </MainContainer>
    )
}
export default  ChoosePlan;

// Main container

const MainContainer = styled.div`

`;