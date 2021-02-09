import styled from 'styled-components';

export const Button = styled.button `
    margin-top: ${props => props.primary ? '20px' : '0'};
    height: 50px;
    padding: 0 50px;
    border: 0;
    background-color: var(--main-red);
    color: #fff;
    font-size: 20px;
    outline: none;
    cursor: pointer;
    &:hover {
        background-color: var(--main-red-hover);
    }
`;