import React, { Component } from 'react';
import logo from "../svg/logo.svg";
import {NavLink, Link} from "react-router-dom";
import styled from 'styled-components'; 
import {Icon} from 'react-icons-kit';
import {ic_keyboard_arrow_right as angle} from 'react-icons-kit/md/ic_keyboard_arrow_right';

import { auth } from "../../src/components/firebase/firebase";
// Media query
import { generateMedia } from "styled-media-query";
import ShowCase from './ShowCase';

export const IconAngle = () => <Icon icon={angle} /> 

const Header = ({currentUser}) => {
  
        return (
            <div style={{marginTop: '-1rem'}}>
                <HeaderContainer className="header-container">
                    <div className="container">
                        <div className="header-top">
                            <Link to="/">
                                <img src={logo} alt="logo"/>
                            </Link>
                            {
                                currentUser ?
                                <NavLink to="/" className="signIn-btn" onClick={()=> auth.signOut()}>Sign Out</NavLink>
                            :    <NavLink to="/login" className="signIn-btn">Sign In</NavLink>
                            }
                        </div>
                    </div>
                </HeaderContainer>
            </div>
        )
}
export default Header;

// Media query

const customMedia = generateMedia({
    lgDesktop: "1350px",
    mdDesktop: "1150px",
    tablet: '960px',
    smtablet: "736px"
  });

// Header Container  

const HeaderContainer = styled.div `
background-color: transparent;
.header-top {
        position: absolute;
        top: 5rem;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: -5rem;
        position: relative;
        z-index: 15;

    }
    img {
        width:150px;
        ${customMedia.lessThan('tablet')`
            width: 100px;
        `}
    }
    .signIn-btn {
        padding: 8px 15px;
        background-color: var(--main-red);
        color: #fff;
        border-radius: 5px;
        font-weight: bold;
        &:hover {
            background-color: var(--main-red-hover);
        }
        ${customMedia.lessThan('tablet')`
            padding: 4px;
            font-weight: normal;
            font-size: 15px;
        `}
    }
    
`;
