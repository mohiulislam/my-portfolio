import styled from "styled-components";
import { device } from "../../assets/css/Variable";

export const StyledProject2 = styled.div`
  margin: 15vw 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-content: center;
  div:nth-child(1) {
    @media (max-width: 1080px) {
      grid-column: 5/-1;
    }
    grid-column: 6/-1;
    grid-row: 1/-1;
    background-image: url(${require("../../assets/image/code-in-lpatop.jpeg")});
    background-size: cover;
    background-color: var(--green);
    background-blend-mode: multiply;
    transition: all 0.25s;
    border-radius: 5px;
    :hover {
      background-color: transparent;
    }
  }
  div:nth-child(2) {
    @media (max-width: 1080px) {
      grid-column: 1/8;
    }
    @media (${device.tablet}) {
      grid-column: 1/-1;
      background-color: rgba(17, 34, 64, 0.8);
      padding: 20px;
    }
    text-align: right;
    grid-column: 1/7;
    grid-row: 1/-1;
    div {
      display: flex;
      svg {
        @media (${device.tablet}) {
          margin: 0;
          margin-right: 20px;
        }
        width: 20px;
        margin-right: 20px;
        :hover {
          color: var(--green);
        }
      }
    }
    ul {
      flex-wrap: wrap;
      color: var(--slate);
      list-style-type: none;
      display: flex;
      font-family: monospace;
      padding: 0;
      justify-content: right;
      display: flex;
      justify-content: left;
      li {
        margin-right: 10px;
        @media (${device.tablet}) {
          margin: 0;
          margin-right: 20px;
        }
      }
    }
    p {
      text-align: left;
      color: var(--slate);
      background-color: var(--light-navy);
      padding: 20px;
      border-radius: 3px;
      margin: 40px 0 0;
      @media (${device.tablet}) {
        background-color: transparent;
        padding-left: 0;
      }
    }
    span {
      color: var(--green);
      font-family: monospace;
      font-size: 15px;
      margin-bottom: 5px;
      display: block;
      text-align: left;
    }
    h2 {
      margin: 0;
      text-align: left;
    }
  }
`;
