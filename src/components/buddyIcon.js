import React, { useState } from "react"
import styled from "styled-components"
import { SvgIcon } from "@material-ui/core"

// <style>.a{}</style>

const Buddy = styled(SvgIcon)`
  font-size: 4rem;
  path {
    fill: #ffffff;
    stroke: transparent;
    stroke-width: 2px;
  }
`

const BuddyIcon = props => {
  const [logoDisplay, setLogoDisplay] = useState(0)
  return (
    <Buddy {...props} style={{ opacity: logoDisplay }}>
      <g clip-path="url(#clip0)">
        <path
          d="M24.2347 17.9925L22.4346 16.1975L19.7809 18.8901L13.8847 13.0114V9.42177H21.9846V2.78006H19.4647V6.90832H13.8847V2.78006H11.3648V6.90832H5.78481V2.78006H3.26489V9.42177H11.3648V13.0119L5.46968 18.8901L2.81597 16.1975L1.01477 17.9925L5.46968 22.4803L12.6247 15.3451L19.7798 22.4803L24.2347 17.9925Z"
          fill="#2C3642"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="24"
            height="20.3662"
            fill="white"
            transform="translate(0.625 2.50439)"
          />
        </clipPath>
      </defs>{" "}
    </Buddy>
  )
}

export default BuddyIcon
