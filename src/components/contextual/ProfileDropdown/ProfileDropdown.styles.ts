import styled from "styled-components";

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    @media(max-width: 1200px) {
        display: none;
    }

     & section > p {
        font-size: 14px;
        color: ${props => props.theme.fontColor};
    }

    & .hide {
        display: none;
    }

    & section > small {
        color: ${props => props.theme.fontColor};
        opacity: .6;
        font-size: 12px;
    }
`


export const MenuProfile = styled.div`
    background-color: ${props => props.theme.navbarBackground};
    top: 0px;
    right: 0;
    height: 30px;
    z-index: 1000;
    box-shadow: 0 1px 5px rgba(0, 0, 0, .4);
    overflow-y: scroll;

    &.hide {
        display: none;
    }
`;

export const MenuProfileItem  = styled.li`
    padding: 8px;
    display: flex;
    gap: 16px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    
    &:active {
        opacity: .5;
    }
`