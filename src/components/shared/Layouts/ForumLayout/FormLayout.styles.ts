import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
    background-color: ${props => props.theme.background};
`

export const GridContainer = styled.main`
    @media(min-width: 1200px) {
        display: grid;
        padding: 32px 0;
        grid-gap: 32px;
        justify-content: center;
        grid-template-columns: minmax(auto, 800px) 280px;
    }
`