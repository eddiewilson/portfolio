import Typography from "typography"
import { MQ } from "../utils/mediaQueries"

const typography = new Typography({
  baseFontSize: "21px",
  baseLineHeight: 1.666,
  scaleRatio: 14,
  googleFonts: [
    {
      name: "Inter",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
  headerFontFamily: ["Inter", "sans-serif"],
  bodyFontFamily: ["Inter", "sans-serif"],
  overrideStyles: ({ adjustFontSizeTo, rhythm, scale }, options, styles) => ({
    p: {
      fontSize: "min(max(16px, 2vw), 31px);",
      color: "white",
    },
    li: {
      fontSize: "min(max(16px, 2vw), 31px);",
    },
    h2: {
      fontSize: "8vw",
    },
  }),
})

// Output CSS as string.
typography.toString()

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles()

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
