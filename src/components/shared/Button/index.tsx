import styled, { css } from "styled-components"

type Variant = "secondary" | "outlined-secondary"

interface ButtonProps {
  colorScheme: Variant
}

export const Button = styled.button<ButtonProps>`
  border: none;
  outline: none;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 4px;
  color: #fff;

  ${(props) =>
    props.colorScheme === "secondary" &&
    css`
      background-color: ${props.theme[props.colorScheme]};
    `}

  ${(props) =>
    props.colorScheme === "outlined-secondary" &&
    css`
      background-color: transparent;
      border: 1px solid ${(props) => props.theme.secondary};
      color: ${(props) => props.theme.secondary};
    `}
    
    cursor: pointer;

  &:active {
    opacity: 0.5;
  }
`

export default Button
