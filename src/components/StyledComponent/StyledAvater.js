import styled from "styled-components";
import { device } from "../../assets/css/Variable";
export const StyledAvater = styled.picture`
  margin: auto;
  display: block;
  width: clamp(0px, 30vw, 300px);
  aspect-ratio: 1;
  position: relative;
  margin: 140px 0 0 4vw;
  @media ${device.tablet} {
    margin: 70px auto;
    
  }
  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 3px;
    position: absolute;
    z-index: 10;
    filter: grayscale(100%);
    transition: all 0.25s;
    &:hover {
      filter: unset;
    }
  }
  &::after {
    content: "";
    height: 100%;
    width: 100%;
    border: 2px solid var(--green);
    position: absolute;
    display: block;
    top: 20px;
    left: 20px;
    transition: all 0.25s;
  }

  &:hover::after {
    top: 10px;
    left: 10px;
  }
`;
