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
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://docs.google.com/document/d/18ztBMDbymVVk2AqkBL1u33Ch1e8e49j8OsstFgd_biU"
        >
          <Button padding="clamp(0px,6%,25px)">Cheque Out My Resume</Button>
        </a>
      </div>
    </StyledIntro>
  );
}
export default Intro;
