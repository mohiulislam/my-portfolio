import styled from "styled-components";
import { device } from "../../assets/css/Variable";
export const StyledWhereWorked = styled.div`
  width: clamp(0px, 70vw, 800px);
  margin: auto;
  padding-top: clamp(90px, 15vw, 100px);
  @media ${device.tablet} {
    width: 100%;
  }
  h1 {
    font-size: clamp(26px, 5vw, 32px);
    ::before {
      content: "02.";
      position: relative;
      margin-right: 10px;
      color: var(--green);
      font-family: "Fira Code", monospace;
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
        font-family: "Fira Code", monospace;
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
