import React from "react";
import Avater from "./Avater";
import { StyledAboutMe } from "./StyledComponent/StyledAboutMe";
class AboutMe extends React.Component {
  render() {
    return (
      <StyledAboutMe id="about">
        <div>
          <h1>About Me</h1>
          <p>
            Hello! My name is Mohiul and I enjoy creating things that live on
            the internet. My interest in web development started back in 2023.
          </p>
          <p>
            Currently working as front-end web developer and integral remote
            team member at a B2B air ticket selling platform web app,
            specializing in the implementation of user panel and admin panel
            using React.That is a very huge project. Proficiently connecting
            back-end APIs and translating project requirements into innovative
            features.
          </p>
          <p style={{ color: "yellow" }}>
            I can fullfil your any kind of frontend requirement InsahAllah.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <div>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Redux toolkit</li>
              <li>RTK query</li>
            </ul>
            <ul>
              <li>TypeScript</li>
              <li>Git</li>
              <li>UI libraries</li>
              <li>OOP</li>
            </ul>
          </div>
        </div>
        <Avater />
      </StyledAboutMe>
    );
  }
}
export default AboutMe;
