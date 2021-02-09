import React from 'react';
import img from '../images/tab-1-pic.png';
import styled from 'styled-components';
import {Button} from './Button';

// Media query
import { generateMedia } from "styled-media-query";

function TabContentDoor() {
    return (
        <div>
            <TabContentContent className="tab-content">
                {/* <div className="container"> */}
                    <div className="tab1-content">
                        <span>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</span>
                        <Button primary>Try it now</Button>
                    </div>
                    <img src={img}/>    
                {/* </div> */}
            </TabContentContent>
        </div>
    )
}
export default TabContentDoor;

/* Media query */

const customMedia = generateMedia({
    lgDesktop: "1350px",
    mdDesktop: "1150px",
    tablet: '960px',
    smtablet: "736px"
});
const TabContentContent = styled.div `
    background-color: var(--main-deep-dark);
    display: flex;
    justify-content: space-around;
    align-items: center;
    ${customMedia.lessThan('tablet')`
        flex-direction: column;
    `};
    .tab1-content {
        width: 500px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        span {
            font-size: 2rem;
            line-height: 1.6;
            margin-top: 2rem;
            ${customMedia.lessThan('tablet')`
                font-size: 1.6rem;
        `}
            ${customMedia.lessThan('smtablet')`
                width: 300px;
                font-size: 1.2rem;
        `};
        }
        button {
            /* margin-top: 20px;
            height: 50px;
            width: 35%;
            border: 0;
            background-color: var(--main-red);
            color: #fff;
            font-size: 20px;
            cursor: pointer;
            &:hover {
                background-color: var(--main-red-hover);
            } */
        }
    }
    img {
        width: 31rem;
        ${customMedia.lessThan('tablet')`
            width: 23rem;
                margin: 2rem 0;
        `};
    }
`;