import styled from "styled-components";
import { device } from "../../assets/css/Variable";
export const StyledAboutMe = styled.section`
  display: grid;
  margin: auto;
  grid-template-columns: 2fr 1fr;
  max-width: 75vw;
  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }

  & div h1 {
    color: var(--white);
    font-size: clamp(0px, 5vw, 42px);
    display: inline-block;
    position: relative;
    & span {
      color: var(--green);
      font-family: monospace;
    }
    &::after {
      content: "";
      width: 100px;
      height: 1px;
      background-color: var(--slate);
      position: absolute;
      top: 50%;
      left: 105%;
    }
  }
  & div p {
    font-family: roboto;
    color: var(--slate);
  }
  & div p + div {
    color: var(--slate);
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 6vw;
    & ul {
      margin: 0;
      padding: 0;
      & li {
        list-style-type: none;
        margin: 10px 0;
        &::before {
          content: "▹";
          color: var(--green);
        }
      }
    }
  }
`;
