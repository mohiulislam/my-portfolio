import React from "react";
import OtherProjectCollection from "./OtherProjectCollection";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import { StyledWork } from "./StyledComponent/StyledWork";

function Work() {
  return (
    <StyledWork id="work">
      <h1>Some Things I’ve Built</h1>
      <Project1 />
      <Project2 />
      <Project3 />
      <OtherProjectCollection/>
    </StyledWork>
  );
}

export default Work;
