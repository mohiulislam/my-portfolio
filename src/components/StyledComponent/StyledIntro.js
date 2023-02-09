import styled from "styled-components";

export const StyledIntro = styled.div`
  max-width: 1000px;
  & h6 {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(14px, 2vw, 20px);
  }
  & h1 {
    color: var(--white);
    font-family: roboto;
    font-size: clamp(40px, 7vw, 80px);
    margin: 15px 0;
    line-height: 0.95;
  }
  & h1 + h1 {
    color: var(--slate);
  }
  & p {
    color: var(--slate);
    max-width: 500px;
    font-family: roboto;
    line-height: 1.7;
  }
  button {
    margin-top: 5%;
  }
`;
