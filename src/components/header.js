import PropTypes from "prop-types"
import React from "react"
import StyledArtDirectedBackground from "../components/headerImage"

const Header = () => (
  <header className="header">
    <StyledArtDirectedBackground className="header-background" />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
