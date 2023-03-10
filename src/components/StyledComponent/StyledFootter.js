import styled from "styled-components";

export const StyledFootter = styled.footer`
  font-family: var(--font-mono);
  padding-bottom: 2vw;
  color: var(--slate);
  div:nth-child(1) {
    color: var(--slate);
    display: flex;
    justify-content: center;
    svg {
      margin: 15px;
      width: 20px;
      transition: all 0.25s;
      cursor: pointer;
      :hover {
        color: var(--green);
        transform: translateY(-5px);
      }
    }
  }
  div {
    text-align: center;
    p:nth-child(1) {
      font-size: 14px;
      span {
        color: var(--green);
      }
    }
    p:nth-child(2) {
      font-size: 12px;
    }
    a {
      text-decoration: none;
      color: var(--green);
    }
  }
`;
