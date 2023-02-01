import React from "react";
import IconExternal from "./icons/external";
import IconGitHub from "./icons/github";
import { StyledProject2 } from "./StyledComponent/StyledProject2";

function Project2() {
  return (
    <StyledProject2>
      <div></div>
      <div>
        <span>Featured Project</span>
        <h2>Spotify Profile</h2>
        <p>
          A web app for visualizing personalized Spotify data. View your top
          artists, top tracks, recently played tracks, and detailed audio
          information about each track. Create and save new playlists of
          recommended tracks based on your existing playlists and more.
        </p>
        <ul>
          <li>React</li>
          <li>Styled</li>
          <li>Components</li>
          <li>Express</li>
          <li>Spotify API</li>
          <li>Heroku</li>
        </ul>
        <div>
          <IconGitHub />
          <IconExternal />
        </div>
      </div>
    </StyledProject2>
  );
}

export default Project2;
