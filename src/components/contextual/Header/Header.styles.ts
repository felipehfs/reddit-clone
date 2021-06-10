import styled from 'styled-components'

export const Wrapper = styled.header`
    background-color: ${props => props.theme.navbarBackground};
    padding: 8px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 2px rgba(0, 0, 0, .5);
    position: sticky;
    top: 0;
    left: 0;
    z-index: 3;
`;

export const LogoImage = styled.img`
    height: 32px;
    width: 32px;
    cursor: pointer;
`;