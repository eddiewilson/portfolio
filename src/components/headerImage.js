import React from "react"
import { Typography, withTheme } from "@material-ui/core/"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

import { motion } from "framer-motion"

const Heading = withTheme(styled.div.attrs({
  className: "doAnimation",
})`
  display: flex;
  flex-direction: column;
  padding: 6vh 11vw 3vh 11vw;
  top: ${rhythm(3)};
  ${props => props.theme.breakpoints.down("md")} {
    padding: 8vh 11vw 8vh 11vw;
    top: ${rhythm(3)};
  }
  ${props => props.theme.breakpoints.down("lg")} {
    padding: 8rem 11vw 8vh 11vw;
    top: ${rhythm(3)};
  }
`)

const TopHeading = withTheme(styled(Typography).attrs({
  className: "topHeading",
})`
  z-index: 1;
  .text-wrapper {
    height: 100%;
    overflow: hidden;
    ${props => props.theme.breakpoints.up("md")} {
      height: 100%;
    }
    ${props => props.theme.breakpoints.up("lg")} {
      height: 100%;
    }
    ${props => props.theme.breakpoints.up("xl")} {
      height: 100%;
    }
  }
  ${props => props.theme.breakpoints.up("sm")} {
    max-width: 75vw;
    bottom: ${rhythm(4)};
  }
  color: white;
  -webkit-animation: AnimationName 30s ease infinite;
  -moz-animation: AnimationName 30s ease infinite;
  animation: AnimationName 30s ease infinite;
  @keyframes AnimationName {
    0% {
      color: #253031;
    }
    50% {
      color: white;
    }
    100% {
      color: b#253031;
    }
  }
`)

const ArtDirectedBackground = () => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }

  const item = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  const textLine = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    hidden: { opacity: 0, y: 200 },
  }

  const title = ["I’m Ed —", "a developer /", "designer based in", "Cornwall"]
  return (
    <Heading>
      <TopHeading variant="h1" component="h2">
        <motion.div initial="hidden" animate="visible" variants={list}>
          {title.map(line => {
            return (
              <motion.div className="text-wrapper" key={line} variants={item}>
                <motion.div variants={textLine}>{line}</motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </TopHeading>
    </Heading>
  )
}

const StyledArtDirectedBackground = withTheme(styled(ArtDirectedBackground)`
  width: 100%;
  min-height: 100vh;
  /* You should set a background-size as the default value is "cover"! */
  background-size: cover;
  /* So we won't have the default "lightgray" background-color. */
  background: #334d50; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #cbcaa5,
    #334d50
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #cbcaa5,
    #334d50
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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
