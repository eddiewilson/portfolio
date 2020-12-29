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
      fontSize: "2rem",
      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "3rem",
      },
      [defaultTheme.breakpoints.up("md")]: {
        fontSize: "5rem",
      },
    },
    body1: {
      fontFamily: "Archivo",
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
        html: {},
      },
    },
  },
})

export default theme
