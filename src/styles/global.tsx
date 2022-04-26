import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, p, a {
    color: ${({ theme }) => theme.palette.design.white}
  }

  body {
    font-family: ${(props) => props.theme.typography.fontFamily};
  }

  html {
    background-color: ${({ theme }) => theme.palette.background.default};
    font-size: ${(props) => props.theme.typography.htmlFontSize}px;
    scroll-behavior: smooth;
  }

  @media only screen and (max-width: 600px) {
    html {
      font-size: 12px;
    }
  }

  #__next, html, body {
    min-height: 100%;
    width: 100%;
  }

  a {
    text-decoration: none;
    &:focus,
    &:active {
      text-decoration: none;
    }
  }
  button {
    background: none;
    border: none;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.palette.background.default};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.palette.primary.main};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.palette.primary.main};
  }

`;
