import Typography from "typography"

const typography = new Typography({
  baseFontSize: "21px",
  baseLineHeight: 1.666,
  scaleRatio: 4.7,
  overrideStyles: (
    { adjustFontSizeTo, rhythm, scale },
    options,
    styles
  ) => ({}),
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
