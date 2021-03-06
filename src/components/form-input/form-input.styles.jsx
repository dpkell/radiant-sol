import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
    top: -1.4rem;
    font-size: 1.2rem;
    color: ${mainColor};
`;

export const GroupContainer = styled.div`
    position: relative;
    margin: 4.5rem 0;

    input[type='password'] {
        letter-spacing= 0.3em;
    }
`;

export const FormInputContainer = styled.input`
    background: none;
    background-color: #fff;
    color: ${subColor};
    font-size: 1.8rem;
    padding: 1rem 1rem 1rem .5rem;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${subColor};
    margin: 2.5rem 0;

    &:focus {
        outline-none;
    }

    &:focus ~ label {
        ${shrinkLabelStyles}
    }
`;

export const FormatInputLabel = styled.label`
    color: ${subColor};
    font-size: 1.6rem;
    position: absolute;
    pointer-events: none;
    left: .5rem;
    top: 1rem;
    transition: 300ms ease all;

    &.shrink {
        ${shrinkLabelStyles}
    }
`;