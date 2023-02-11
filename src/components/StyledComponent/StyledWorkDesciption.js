import styled, { keyframes } from "styled-components";
export const StyledWorkDescription = styled.div`
  h3 {
    margin: 0;
    color: var(--white);
    font-size: 22px;
    span {
      color: var(--green);
    }
  }
  h5 {
    margin-top: 6px;
  }
  p {
    position: relative;
    padding-left: 20px;
    ::before {
      content: "▹";
      position: absolute;
      left: 0;
      color: var(--green);
    }
  }
`;
