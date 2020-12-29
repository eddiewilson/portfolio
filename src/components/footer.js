import React from "react"
import styled from "styled-components"
import { Typography, List, ListItem, ListItemText } from "@material-ui/core"

const Nav = styled.nav.attrs({ className: "social-nav" })`
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      padding-left: 0;
      a {
        text-decoration: none;
        color: inherit;
        transition: all 0.1s ease-in 0s;
        &:hover {
          font-family: "Archivo Black", sans-serif;
        }
      }
    }
  }
`
const ContactDetails = styled(List)`
  padding: 0;
  margin: 0;
  li {
    list-style: none;
    padding-left: 0;
  }
`

const Footer = props => {
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
      <ListItem key={i}>
        <a href={link}>
          <ListItemText
            primary={title}
            secondary={"" ? "Secondary text" : null}
          />
        </a>
      </ListItem>
    )
  })

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social">
          <Nav className="social-nav">
            <List dense={true}>{renderList}</List>
          </Nav>
        </div>
        <div className="footer-info">
          <Typography>
            If you’d like to have a chat about a project, job opportunity or
            just some friendly advice. Please get in touch, let's have a coffee
            and talk.
          </Typography>
          <ContactDetails dense={false}>
            <ListItem>
              <ListItemText
                primary="+44 (0) 7974 419 892"
                secondary={"" ? "Secondary text" : null}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="hello@edwardwilson.co"
                secondary={"" ? "Secondary text" : null}
              />
            </ListItem>
          </ContactDetails>
        </div>
      </div>
      {/* © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a> */}
    </footer>
  )
}

export default Footer
