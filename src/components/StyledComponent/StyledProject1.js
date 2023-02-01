import styled from "styled-components";
import { device } from "../../assets/css/Variable";

export const StyledProject1 = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  div:nth-child(1) {
    align-content: center;
    background-image: url(${require("../../assets/image/code-in-lpatop.jpeg")});
    background-size: cover;
    @media (${device.tablet}) {
      background-color: transparent;
      grid-column: 1/-1;
    }
    grid-column: 1/8;
    grid-row: 1/-1;
    transition: all 0.25s;
    border-radius: 5px;
    background-color: var(--green);
    background-blend-mode: multiply;
    :hover {
      background-color: transparent;
    }
  }
  div:nth-child(2) {
    @media (max-width: 1080px) {
      grid-column: 6/-1;
    }
    @media (${device.tablet}) {
      grid-column: 1/-1;
      background-color: rgba(17, 34, 64, 0.8);
      padding: 20px;
    }
    text-align: right;
    grid-column: 7/-1;
    grid-row: 1/-1;
    div {
      @media (${device.tablet}) {
        display: flex;
      }
      svg {
        @media (${device.tablet}) {
          margin: 0;
          margin-right: 20px;
        }
        width: 20px;
        margin-left: 20px;
        :hover {
          color: var(--green);
        }
      }
    }

    ul {
      @media (${device.tablet}) {
        justify-content: left;
      }
      flex-wrap: wrap;
      color: var(--slate);
      list-style-type: none;
      display: flex;
      font-family: "Fira Code", monospace;
      padding: 0;
      justify-content: right;
      li {
        @media (${device.tablet}) {
          margin: 0;
          margin-right: 10px;
        }
        margin-left: 10px;
      }
    }
    p {
      @media (${device.tablet}) {
        background-color: transparent;
        text-align: left;
        padding-left: 0;
      }
      color: var(--slate);
      background-color: var(--light-navy);
      border-radius: 3px;
      margin: 40px 0 0;
      padding: 20px;
    }
    span {
      color: var(--green);
      font-family: "Fira Code", monospace;
      font-size: 15px;
      margin-bottom: 5px;
      display: block;
      @media (${device.tablet}) {
        text-align: left;
      }
    }
    h2 {
      margin: 0;
      @media (${device.tablet}) {
        text-align: left;
      }
    }
  }
`;
