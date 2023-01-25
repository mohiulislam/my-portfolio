import React, { useState } from "react";
import { navItems } from "../data/navData";
import styled from "styled-components";
const StyledLi=styled.li`
  &:hover{color:var(--green)}
`;
function WithMenu() {
  let items = navItems.map((item, index) => {
    return (
      <StyledLi  key={Math.random()}>
        <span style={{ fontFamily: "monospace" }}>0{index + 1}.</span>
        {item}
      </StyledLi>
    );
  });
  return items;
}
export default WithMenu;
