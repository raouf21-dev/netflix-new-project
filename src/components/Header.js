import React, { Component } from 'react';
import logo from "../svg/logo.svg";
import {NavLink, Link} from "react-router-dom";
import styled from 'styled-components'; 
import {Icon} from 'react-icons-kit';
import {ic_keyboard_arrow_right as angle} from 'react-icons-kit/md/ic_keyboard_arrow_right';
// Media query
import { generateMedia } from "styled-media-query";

export const IconAngle = () => <Icon icon={angle} /> 

class Header extends Component {
    render() {
        return (
            <div style={{marginTop: '-1rem'}}>
                <HeaderContainer className="header-container">
                    <div className="container">
                        <div className="header-top">
                            <img src={logo} alt="logo"/>
                            <NavLink to="/login" className="signIn-btn">Sign In</NavLink>
                        </div>
                        <Showcase className="showcase">
                            <Title>Unlimited films, TV <br/>programmes and more.</Title>
                            <ShowcaseH2>Watch anywhere. Cancel at any time.</ShowcaseH2>
                        <Form>
                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                            <div>
                                <input type="text" placeholder="Email address"/>
                                <Link className="getstarted-btn" to="/">GET STARTED <Icon className="angleIcon" size={40} icon={angle} /></Link>
                            </div>
                        </Form>
                        </Showcase>
                    </div>
                </HeaderContainer>
            </div>
        )
    }
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
    .header-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
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

const  Showcase = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`; 

const Title = styled.h1 `
    font-size: 3.125rem;
    
    ${customMedia.lessThan('tablet')`
        font-size: 2.2rem;
    `}
`;

const ShowcaseH2 = styled.h2 `
    font-size: 1.6rem;
    font-weight: 400;
    ${customMedia.lessThan('tablet')`
        font-size: 1.2rem;
        font-weight: 400;
    `}
`;

const Form = styled.form `
    h3{
        font-size: 1.3rem;
        font-weight: 400;

        ${customMedia.lessThan('tablet')`
        font-size: 1rem;
        font-weight: 400;
    `}
    }
    
    div {
        width: 100%;
        display: flex;
        
        ${customMedia.lessThan('tablet')` 
            flex-direction: column-reverse;
        `}
        input {
            padding-left: 10px;
            width: 65%;
            font-size: 20px;
            ${customMedia.lessThan('tablet')`
                width: 100%;
                padding: 7px;
            `};
        }
        .getstarted-btn{
            height: 70px;
            width: 35%;
            line-height: 70px;
            border: 0;
            background-color: var(--main-red);
            color: #fff;
            font-size: 20px;
            letter-spacing: 1px;
            cursor: pointer;
            &:hover {
                background-color: var(--main-red-hover);
            }
            
            ${customMedia.lessThan('tablet')` 
                margin-bottom: 5px;
                letter-spacing: 0;
                height: 40px;
                line-height: 40px;
                font-size: 15px;
                width: 100%;
        `}
        }
       
    }
`; 
            