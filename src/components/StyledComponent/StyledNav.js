import styled from "styled-components";
import { device } from "../../assets/css/Variable";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: clamp(0px, 15vw, 100px);
  align-items: center;
  background-color: rgba(var(--dark-navy), 0.75);
  position: sticky;
  top: 0;
  color: var(--white);
  backdrop-filter: blur(4px);
  z-index: 100;
`;
export const Brand = styled.span`
  font-family: sans-serif;
  margin-left: 20px;
  font-size: 20px;
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
