import styled from 'styled-components'

export const Wrapper = styled.header`
    background-color: ${props => props.theme.navbarBackground};
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 2px rgba(0, 0, 0, .5);
    position: sticky;
    top: 0;
    left: 0;
    z-index: 3;
    gap: 64px;


    @media(max-width: 1200px) {
        & .hide-in-mobile {
            display: none;
        }
    }

    @media(min-width: 1200px) {
        justify-content: space-between;
        gap: 16px;

        & .hide-in-desktop {
            display: none;
        }

    }

`;


export const LogoImage = styled.img`
    height: 32px;
    width: 32px;
    cursor: pointer;
`;

export const SearchContainer = styled.div`
    max-width: 510px;
    width: 100%;
    & > form {
        width: 100%;
    }
`;
