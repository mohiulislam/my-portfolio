import styled from "styled-components";
import { device } from "../../assets/css/Variable";
export const StyledLeftSideBar = styled.div`
  height: 100vh;
  width: 10vw;
  background-color: transparent;
  position: fixed;
  left: 0;
  top: 0;
  @media ${device.tablet} {
    display: none;
  }
  & div {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 20vh;

    & svg {
      color: var(--slate);
      width: 20px;
      height: 100%;
      margin: 15px auto;
      transition: all 0.25s;
      &:hover {
        transform: translateY(-3px);
        color: var(--green);
      }
    }
  }
  & div + span {
    width: 2px;
    height: 15vh;
    display: block;
    background-color: var(--slate);
    position: absolute;
    right: 50%;
    bottom: 00px;
  }
`;
