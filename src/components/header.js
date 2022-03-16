import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import StyledArtDirectedBackground from "../components/headerImage"

const HeaderWrapper = styled.header`
  width: 100vw;
  overflow-x: hidden;
`

const Header = () => (
  <HeaderWrapper className="header">
    <StyledArtDirectedBackground className="header-background" />
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
