import React from "react";
import IconExternal from "./icons/external";
import IconGitHub from "./icons/github";
import { StyledProject1 } from "./StyledComponent/StyledProject1";
function Project() {
  return (
    <StyledProject1 img="../../assets/image/code-in-lpatop.jpeg">
      <div>

      </div>
      <div>
        <span>Featured Project</span>
        <h2>Halcyon Theme</h2>
        <p>
          A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and
          more. Available on Visual Studio Marketplace, Package Control, Atom
          Package Manager, and npm.
        </p>
        <ul>
          <li>VS Code</li>
          <li>Subline Text</li>
          <li>Atom</li>
          <li>iTerm2</li>
          <li>Hyper</li>
        </ul>
        <div>
          <IconGitHub />
          <IconExternal />
        </div>
      </div>
    </StyledProject1>
  );
}

export default Project;
