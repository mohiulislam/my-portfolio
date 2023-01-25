import styled from "styled-components";
import { device } from "../../assets/css/Variable";
export const HambWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: none;
  z-index: 20;
  position: fixed;
  @media ${device.tablet} {
    display: block;
  };`