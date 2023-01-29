import React from "react";
import { StyledLogo } from "./StyledComponent/StyledNav";

function Logo() {
  return (
    <StyledLogo>
      <svg
        id="logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
      >
        <polygon
          id="logo-u-logo-s-polygon1"
          points="0,-67.557994 58.506939,-33.778997 58.506939,33.778997 0,67.557994 -58.506939,33.778997 -58.506939,-33.778997 0,-67.557994"
          transform="matrix(2.15 0 0 2.1 150 150)"
          fill="#0a192f"
          stroke="#64ffda"
          stroke-width="6"
        />
      </svg>

      <span>M</span>
    </StyledLogo>
  );
}

export default Logo;
