import React, { useEffect, useState } from "react"
import { graphql, StaticQuery } from "gatsby"
import { Typography, withTheme, Fade, Icon } from "@material-ui/core/"
import { ScrollRotate } from "react-scroll-rotate"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import BackgroundImage from "gatsby-background-image"
import BuddyIcon from "../components/buddyIcon"

const Heading = withTheme(styled.div.attrs({
  className: "doAnimation",
})`
  display: flex;
  flex-direction: column;
  padding: 11vw;
  min-height: 60vh;
  ${props => props.theme.breakpoints.up("sm")} {
    padding: 5.5vw 11vw;
    min-height: 80vh;
    top: ${rhythm(3)};
  }
`)

const TopHeading = withTheme(styled(Typography).attrs({
  className: "topHeading",
})`
  z-index: 1;
  ${props => props.theme.breakpoints.up("sm")} {
    max-width: 75vw;
    bottom: ${rhythm(4)};
  }
`)

const BottomHeading = withTheme(styled(Typography).attrs({
  className: "bottomHeading",
})`
  z-index: 1;
  ${props => props.theme.breakpoints.up("sm")} {
    max-width: 75vw;
    bottom: ${rhythm(4)};
  }
`)

const Overlay = styled.div`
  position: absolute;
  background-color: rgba(44, 54, 66, 0.7);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Logo = withTheme(styled.div`
  position: fixed;
  align-self: flex-end;
  display: none;
  ${props => props.theme.breakpoints.up("sm")} {
    display: block;
  }
`)

const HeroImage = styled(BackgroundImage)``
const ArtDirectedBackground = ({ className }) => {
  const [topAnimation, setTopAnimation] = useState(false)
  const [bottomAnimation, setBottomAnimation] = useState(false)

  const doAnimation = () => {
    setTopAnimation(true)
    setTimeout(function () {
      setBottomAnimation(true)
    }, 1300)
  }

  useEffect(doAnimation, [])
  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(
            relativePath: {
              eq: "Clays_Adult_Hand_iPhone_6s_Presentation_1.jpg"
            }
          ) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        // Set ImageData.
        const imageData = data.desktop.childImageSharp.fluid
        return (
          // <BackgroundImage
          //   Tag={`section`}
          //   id={`media-test`}
          //   className={className}
          //   fluid={imageData}
          //   backgroundColor={`#ededed`}
          // >
          //   <Overlay />

          <Heading>
            <Logo>
              <ScrollRotate>
                <BuddyIcon />
              </ScrollRotate>
            </Logo>
            <Fade in={topAnimation}>
              <TopHeading variant="h1" component="h2">
                I’m Ed —
              </TopHeading>
            </Fade>
            <br />
            <Fade in={bottomAnimation}>
              <BottomHeading variant="h1" component="h2">
                a developer / designer based in Cornwall
              </BottomHeading>
            </Fade>
          </Heading>
          // </BackgroundImage>
        )
      }}
    />
  )
}

const StyledArtDirectedBackground = withTheme(styled(ArtDirectedBackground)`
  width: 100%;
  min-height: 100vh;
  /* You should set a background-size as the default value is "cover"! */
  background-size: cover;
  /* So we won't have the default "lightgray" background-color. */
  background-color: #ededed;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  min-width: 100vw;
  min-height: 100vh;
  transition: unset;
  background-position: 0vw 30vh !important;
  &:before,
  &:after {
    background-position: 0vw 30vh !important;
    ${props => props.theme.breakpoints.up("sm")} {
      background-position: 0vw 20vh !important;
    }
  }

  ${props => props.theme.breakpoints.up("sm")} {
    border: ${rhythm(1)} solid white;
    background-position: 45vw 20vh !important;
    min-height: 160vh;
    box-sizing: border-box;
  }
`)

export default StyledArtDirectedBackground
