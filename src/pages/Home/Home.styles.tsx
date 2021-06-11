import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
    background-color: ${props => props.theme.background};
`

export const FeedContainer = styled.main`
    @media(min-width: 1200px) {
        display: grid;
        padding: 32px;
        grid-template-columns: minmax(auto, 800px) 1fr;
    }
`