import React, { useContext, useMemo } from "react";
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
  let items = useMemo(
    () =>
      navItems.map((item, index) => {
        return (
          <Styleda
            style={{
              opacity: "0",
              animation: `forwards fade_in 1s 0.${index + 1}s`,
            }}
            onClick={() => {
              setIsOpen(false);
            }}
            href={"#" + (index + 1)}
            key={Math.random()}
          >
            <span style={{ fontFamily: "'Fira Code', monospace" }}>
              0{index + 1}.
            </span>
            {item}
          </Styleda>
        );
      }),
    []
  );
  return items;
}
export default WithMenu;
