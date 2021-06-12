import styled, { css } from "styled-components";

interface ButtonProps {
    colorScheme: 'secondary';
}

export const Button = styled.button<ButtonProps>`
    border: none;
    outline: none;
    padding: 8px 16px;
    font-size: 16px;
    font-weight: 400;
    border-radius: 4px;
    
    ${
        props => props.theme[props.colorScheme] && css`
            background-color: ${props.theme[props.colorScheme]};    
        `
    }
    
    color: #fff;
    cursor: pointer;

    &:active {
        opacity: .5;
    }
`

export default Button;