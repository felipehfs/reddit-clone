import { createGlobalStyle } from "styled-components";

const CssReset = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }

    html, body, #root {
        height: 100%;
    }
`

export default CssReset;