import styled from "styled-components"

export const Wrapper = styled.button`
  background-color: ${(props) => props.theme.navbarBackground};
  border: none;
  border-radius: 14px;
  padding: 2px 4px;
  cursor: pointer;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);

  &:active {
    opacity: 0.5;
  }
`
