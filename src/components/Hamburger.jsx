import React, { useContext } from "react";
import { Sling } from "hamburger-react";
import { HambWrapper } from "./StyledComponent/StyledHamburger";
import { Context } from "../context/SideMenuContext";
export default function Hamburger() {
  const { IsOpen, setIsOpen } = useContext(Context);
  return (
    <HambWrapper IsOpen={IsOpen}>
      <Sling
        toggled={IsOpen}
        toggle={setIsOpen}
        color="#64ffda"
        rounded
        duration={0.5}
      />
    </HambWrapper>
  );
}
