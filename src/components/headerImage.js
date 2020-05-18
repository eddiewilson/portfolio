import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(
          relativePath: { eq: "Clays_Adult_Hand_iPhone_6s_Presentation_1.jpg" }
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
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#ededed`}
        >
          <h1 id="main-title">
            Hello, I'm a designer &amp; developer <br />
            working in Cornwall.
          </h1>
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  background-size: cover;
  width: 100%;
  height: 100%;
  background-position-x: 50vw;
  background-position-y: center;
  background-repeat: no-repeat;
  min-width: 100vw;
  min-height: 100vh;
  -webkit-transition: all 1s cubic-bezier(0.6, 0.04, 0.98, 0.335) 0.5s;
  transition: all 1s cubic-bezier(0.6, 0.04, 0.98, 0.335) 0.5s;
`

export default StyledBackgroundSection
