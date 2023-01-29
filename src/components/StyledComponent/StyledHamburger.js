import styled from "styled-components";
import { device } from "../../assets/css/Variable";
export const HambWrapper = styled.div`
  margin-top: 20px;
  display: none;
  z-index: 20;
  @media ${device.tablet} {
    display: block;
  } ;
`;
