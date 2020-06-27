import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    body{
        background-color: ${props=> props.theme.colors.background};
        color: ${props=> props.theme.colors.text};
        font-family: sans-serif;
    }
`