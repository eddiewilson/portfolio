import { createMuiTheme } from "@material-ui/core"
import colors from "./colors"

const defaultTheme = createMuiTheme()

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: ["Archivo Black", "Archivo", "sans-serif"].join(", "),
    h1: {
      fontFamily: "Archivo Black",
      fontSize: "1.5rem",
      lineHeight: "2.5rem",
      color: "white",
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "3rem",
        lineHeight: "4rem",
      },
      [defaultTheme.breakpoints.up("md")]: {
        fontSize: "4rem",
        lineHeight: "5rem",
      },
      [defaultTheme.breakpoints.up("lg")]: {
        fontSize: "5rem",
        lineHeight: "6rem",
      },
    },
    body1: {
      fontFamily: "Archivo",
      color: "white",
    },
    body2: {
      fontFamily: "Archivo",
    },
  },
  spacing: 30,
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    tertiary: {
      main: colors.tertiary,
    },
    textSecondary: "white",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          backgroundColor: "#E4DCC9",
        },
      },
    },
  },
})

export default theme
