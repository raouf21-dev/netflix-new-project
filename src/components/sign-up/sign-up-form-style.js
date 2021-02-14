
import styled from 'styled-components';

const FormContainer = styled.div `
    display: grid;
    justify-content: center;
    position: relative;
    z-index: 10;

    .form-container {
        background: rgba(0,0,0,0.5);
        position: relative;
        width: 28.125rem;
        height: 41.25rem;
        padding: 4rem;
    }

    .input-container {
        display: grid;
        grid-template-columns: 1fr;
        margin-top: 1.2rem;
        position: relative;
    }

    .input-empty {
        color: #fff;
        background: #333;
        border: 0;
        border-radius: 0.25rem;
        height: 3rem;
        padding: .9rem 1.25rem 0;
        outline: none;
    }

    form div label {
        position: absolute;
        top: 0.625rem;
        left: 1.25rem;
        pointer-events: none;
        color: #8a8a8a;
        font-size: 1rem;
        transition: transform 150ms ease-out, font-size 150ms ease-out;
    }
    input:focus ~ label {
        top: .325rem;
        font-size: .7rem;
    }

    .input-error {
        border-bottom: 1px solid #db7302;
    }

    // checkbox

    .checkbox-container {
        color: #828282;
        margin-left: 0.75rem;
        padding-left: 1.825rem;
        position: relative;
        font-size: .9rem;
        cursor: pointer;
    }

    .checkbox-container input {
        display: none;
    }

    .checkbox-container .checkmark {
        display: inline-block;
        background: #454545;
        width: 1.1rem;
        height: 1.1rem;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 0.1rem;
    }
    .checkbox-container input:checked + .checkmark::after {
        content: '';
        position: absolute;
        height: .25rem;
        width:  .625rem;
        border-left: 2px solid #000;
        border-bottom: 2px solid #000;
        top: 25%;
        left: 21%;
        transform: rotate(-45deg);
    }

    .need-help {
        text-decoration: none;
        color: #828282;
        margin-left: 6.6rem;
        font-size: .9rem;
    }

    // bottom-form

    .bottom-form {
        position: absolute;
        bottom: 0;
        margin-bottom: 4rem;
    }


    .bottom-form img{
        width: 1.5625rem;
        margin: 0.625rem 0.625rem -0.4375rem 0;
    }
    .login-fb-next {
        color: #828282;
        font-size: 0.9rem;
    }
    .sign-up-text {
        font-size: 1.1rem;
        color: #fff;
        &:hover {
            text-decoration: underline;
        }
    }
    `;

    const Button = styled.button `
    color: #fff;
    background: var(--main-red);
    border: 0;
    padding: 1rem;
    cursor: pointer;
    font-size: 1rem;
    margin: 1rem 0;
    &:hover {
        background: var(--main-red-hover);
    }
`;

export default FormContainer;