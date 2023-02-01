import React from "react";
import { StyledFootter } from "./StyledComponent/StyledFootter";
import IconCodepen from "./icons/codepen";
import IconGitHub from "./icons/github";
import IconInstagram from "./icons/instagram";
import IconLinkedin from "./icons/linkedin";
import IconTwitter from "./icons/twitter";
function Footter() {
  return (
    <StyledFootter>
      <div>
        <IconGitHub />
        <IconInstagram />
        <IconTwitter />
        <IconLinkedin />
        <IconCodepen />
      </div>
      <div>
        <p>Created By Mohiul Islam.</p>
        <p>
          Designed inspired from 
          <a target="_blank" href="https://brittanychiang.com/">
            &nbsp;Brittany Chiang.
          </a>
        </p>
      </div>
    </StyledFootter>
  );
}

export default Footter;