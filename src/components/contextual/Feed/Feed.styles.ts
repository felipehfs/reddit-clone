import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    background-color: ${props => props.theme.background};
    flex: 1;
`;

export const FeedDescriptor = styled.header`
    background-color: ${props => props.theme.navbarBackground};
    padding: 16px;

    footer {
        margin-top: 16px;
        display: flex;
        justify-content: space-between;
    }

    .category-nav {
        position: absolute;
        top: 0;
        z-index: 2;
        margin-top: 32px;
        left: 0;
        background-color: #fff;
        box-shadow: 0 0 2px rgba(0, 0, 0, .5);
    }

    .category-nav button {
        padding: 8px 16px;
        display: block;
        border: none;
        width: 100%;
        line-height: 32px;
        text-decoration: none;
        color: #222;
        cursor: pointer;
        background: #fff;
    }

    .category-nav button:hover {
        opacity: .5;
        background: rgba(0, 0, 0, .3);
    }

    footer > span.category {
        position: relative;
    }

    footer > span {
        color: #ccccca;
        font-weight: 400;
        cursor: pointer;
    }
`
