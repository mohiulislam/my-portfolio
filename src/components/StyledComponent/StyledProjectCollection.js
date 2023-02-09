import styled from "styled-components";
import { device } from "../../assets/css/Variable";

export const StyledProjectCollection = styled.div`
  h2 {
    text-align: center;
  }
  h4 {
    font-family: var(--font-mono);
    text-align: center;
    color: var(--green);
    font-weight: 100;
  }
  > div {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    @media (max-width: 980px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }
  padding-top: 18vw;
`;
