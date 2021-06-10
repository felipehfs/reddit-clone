import React from 'react';
import { ThemeProvider } from 'styled-components';



const theme  = {
    navbarBackground: '#fff',
    background: '#dae0e6'
}

const UITheme : React.FC = props => {
    return (
        <ThemeProvider theme={theme}>
        {props.children}
        </ThemeProvider>
    )
}

export default UITheme;