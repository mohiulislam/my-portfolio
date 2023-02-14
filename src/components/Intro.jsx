import React from "react";
import introData from "../data/introData.js";
import Button from "./Button";
import { StyledIntro } from "./StyledComponent/StyledIntro.js";

function Intro() {
  return (
    <StyledIntro>
      <h6>Hi, my name is</h6>
      <h1>{introData.name}</h1>
      <h1>I build things for the web.</h1>
      <p>
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at Upstatement.
      </p>
      <div>
        <Button padding="clamp(0px,6%,25px)">Cheque Out My Resume</Button>
      </div>
    </StyledIntro>
  );
}
export default Intro;
