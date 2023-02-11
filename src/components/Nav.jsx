import useMenu from "../Hooks/useMenu.js";
import { StyledHorzMenu, StyledNav } from "./StyledComponent/StyledNav.js";
import SideMenu from "./SideMenu.jsx";
import Button from "./Button.jsx";
import Logo from "./Logo.jsx";
function Nav() {
  const items = useMenu();
  return (
    <StyledNav>
      <Logo />
      <StyledHorzMenu>
        {items}
        <Button padding="10px 15px">Resume</Button>
      </StyledHorzMenu>
      <SideMenu />
    </StyledNav>
  );
}
export default Nav;
