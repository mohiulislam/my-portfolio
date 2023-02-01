import React from "react";
import IconExternal from "./icons/external";
import IconGitHub from "./icons/github";
import { StyledProject1 } from "./StyledComponent/StyledProject1";
function Project3() {
  return (
    <StyledProject1>
      <div></div>
      <div>
        <span>Featured Project</span>
        <h2>Build a Spotify Connected App</h2>
        <p>
          Having struggled with understanding how the Spotify OAuth flow works,
          I made the course I wish I could have had. Unlike tutorials that only
          cover a few concepts and leave you with half-baked GitHub
          repositories, this course covers everything from explaining the
          principles of REST APIs to implementing Spotify's OAuth flow and
          fetching API data in a React app. By the end of the course, you’ll
          have an app deployed to the internet you can add to your portfolio.
        </p>
        <ul>
          <li>React</li>
          <li>Express</li>
          <li>Spotify API</li>
          <li>Styled</li>
          <li> Components</li>
        </ul>
        <div>
          <IconGitHub />
          <IconExternal />
        </div>
      </div>
    </StyledProject1>
  );
}

export default Project3;
