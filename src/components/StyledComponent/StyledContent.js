import styled from "styled-components";
import { device } from "../../assets/css/Variable";

export const StyledContent = styled.div`
  scroll-behavior: smooth;
  user-select: none;
  color: var(--white);
  font-family: roboto;
  pointer-events: ${({ IsOpen }) => (IsOpen ? "none" : "auto")};
  padding: 0 clamp(0px, 10vw, 200px);
  @media ${device.tablet} {
    filter: ${({ IsOpen }) => (IsOpen ? "blur(5px) brightness(0.7)" : "none")};
  }
  @media ${device.tablet} {
    padding: 0px 5vw;
  }
  overflow: hidden;
`;
