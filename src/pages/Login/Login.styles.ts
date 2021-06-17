import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.background};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Card = styled.div`
    background-color: ${props => props.theme.navbarBackground};
    padding: 16px;
    display: flex;
    flex-direction: column;
    width: 420px;
    border-radius: 4px;
    & > img {
        align-self: center;
        width: 64px;
        height: 64px;
    }
`;

export const Form = styled.form`
    margin-top: 24px;
    flex-direction: column;
    display: flex;
    gap: 24px;
`;