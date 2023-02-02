import React from "react";
import { navItems } from "../data/navData";
import styled from "styled-components";
const Styleda = styled.a`
  color: var(--slate);
  text-decoration: none;
  :hover {
    color: var(--green);
  }
`;
function WithMenu() {
  let items = navItems.map((item, index) => {
    console.log(index);
    return (
      <Styleda href={"#" + (index + 1)} key={Math.random()}>
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
