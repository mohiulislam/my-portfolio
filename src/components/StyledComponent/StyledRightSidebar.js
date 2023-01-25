import styled from "styled-components";

export const StyledRightSideBar = styled.div`
  height: 100vh;
  width: 10vw;
  position: fixed;
  right: 0;
  top: 0;
  div {
    position: absolute;
    bottom: 20vh;
    width: 100%;
    &:hover span{
      transform: translateY(-3px);
      color: var(--green);
    }
    span {
      color: var(--slate);
      transition: all 0.25s;
      writing-mode: vertical-rl;
      display: block;
      margin: auto;
    }
  }
  div + span {
    width: 2px;
    height: 15vh;
    display: block;
    background-color: var(--slate);
    position: absolute;
    right: 50%;
    bottom: 00px;
  }
`;
