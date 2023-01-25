import styled, { css } from "styled-components";
import { device } from "../../assets/css/Variable";
export const StyledWhereWorked = styled.div`
  width: clamp(0px, 70vw, 800px);
  margin: auto;
  margin-top: 10vw;
  & > h1 {
    color: var(--white);
    font-family: roboto;
    font-size: clamp(0px, 4vw, 32px);
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
  & h1 + div {
    color: var(--slate);
    display: grid;
    gap: 5vw;
    margin: 40px auto;
    grid-template-columns: 1fr 3fr;
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
    & div:nth-child(1) {
      &::-webkit-scrollbar {
        height: 10px;
      }
      display: flex;
      flex-direction: column;
      position: relative;
      @media (max-width: 600px) {
        flex-direction: row;
        overflow-x: auto;
      }
      & span {
        height: 50px;
        width: 2px;
        background-color: var(--green);
        display: block;
        position: absolute;
        transition: all 0.25s;
        transform: translateY(${(props) => props.BtnIndex * 100}%);
        @media (max-width: 600px) {
          height: 2px;
          min-width: 120px;
          bottom: 0;
          transform: translateX(${(props) => props.BtnIndex * 100}%);
        }
      }
      & button {
        font-family: monospace;
        text-align: left;
        padding-left: 15px;
        color: var(--slate);
        height: 50px;
        background-color: transparent;
        border: none;
        border-left: 3px solid var(--lightest-navy);
        transition: all 0.25s;
        text-align: center;
        @media (max-width: 600px) {
          min-width: 120px;
          border: none;
          padding: 0;
        }
        &:hover {
          background-color: var(--green-tint);
          color: var(--green);
        }
      }
    }
  }
  .active {
    color: var(--green) !important;
  }
`;
