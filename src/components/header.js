import PropTypes from "prop-types"
import React from "react"
import HeaderImage from "../components/headerImage"

const Header = ({ siteTitle }) => (
  <header className="header">
    <HeaderImage />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
