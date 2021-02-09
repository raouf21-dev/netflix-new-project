import React from 'react';
import {Button} from './Button';
import styled from 'styled-components';
import img1 from '../images/tab-macbook.png';
import img2 from '../images/tab-tablet.png';
import img3 from '../images/tab-tv.png';

// Media query

import { generateMedia } from "styled-media-query";

function TabContentDevices() {
    return (
        <div>
            <TabContainer className="tab-top-content">
                <div className="top-content">
                    <span>
                        Save your favourites easily and always have something to watch.
                    </span>
                    <Button>Try it now</Button>
                </div>
                <div className="devices-img">
                    <img src={img1}/>
                    <img src={img2}/>
                    <img src={img3}/>
                </div>
            </TabContainer>
        </div>
    )
}
export default TabContentDevices;

// Media query

const customMedia = generateMedia({
    lgDesktop: "1350px",
    mdDesktop: "1150px",
    tablet: '960px',
    smtablet: "736px"
});

// Main tab container

const TabContainer = styled.div `
    background-color: var(--main-deep-dark);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${customMedia.lessThan('tablet') `
            .top-content {
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
    `}
    span {
        font-size: 25px;
        margin-right: 10px;
        ${customMedia.lessThan('tablet') `
            font-size: 20px;
            margin: 10px 0;
        `}
        ${customMedia.lessThan('smTablet') `
            font-size: 12px;
        `}
    }
    .devices-img {
        margin-top: 20px;
        text-align: center;
        ${customMedia.lessThan('smtablet')`
            display: flex;  
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `}
        img {
            width: 30%;
            ${customMedia.lessThan('smtablet')`
                width: 50%;
                margin: 15px 0;
        `}
        }
    }
`;