import React from 'react';
import styled from "styled-components";
import {Button} from "./Button";
import { Icon } from 'react-icons-kit';
import {checkmark} from 'react-icons-kit/icomoon/checkmark'
import {cross} from 'react-icons-kit/icomoon/cross';

//Media query 

import { generateMedia } from "styled-media-query";

function TabContentPrice() {
    return (
        <TabContainer>
            <div className="tab-content">
                <div className="tab-top-content">
                    <span style={{fontSize: '1.5rem'}}>
                        Choose your plan and watch everything on Netflix.
                    </span>
                    <Button className="btn">Try it now</Button>
                </div>
                <div className="bottom-content">
                    <table>
                        <thead>
                            <th></th>
                            <th>Basic</th>
                            <th>Standard</th>
                            <th>Premium</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Monthly price</td>
                                <td>£ 8.99</td>
                                <td>£ 13.99</td>
                                <td>£ 19.99</td>
                            </tr>
                            <tr>
                                <td>HD Available</td>
                                <td><Icon icon={cross} size={12}/></td>
                                <td><Icon icon={checkmark} size={12}/></td>
                                <td><Icon icon={checkmark} size={12}/></td>
                            </tr>
                            <tr>
                                <td>Ultra HD Available</td>
                                <td><Icon icon={cross} size={12}/></td>
                                <td><Icon icon={cross} size={12}/></td>
                                <td><Icon icon={checkmark} size={12}/></td>
                            </tr>
                            <tr>
                                <td>Screen you can watch on at the same time</td>
                                <td>1</td>
                                <td>2</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Watch on your laptop, Tv and tablet</td>
                                <td><Icon icon={checkmark} size={12}/></td>
                                <td><Icon icon={checkmark} size={12}/></td>
                                <td><Icon icon={checkmark} size={12}/></td>
                            </tr>
                            <tr>
                                <td>Unlimited movies and TV shows</td>
                                <td><Icon icon={checkmark} size={12}/></td>
                                <td><Icon icon={checkmark} size={12}/></td>
                                <td><Icon icon={checkmark} size={12}/></td>
                            </tr>
                            <tr>
                                <td>Cancel anytime</td>
                                <td><Icon icon={checkmark} size={12}/></td>
                                <td><Icon icon={checkmark} size={12}/></td>
                                <td><Icon icon={checkmark} size={12}/></td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </TabContainer>
    )
}
export default TabContentPrice;

// Main Container

const customMedia = generateMedia({
    lgDesktop: "1350px",
    mdDesktop: "1150px",
    tablet: '960px',
    smTablet: "490px"
});

const TabContainer = styled.div `
    background-color: var(--main-deep-dark);
    /* width: 100%; */
    .tab-content {
        margin: 0 15%;
        padding-bottom: 1%;
    }

    .tab-top-content {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        padding: 3rem 0 0;
        align-items: center;

        ${customMedia.lessThan('smTablet')`
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            
        `};
        ${customMedia.lessThan('tablet')`
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
        `};
    }

    span {
        grid-column: 1/9;
        ${customMedia.lessThan('tablet')`
            margin: 15px auto;
        `};
    }
    .btn {
        grid-column: 9/12;
        ${customMedia.lessThan('tablet')`
            justify-content: center;
            grid-column: 1/5;
        `};
    }

    // Tab Bottom content

    .bottom-content {
        margin: 2rem auto;
    }

    // table

    table {
        width: 100%;
        margin-top: 3rem;
        border-collapse: collapse;
        ${customMedia.lessThan('smTablet')`
            margin-left: -30px;
        `}
    }

    table thead th {
        text-transform: uppercase;
        ${customMedia.lessThan('smTablet')`
        padding: .2rem;
        `}
    }

    table tbody {
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit; 
    }

    table tbody tr td {
        color: #999;
        padding: .8rem 1.2rem;
        text-align: center;
        ${customMedia.lessThan('smTablet')`
            padding: .5rem .6rem;

        `}
    }
    table tbody tr td:first-child{
        text-align: left;
        ${customMedia.lessThan('smTablet')`
            text-align: center;
        `}
    }

    table tbody tr:nth-child(even) {
        background-color: #222;
    }
`;