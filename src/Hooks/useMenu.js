import React, { useContext } from "react";
import { navItems } from "../data/navData";
import styled from "styled-components";
import { Context } from "../context/SideMenuContext";
const Styleda = styled.a`
  color: var(--slate);
  text-decoration: none;
  :hover {
    color: var(--green);
  }
`;
function WithMenu() {
  const { setIsOpen } = useContext(Context);
  let items = navItems.map((item, index) => {
    return (
      <Styleda
        onClick={() => {
          setIsOpen(false);
        }}
        href={"#" + ["about", "experience", "work", "contact"][index]}
        key={Math.random()}
      >
        <span style={{ fontFamily: "'Fira Code', monospace" }}>
          0{index + 1}.
        </span>
        {item}
      </Styleda>
    );
  });
  return items;
}
export default WithMenu;
