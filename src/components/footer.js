import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { device } from "../utils/mediaQueries"
import { motion } from "framer-motion"

const Nav = styled.ul.attrs({ className: "social-nav" })`
  order: 2;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  list-style: none;
  li {
    list-style: none;
    padding-left: 0;
    a {
      transition: all 0.2s ease-in 0s;
      position: relative;
      display: inline-block;
      text-decoration: none;
      color: white;
      text-decoration: none;
      background-size: 0 100%;
      transition: background-size 0.3s ease;
      background-image: linear-gradient(
        transparent calc(100% - 1px),
        hsla(0, 100%, 71%, 0.5) 1px
      );
      background-repeat: no-repeat;
      cursor: pointer;
      &:hover {
        background-size: 100% 100%;
        color: hsla(0, 100%, 71%, 1);
      }
    }

    @media ${device.mobileL} {
      display: block;
    }
  }
  @media ${device.mobileL} {
    order: 1;
  }
`

const ContactDetails = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  li {
    width: max-content;
    list-style: none;
    padding-left: 0;
    transition: all 0.2s ease-in 0s;
    position: relative;
    display: inline-block;
    text-decoration: none;
    color: white;
    text-decoration: none;
    background-size: 0 100%;
    transition: background-size 0.3s ease;
    background-image: linear-gradient(
      transparent calc(100% - 1px),
      hsla(0, 100%, 71%, 0.5) 1px
    );
    background-repeat: no-repeat;
    cursor: pointer;
    &:hover {
      background-size: 100% 100%;
      color: hsla(0, 100%, 71%, 1);
      span {
        color: white;
        background-size: 0 100%;
      }
    }
  }
  span {
    color: white;
    width: max-content;
    display: block;
  }
`

const Wrapper = styled.footer`
  padding: 11vw;
  color: inherit;
  display: grid;
  grid-template-columns: 1fr;
  @media ${device.mobileL} {
    grid-template-columns: 1fr 1.25fr;
  }
`

const Details = styled.div`
  order: 1;
  @media ${device.mobileL} {
    order: 2;
  }
`

const Footer = props => {
  const [copy, setCopy] = useState(null)
  useEffect(() => {
    setInterval(() => {
      setCopy(null)
    }, 3000)
  }, [setCopy])
  const navLinks = [
    {
      title: "Codepen",
      link: "https://codepen.io/edwardwilson/",
    },
    {
      title: "GitHub",
      link: "https://github.com/eddiewilson",
    },
    {
      title: "Behance",
      link: "https://www.behance.net/edward__wilson",
    },
    {
      title: "Dribbble",
      link: "https://dribbble.com/edward_wilson",
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/edward_wilson/",
    },
    {
      title: "Twitter",
      link: "https://twitter.com/Edward___Wilson",
    },
  ]

  const renderList = navLinks.map(({ title, link, i }) => {
    return (
      <li key={title}>
        <a href={link}>{title}</a>
      </li>
    )
  })

  const copyText = textToCopy => {
    setCopy(textToCopy)
    typeof window !== "undefined" && navigator.clipboard.writeText(copy)
  }

  return (
    <Wrapper>
      <Nav>{renderList}</Nav>
      <Details>
        <p>
          If you’d like to have a chat about a project or just some friendly
          advice. Get in touch, let's have a coffee and talk.
        </p>
        <ContactDetails>
          <li style={{color: "inherit"}}>+44 (0) 7974 419 892</li>
          <li onClick={() => copyText("hello@edwardwilson.co")}>
            {copy ? (
              <span>Copied to clipboard! 👌🏼</span>
            ) : (
              "hello@edwardwilson.co"
            )}
          </li>
        </ContactDetails>
      </Details>
      {/* © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a> */}
    </Wrapper>
  )
}

export default Footer
