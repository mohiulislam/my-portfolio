import styled from "styled-components";
import { device } from "../../assets/css/Variable";
export const HambWrapper = styled.div`
  position: fixed;
  right: ${({ IsOpen }) => (IsOpen ? "30px" : "20px")};
  top: 15px;
  margin-top: 20px;
  display: none;
  z-index: 20;
  @media ${device.tablet} {
    display: block;
  } ;
`;