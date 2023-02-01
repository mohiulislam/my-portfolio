import styled from "styled-components";

export const StyledFootter = styled.footer`
  font-family: "Fira Code", monospace;
  padding-bottom: 2vw;
  color: var(--slate);
  div:nth-child(1) {
    color: var(--slate);
    display: flex;
    justify-content: center;
    svg {
      margin: 15px;
      width: 20px;
    }
  }
  div {
    text-align: center;
    p:nth-child(2) {
      display: block;
      font-size: 13px;
    }
    a {
      text-decoration: none;
      color: var(--green);
    }
  }
`;
