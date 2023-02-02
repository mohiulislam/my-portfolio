import styled from "styled-components";
import { device } from "../../assets/css/Variable";
export const StyledSideMenu = styled.div`
  height: 100vh;
  width: 0;
  @media ${device.tablet} {
    width: ${({ IsOpen }) => (IsOpen ? 50 : 0)}%;
  }
  background-color: var(--light-navy);
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 0.25s;
  list-style-type: none;
  color: var(--white);
  font-family: roboto;
  font-size: clamp(0, 2.5vw, 20px);
  & button {
    margin-top: 40px;
  }
  & a {
    margin: 2vw;
  }
  & span {
    color: var(--green);
    display: block;
    margin-bottom: 10px;
    text-align: center;
  }
`;
