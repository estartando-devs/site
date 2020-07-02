import { DefaultTheme } from "styled-components";

const Theme: DefaultTheme = {
  shadows: [
    "0px 3px 4px rgba(0, 0, 0, 0.1)",
    "0px 4px 4px rgba(0, 0, 0, 0.25)",
  ],
  palette: {
    type: "dark",
    primary: {
      light: "#81E7A8",
      main: "#81CAA8",
      dark: "#488184",
      contrastText: "#F0F0F0",
    },
    text: {
      primary: "#fff",
      secondary: "#fcfcfc",
      disabled: "#fbfbfb",
    },
    background: {
      paper: "#323232",
      default: "#161616",
    },
    action: {
      disabledBackground: "rgba(0, 0, 0, 0.12)",
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#d5d5d5",
      A200: "#aaaaaa",
      A400: "#303030",
      A700: "#616161",
    },
    error: {
      main: "#E56467",
    },
    warning: {
      main: "#ff9800",
    },
    success: {
      main: "#81c784",
    },
  },
  margin: {
    small: "8px",
    regular: "12px",
    large: "16px",
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: "Ubuntu Mono",
      fontWeight: 300,
      fontSize: "2rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontFamily: "Ubuntu Mono",
      fontWeight: 300,
      fontSize: "1.8rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    body1: {
      fontFamily: "Open Sans",
      fontWeight: 300,
      fontSize: "1rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
  },
  shape: {
    borderRadius: "5px",
    padding: {
      small: "8px",
    },
  },
};

export default Theme;
