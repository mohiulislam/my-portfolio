import styled, { keyframes } from "styled-components";
const fade_in = keyframes`
from{
  opacity: .0001;
}
to{
  opacity:1;
}
`;
export const StyledWorkDescription = styled.div`
  animation: ${fade_in} .15s;
  h3 {
    margin: 0;
    color: var(--white);
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
