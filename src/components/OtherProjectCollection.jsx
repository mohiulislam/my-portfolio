import React from "react";
import OtherProject from "./OtherProject";
import { StyledProjectCollection } from "./StyledComponent/StyledProjectCollection";

function OtherProjectCollection() {
  return (
    <StyledProjectCollection>
      <h2>Other Noteworthy Projects</h2>
      <h4>view the archive</h4>
      <div>
        <OtherProject
          heading={"Integrating Algolia Search with WordPress Multisite"}
          description={
            "Building a custom multisite compatible WordPress plugin to build global search with Algolia"
          }
          technology={[<li>AlioLia</li>, <li>WordPress</li>, <li>PHP</li>]}
        />
        <OtherProject
          heading="Time to Have More Fun"
          description="A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS"
          technology={[
            <li>Next.js</li>,
            <li>tailwind Css</li>,
            <li>Firebase</li>,
          ]}
        />
        <OtherProject
          heading="Building a Headless Mobile App CMS From Scratch"
          description="Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement"
          technology={[
            <li>Node</li>,
            <li>Express</li>,
            <li>Firebase</li>,
            <li>Vue</li>,
          ]}
        />
        <OtherProject
          heading="OctoProfile"
          description="A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size."
          technology={[
            <li>Next.js</li>,
            <li>Chart.js</li>,
            <li>GitHub API</li>,
          ]}
        />
        <OtherProject
          heading=""
          description=""
          technology={[<li></li>, <li></li>, <li></li>]}
        />
        <OtherProject
          heading=""
          description=""
          technology={[<li></li>, <li></li>, <li></li>]}
        />
        <OtherProject
          heading=""
          description=""
          technology={[<li></li>, <li></li>, <li></li>]}
        />
        <OtherProject
          heading=""
          description=""
          technology={[<li></li>, <li></li>, <li></li>]}
        />
        <OtherProject
          heading=""
          description=""
          technology={[<li></li>, <li></li>, <li></li>]}
        />
        <OtherProject
          heading=""
          description=""
          technology={[<li></li>, <li></li>, <li></li>]}
        />
        <OtherProject
          heading=""
          description=""
          technology={[<li></li>, <li></li>, <li></li>]}
        />
        <OtherProject
          heading=""
          description=""
          technology={[<li></li>, <li></li>, <li></li>]}
        />
        <OtherProject
          heading=""
          description=""
          technology={[<li></li>, <li></li>, <li></li>]}
        />
        <OtherProject
          heading=""
          description=""
          technology={[<li></li>, <li></li>, <li></li>]}
        />
      </div>
    </StyledProjectCollection>
  );
}

export default OtherProjectCollection;
