import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const Wrapper = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: ${rhythm(3)} 0;
  text-align: center;
`
const TitleText = props => {
  return (
    <Wrapper>
      <h2>{props.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: props.text }}></div>
    </Wrapper>
  )
}

export default TitleText
