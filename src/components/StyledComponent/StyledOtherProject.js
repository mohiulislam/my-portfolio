import styled from "styled-components";

export const StyledOtherProject = styled.a`
  :hover {
    transform: translateY(-5px);
  }
  :hover h3 {
    color: var(--green);
  }
  transition: all 0.25s;
  display: block;
  background-color: var(--light-navy);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  padding: 30px;
  div {
    display: flex;
    justify-content: space-between;
    svg {
      width: clamp(25px, 5vw, 40px);
      :first-child {
        color: var(--green);
      }
    }
  }
  p {
    color: var(--slate);
  }
  ul {
    display: flex;
    li {
      font-family: var(--font-mono);
      margin-right: 10px;
      color: var(--slate);
      font-size: 12px;
    }
  }
`;
