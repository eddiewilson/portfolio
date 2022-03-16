const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
}

export const MQ = {
  mobileS: `@media only screen and ${device.mobileS}`,
  mobileM: `@media only screen and ${device.mobileM}`,
  mobileL: `@media only screen and ${device.mobileL}`,
  tablet: `@media only screen and ${device.tablet}`,
  laptop: `@media only screen and ${device.laptop}`,
  laptopL: `@media only screen and ${device.laptopL}`,
  desktop: `@media only screen and ${device.desktop}`,
  desktopL: `@media only screen and ${device.desktopL}`,
}

// @media ${device.laptop} {
