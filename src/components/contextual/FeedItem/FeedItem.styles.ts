import styled from "styled-components";

export const FeedWrapper = styled.section`
    margin-top: 8px;
    padding: 16px;
    background-color: ${props => props.theme.navbarBackground};
`

export const FeedHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const FeedHeaderLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    & > span {
        font-size: 14px;
        line-height: 18px;
        color: #424e53;
        font-weight: 400;
    }

    & > time {
        color: #949ca1;
        font-size: 12px;
    }
`

export const FeedContent = styled.main`
    padding: 16px 0;
    cursor: pointer;
    p {
        font-size: 16px;
        color: ${props => props.theme.fontColor};
    }
`;

export const FeedFooter = styled.footer`
    display: flex;
    align-items: center;
    gap: 16px;
`
export const RatingContainer = styled.div`
    padding: 2px 4px;
    border-radius: 14px;
    box-shadow: 0 0px 2px rgba(0, 0, 0, .4);

    & > .points {
        font-size: 14px;
        padding: 0 8px;
    }
`

export const RatingButton = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    
    &:active {
        opacity: .5;
    }
`