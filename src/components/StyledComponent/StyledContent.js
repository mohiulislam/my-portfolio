import styled from "styled-components";
import { device } from "../../assets/css/Variable";

export const StyledContent = styled.div`
color: var(--white);
  font-family: roboto;
  padding: 0 clamp(0px, 10vw, 200px);
  @media ${device.tablet} {
    padding: 0px 5vw;
  }
`;