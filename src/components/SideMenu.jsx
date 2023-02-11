import React, { useContext, useRef } from "react";
import useMenu from "../Hooks/useMenu";
import { Context } from "../context/SideMenuContext";
import { StyledSideMenu } from "./StyledComponent/StyledSideMenu";
import Button from "./Button";
import useOnClickOutside from "../Hooks/useOnClickOutside";
import Hamburger from "./Hamburger";
function SideMenu() {
  const { IsOpen, setIsOpen } = useContext(Context);
  const wrapperref = useRef();
  const items = useMenu();
  useOnClickOutside(wrapperref, () => {
    setIsOpen(false);
  });
  return (
    <StyledSideMenu ref={wrapperref} IsOpen={IsOpen}>
      <Hamburger />
      {items}
      <Button padding="5% 10%">Resume</Button>
    </StyledSideMenu>
  );
}
export default SideMenu;
