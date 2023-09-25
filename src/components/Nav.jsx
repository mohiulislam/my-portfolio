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
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://docs.google.com/document/d/18ztBMDbymVVk2AqkBL1u33Ch1e8e49j8OsstFgd_biU"
        >
          <Button padding="10px 15px">Resume</Button>
        </a>
      </StyledHorzMenu>
      <SideMenu />
    </StyledNav>
  );
}
export default Nav;
