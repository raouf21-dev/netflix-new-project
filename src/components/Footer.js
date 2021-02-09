import React, { Component } from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {Icon} from 'react-icons-kit';
import {iosWorld} from 'react-icons-kit/ionicons/iosWorld/';
import {arrowSortedDown} from 'react-icons-kit/typicons/arrowSortedDown/';

// Media query

import { generateMedia } from "styled-media-query";


class Footer extends Component {

    state = {
        langContent: false,
        lang: 'English'
    }

    handleToggle = (e)=> {
        e.preventDefault();

        let lang = e.target.textContent;
        this.setState({
            langContent: !this.state.langContent,
            lang: lang
        })
        console.log(5);
    }

    render() {
        return (
            <div>
                <Separator></Separator>

                <FooterContainer className="footer-columns">
                <span style={{marginLeft: '18%', fontSize: '1.25rem'}}>Questions? Call <Link to="/"> 0808 196 5391 </Link></span>
                <div className="footer-columns">

                    <ul>
                        <li>FAQ</li>
                        <li>Investor Relations</li>
                        <li>Ways to Watch</li>
                        <li>Corporate Information</li>
                        <li>Netflix Originals</li>
                    </ul>
                    <ul>
                        <li>Help Centre</li>
                        <li>Jobs</li>
                        <li>Terms of Use</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul>
                        <li>Account</li>
                        <li>Redeem gift cards</li>
                        <li>Privacy</li>
                        <li>Speed Test</li>
                    </ul>
                    <ul>
                        <li>Media Centre</li>
                        <li>Buy gift cards</li>
                        <li>Cookie Preferences</li>
                        <li>Legal Notices</li>
                    </ul>
                    <div className="lang-btn" onClick={this.handleToggle}>
                        <Icon icon={iosWorld} size={20} />
                        {this.state.lang}
                        {/* Taggle Lang Content */}
                         { this.state.langContent && (

                        <div className="lang-toggle">
                            <ul>
                                <li id="English" onClick={this.swichLang}>English</li>
                            </ul>
                            <ul>
                                <li  id="French" onClick={this.swichLang}>French</li>
                            </ul>
                        </div>
                        ) }
                        <Icon icon={arrowSortedDown}/>
                    </div>
                </div>

                </FooterContainer>
            </div>
        )
    }
}
export default Footer;


// Media query

const customMedia = generateMedia({
    lgDesktop: "1350px",
    mdDesktop: "1150px",
    tablet: '960px',
    smtablet: "736px"
});

const Separator = styled.div `
    margin-top: 50px;
    /* height: 20px; */
`;

const FooterContainer = styled.footer `

    background-color: var(--main-deep-dark);
    padding-top: 10rem;
    padding-bottom: 3rem;
    color: #999;
    margin-bottom: 0;


    .footer-columns {
        width: 70%;
        margin: 1rem auto 0;
        font-size: 1rem;
        overflow: auto;
        display: grid;
        justify-content: space-around;
        grid-template-columns: repeat(4, 1fr);

        ${customMedia.lessThan('smtablet')`
            grid-template-columns: repeat(2, 1fr);
            justify-content: center;
            align-items: flex-start;
        `};
        ul li {
            line-height: 2.5;
            &:hover {
                text-decoration: underline;
            }
        }

        .lang-btn {
            background: transparent;
            border: 1px solid #333;
            padding: 1rem;
            width: 8rem;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: .3rem;
            align-items: center;
            cursor: pointer;
        }
    }

    /* Lang toggle */

    .lang-toggle {
        margin-left: 15%;
        position: absolute;
        left:0;
    }
    .lang-toggle ul {
        background:  var(--main-deep-dark);
        width: 8rem;
        border: 1px solid #333;
        text-align: center;
        padding: 1rem;
        margin: 0;
        cursor: pointer;
        &:hover { background: #0085ff; color: #fff; }

    }
`;