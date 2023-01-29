import styled from "styled-components";
import { device } from "../../assets/css/Variable";
export const StyledAboutMe = styled.div`
  display: grid;
  margin: auto;
  grid-template-columns: 2fr 1fr;
  width: clamp(0px, 80vw, 900px);
  @media ${device.tablet} {
    grid-template-columns: 1fr;
    width: 100%;
  }
  h1 {
    width: 100%;
    font-size:clamp(26px,5vw,32px) ;
    ::before {
      content: "01.";
      position: relative;
      margin-right: 10px;
      color: var(--green);
      font-family: monospace;
      font-size: clamp(12px, 3vw, 16px);
    }
    ::after {
      content: "";
      display: block;
      height: 1px;
      width: auto;
      flex-grow: 1;
      margin-left: 20px;
      background-color: var(--lightest-navy);
      right: 0;
    }
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0px 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, 32px);
    white-space: nowrap;
    color: var(--lightest-slate);
    line-height: 1.1;
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
