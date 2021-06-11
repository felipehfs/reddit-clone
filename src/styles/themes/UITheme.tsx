import React from 'react';
import { ThemeProvider } from 'styled-components';



const theme  = {
    navbarBackground: '#fff',
    background: '#dae0e6',
    secondary: '#0079d3',
}

const UITheme : React.FC = props => {
    return (
        <ThemeProvider theme={theme}>
        {props.children}
        </ThemeProvider>
    )
}

export default UITheme;