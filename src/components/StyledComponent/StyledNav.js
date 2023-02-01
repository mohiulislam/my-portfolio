import styled from "styled-components";
import { device } from "../../assets/css/Variable";

export const StyledLogo = styled.div`
  width: 45px;
  height: 45px;
  margin-top: 20px;
  font-family: roboto;
  position: relative;
  margin-left: 5px;
  span {
    color: var(--green);
    font-size: 20px;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
  }
`;
export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: clamp(90px, 15vw, 100px);
  align-items: center;
  background-color: rgba(var(--dark-navy), 0.75);
  position: sticky;
  top: 0;
  color: var(--white);
  backdrop-filter: blur(4px);
  z-index: 100;
  padding: 0 25px;
`;
export const StyledHorzMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  width: 70%;
  margin-right: 5%;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  & span {
    color: var(--green);
  }
  @media ${device.tablet} {
    display: none;
  }
`;
