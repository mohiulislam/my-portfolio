import React, { useContext } from "react";
import useMenu from "../ren/useMenu";
import { Context } from "../context/SideMenuContext";
import { StyledSideMenu } from "./StyledComponent/StyledSideMenu";
import Button from "./Button";
function SideMenu() {
  const { IsOpen } = useContext(Context);
  const items = useMenu();
  return (
    <StyledSideMenu IsOpen={IsOpen}>
      {items}
      <Button padding="20px 50px">Resume</Button>
    </StyledSideMenu>
  );
}
export default SideMenu;
