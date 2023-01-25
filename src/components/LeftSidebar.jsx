import React from 'react'
import IconCodepen from './icons/codepen';
import IconGitHub from './icons/github'
import IconInstagram from './icons/instagram';
import IconLinkedin from './icons/linkedin';
import IconTwitter from './icons/twitter';
import { StyledLeftSideBar } from './StyledComponent/StyledLeftSidebar'

function LeftSidebar() {
  return (
    <StyledLeftSideBar>
      <div>
        <IconGitHub />
        <IconInstagram/>
        <IconTwitter/>
        <IconLinkedin/>
        <IconCodepen/>
      </div>
      <span></span>
    </StyledLeftSideBar>
  );
}

export default LeftSidebar