import 'styled-components'


declare module 'styled-components' {
    export interface  DefaultTheme {
        navbarBackground: string;
        background: string;
        secondary: string;
        fontColor: string;
    }
}