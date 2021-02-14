import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from "react-router-dom";
import logo from '../svg/logo.svg';
import checkMarkLogo from '../images/Checkmark.png';
import {Button} from '../components/Button';
import  Footer from "../components/Footer";
function ChoosePlan() {
    return (
        <div style={{background: '#fff'}}>
            
            <MainContainer>
                <div className="header-content">
                    <img className="checkmark-logo" src={checkMarkLogo} alt="checkmark"/>
                    <p>Step <strong>1</strong> of <strong>3</strong> </p>
                    <h2>Choose your plan.</h2>
                    <div className="checked-list">
                        <div className="bullet">No Commitments, cancel anytime.</div>
                        <div className="bullet">Everything on Netflix for one low price.</div>
                        <div className="bullet">Unlimited viewing on all your devices.</div>
                    </div>
                    <Button className="see-plans-btn">See the plans</Button>
                </div>
            </MainContainer>
            <Footer/>
        </div>
    )
}
export default  ChoosePlan;

// Main container

const MainContainer = styled.div`
    background: #fff;
    .header-content {
        border-top: 1px solid #6e6e6e;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        background: #fff;
        color: var(--main-dark);
        position: relative;
        margin-bottom: 6rem;
        margin-top: 4.25rem;
        width: 100%;
        margin: auto;
        
        // checkmark logo
        .checkmark-logo {
            width: 3rem;
            margin-top: 3.125rem;
            margin-bottom: 2rem;
        }

        // check list
        .checked-list {
            text-align: left;
            margin: 1rem auto 3rem;
            padding: 1.6rem;
            width: 400px;
            font-size: 17px;
            padding: auto;
        }

    }
        // bullets

    .bullet {
        margin-top: 1rem;
        margin-left: 1rem;
        line-height: 1.2;
    }
    .bullet::before{
        content: '';
        position: relative;
        left: -.8rem;
        top: -.2rem;
        display: inline-block;
        color: transparent;
        height: 0.2em;
        width: 0.8em;
        border-bottom: 1px solid #e50914;
        border-left: 1px solid #e50914;
        transform: rotate(-45deg);

    }

    .see-plans-btn {
        width: 350px;
    }
`;

    // header top

const HeaderTop = styled.div `
    background: #fff;
    height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        width: 150px;
    }

    .singIn-btn {
        padding: 8px 15px;
        background-color: var(--main-red);
        color: #fff;
        border-radius: 5px;
        font-weight: bold;
        &:hover {
            background-color: var(--main-red-hover);
        }
    }
`;