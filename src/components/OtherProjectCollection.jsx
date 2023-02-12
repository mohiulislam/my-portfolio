import React, { Fragment } from "react";
import OtherProject from "./OtherProject";
import { StyledProjectCollection } from "./StyledComponent/StyledProjectCollection";
import { useState } from "react";
import Button from "./Button";
function OtherProjectCollection() {
  const [Revealed, setReveal] = useState(false);
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
          technology={[<li key={Math.random()}>AlioLia</li>, <li key={Math.random()}>WordPress</li>, <li key={Math.random()}>PHP</li>]}
        />
        <OtherProject
          heading="Time to Have More Fun"
          description="A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS"
          technology={[
            <li key={Math.random()}>Next.js</li>,
            <li key={Math.random()}>tailwind Css</li>,
            <li key={Math.random()}>Firebase</li>,
          ]}
        />
        <OtherProject
          heading="Building a Headless Mobile App CMS From Scratch"
          description="Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement"
          technology={[
            <li key={Math.random()}>Node</li>,
            <li key={Math.random()}>Express</li>,
            <li key={Math.random()}>Firebase</li>,
            <li key={Math.random()}>Vue</li>,
          ]}
        />
        <OtherProject
          heading="OctoProfile"
          description="A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size."
          technology={[
            <li key={Math.random()}>Next.js</li>,
            <li key={Math.random()}>Chart.js</li>,
            <li key={Math.random()}>GitHub API</li>,
          ]}
        />
        <OtherProject
          heading="Apple Music Facebook Messenger Integration"
          description="Building a custom multisite compatible WordPress plugin to build global search with Algolia"
          technology={[<li key={Math.random()}>Ember</li>, <li key={Math.random()}>JS</li>, <li key={Math.random()}>SCSS</li>]}
        />
        <OtherProject
          heading="Apple Music Embeddable Web Player Widget"
          description="Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging MusicKit. Read more about this project on 9to5Mac."
          technology={[<li key={Math.random()}>MusicKit.js</li>, <li key={Math.random()}>JS</li>, <li key={Math.random()}>SCSS</li>]}
        />
        {Revealed ? (
          <Fragment>
            <OtherProject
              heading="Messenger Clone"
              description="Custom WordPress theme and e-commerce site built with Timber and WooCommerce for blistabloc, a start-up selling the only reactive shoe insert that prevents blisters from forming."
              technology={[
                <li key={Math.random()}>WordPress</li>,
                <li key={Math.random()}>Timber</li>,
                <li key={Math.random()}>WooCommerce</li>,
              ]}
            />
            <OtherProject
              heading="Blistabloc"
              description="Custom WordPress theme and e-commerce site built with Timber and WooCommerce for blistabloc, a start-up selling the only reactive shoe insert that prevents blisters from forming."
              technology={[
                <li key={Math.random()}>WordPress</li>,
                <li key={Math.random()}>Timber</li>,
                <li key={Math.random()}>WooCommerce</li>,
              ]}
            />
            <OtherProject
              heading="Google Keep Klone"
              description="Custom WordPress theme and e-commerce site built with Timber and WooCommerce for blistabloc, a start-up selling the only reactive shoe insert that prevents blisters from forming."
              technology={[
                <li key={Math.random()}>WordPress</li>,
                <li key={Math.random()}>Timber</li>,
                <li key={Math.random()}>WooCommerce</li>,
              ]}
            />
            <OtherProject
              heading="React Profile"
              description="Custom WordPress theme and e-commerce site built with Timber and WooCommerce for blistabloc, a start-up selling the only reactive shoe insert that prevents blisters from forming."
              technology={[
                <li key={Math.random()}>WordPress</li>,
                <li key={Math.random()}>Timber</li>,
                <li key={Math.random()}>WooCommerce</li>,
              ]}
            />
            <OtherProject
              heading="NU Women in Tech"
              description="Custom WordPress theme and e-commerce site built with Timber and WooCommerce for blistabloc, a start-up selling the only reactive shoe insert that prevents blisters from forming."
              technology={[
                <li key={Math.random()}>WordPress</li>,
                <li key={Math.random()}>Timber</li>,
                <li key={Math.random()}>WooCommerce</li>,
              ]}
            />
            <OtherProject
              heading="Fontipsums"
              description="Custom WordPress theme and e-commerce site built with Timber and WooCommerce for blistabloc, a start-up selling the only reactive shoe insert that prevents blisters from forming."
              technology={[
                <li key={Math.random()}>WordPress</li>,
                <li key={Math.random()}>Timber</li>,
                <li key={Math.random()}>WooCommerce</li>,
              ]}
            />
            <OtherProject
              heading="Figma CLone"
              description="Custom WordPress theme and e-commerce site built with Timber and WooCommerce for blistabloc, a start-up selling the only reactive shoe insert that prevents blisters from forming."
              technology={[
                <li key={Math.random()}>WordPress</li>,
                <li key={Math.random()}>Timber</li>,
                <li key={Math.random()}>WooCommerce</li>,
              ]}
            />
            <OtherProject
              heading="Gooogle"
              description="Custom WordPress theme and e-commerce site built with Timber and WooCommerce for blistabloc, a start-up selling the only reactive shoe insert that prevents blisters from forming."
              technology={[
                <li key={Math.random()}>WordPress</li>,
                <li key={Math.random()}>Timber</li>,
                <li key={Math.random()}>WooCommerce</li>,
              ]}
            />
          </Fragment>
        ) : null}
      </div>
      <Button
        padding="20px"
        handler={() => {
          Revealed ? setReveal(false) : setReveal(true);
        }}
        margin="50px auto"
      >
        {Revealed ? "Show less" : "Show More"}
      </Button>
    </StyledProjectCollection>
  );
}

export default OtherProjectCollection;
