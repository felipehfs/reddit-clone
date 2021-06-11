import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    background-color: ${props => props.theme.background};
    gap: 4px;
    padding-left: 8px;
    align-items: center;
    border-radius: 8px;
`;

export const Input = styled.input`
    border: none;
    font-size: 16px;
    width: 100%;
    background-color: transparent;
    padding: 8px;
    outline: none;

`
export const IconButton = styled.div`
    padding: 4px;
`;