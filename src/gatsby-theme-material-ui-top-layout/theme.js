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
      lineHeight: "3rem",
      color: "#ef233c",
      background: "linear-gradient(270deg, #f8edeb, #d8e2dc)",
      backgroundSize: "400% 400%",
      animation: "AnimationName 30s ease infinite",
      backgroundClip: "text",

      [defaultTheme.breakpoints.up("sm")]: {
        fontSize: "3rem",
        lineHeight: "6rem",
      },
      [defaultTheme.breakpoints.up("md")]: {
        fontSize: "5rem",
      },
    },
    body1: {
      fontFamily: "Archivo",
      color: "#ef233c",
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
          backgroundColor: "#ef233c",
        },
      },
    },
  },
})

export default theme
