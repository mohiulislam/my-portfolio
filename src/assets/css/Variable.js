import { css } from "styled-components";

export const variables = css`
  :root {
    --dark-navy: rgb(2, 12, 27);
    --navy: rgb(10, 25, 47);
    --light-navy: rgb(17, 34, 64);
    --lightest-navy: rgb(35, 53, 84);
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --dark-slate: rgb(73, 86, 112);
    --slate: rgb(136, 146, 176);
    --light-slate: rgb(168, 178, 209);
    --lightest-slate: rgb(204, 214, 246);
    --white: rgb(230, 241, 255);
    --green: rgb(100, 255, 218);
    --green-tint: rgba(100, 255, 218, 0.1);
    --pink: rgb(245, 125, 255);
    --blue: rgb(87, 203, 255);
  }
`;
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};