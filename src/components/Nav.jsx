import React, { useContext } from "react";
import { brand } from "../data/navData.js";

import useMenu from "../ren/useMenu.js";
import { Context } from "../context/SideMenuContext.js";
import {
  Brand,
  StyledHorzMenu,
  StyledNav,
} from "./StyledComponent/StyledNav.js";
import SideMenu from "./SideMenu.jsx";
import Hamburger from "./Hamburger.jsx";
import Button from "./Button.jsx";

function Nav() {
  const items = useMenu();
  return (
    <StyledNav>
      <Brand>{brand}</Brand>
      <StyledHorzMenu>
        {items}
        <Button padding="10px 15px">Resume</Button>
      </StyledHorzMenu>
      <Hamburger />
      <SideMenu />
    </StyledNav>
  );
}
export default Nav;
