import React, { useEffect, useState } from "react"
import { graphql, StaticQuery } from "gatsby"
import { Typography, withTheme, Fade } from "@material-ui/core/"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import BackgroundImage from "gatsby-background-image"

const Heading = withTheme(styled.div.attrs({
  className: "doAnimation",
})`
  position: absolute;
  left: 11vw;
  bottom: ${rhythm(4)};
  z-index: 1;
  ${props => props.theme.breakpoints.up("sm")} {
    max-width: 75vw;
    bottom: ${rhythm(4)};
  }
`)

const TopHeading = withTheme(styled(Typography).attrs({
  className: "topHeading",
})`
  color: white;
  z-index: 1;
  ${props => props.theme.breakpoints.up("sm")} {
    max-width: 75vw;
    bottom: ${rhythm(4)};
  }
`)

const BottomHeading = withTheme(styled(Typography).attrs({
  className: "bottomHeading",
})`
  color: white;
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

const HeroImage = styled(BackgroundImage)`
  background-position: 45vw 10vh !important;
  ${props => props.theme.breakpoints.up("sm")} {
    border: ${rhythm(1)} solid white;
  }
`

const BackgroundSection = ({ className, props }) => {
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
          <StyledBackgroundSection>
            <HeroImage
              Tag="section"
              className={className}
              fluid={imageData}
              backgroundColor={`#ededed`}
            >
              <Overlay />

              <Heading>
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
            </HeroImage>
          </StyledBackgroundSection>
        )
      }}
    />
  )
}

const StyledBackgroundSection = styled.div`
  .header-background {
    background-size: cover;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    min-width: 100vw;
    min-height: 100vh;
    -webkit-transition: all 1s cubic-bezier(0.6, 0.04, 0.98, 0.335) 0.5s;
    transition: all 1s cubic-bezier(0.6, 0.04, 0.98, 0.335) 0.5s;
    background-position: 0vw 30vh !important;
    @media (min-width: 768px) {
      background-position: 45vw 20vh !important;
    }
    &:before,
    &:after {
      background-position: 0vw 0vh !important;
      @media (min-width: 768px) {
        background-position: 0vw 0vh !important;
      }
    }
  }
`

export default BackgroundSection
