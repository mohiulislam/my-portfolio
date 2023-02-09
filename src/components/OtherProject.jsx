import React from "react";
import IconExternal from "./icons/external";
import IconFolder from "./icons/folder";
import { StyledOtherProject } from "./StyledComponent/StyledOtherProject";

function OtherProject({ heading, description, technology }) {
  return (
    <StyledOtherProject>
      <div>
        <IconFolder /> <IconExternal />
      </div>
      <h3>{heading}</h3>
      <p>{description}</p>
      <ul>{technology}</ul>
    </StyledOtherProject>
  );
}

export default OtherProject;
