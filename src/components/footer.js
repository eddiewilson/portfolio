import React from "react"
import styled from "styled-components"
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  withTheme,
  Button,
} from "@material-ui/core"

const Nav = withTheme(styled.nav.attrs({ className: "social-nav" })`
  order: 2;
  ul {
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    li {
      list-style: none;
      padding-left: 0;
      a {
        text-decoration: none;
        color: #ef233c;
        transition: all 0.1s ease-in 0s;
        &:hover {
          font-family: "Archivo Black", sans-serif;
        }
      }
    }
    ${props => props.theme.breakpoints.up("sm")} {
      display: block;
    }
  }
  ${props => props.theme.breakpoints.up("sm")} {
    order: 1;
  }
`)

const ContactDetails = styled(List)`
  padding: 0;
  margin: 0;
  li {
    list-style: none;
    padding-left: 0;
    a {
      text-decoration: none;
      color: inherit;
    }
  }
`

const ButtonLink = withTheme(styled(Button)`
  text-transform: unset;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: -1rem;
  span {
    color: #ef233c;
  }
`)

const Wrapper = withTheme(styled.footer`
  // background-color: #2c3642;
  padding: 11vw;
  color: inherit;
  display: grid;
  grid-template-columns: 1fr;
  ${props => props.theme.breakpoints.up("sm")} {
    grid-template-columns: 1fr 1.25fr;
  }
`)

const Details = withTheme(styled.div`
  order: 1;
  ${props => props.theme.breakpoints.up("sm")} {
    order: 2;
  }
`)

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
      <ListItem key={title}>
        <ButtonLink size="small" href={link} variant="text">
          <ListItemText
            primary={title}
            secondary={"" ? "Secondary text" : null}
          />
        </ButtonLink>
      </ListItem>
    )
  })

  return (
    <Wrapper>
      <Nav>
        <List dense={true}>{renderList}</List>
      </Nav>
      <Details>
        <Typography>
          If you’d like to have a chat about a project or just some friendly
          advice. Get in touch, let's have a coffee and talk.
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
      </Details>
      {/* © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a> */}
    </Wrapper>
  )
}

export default Footer
