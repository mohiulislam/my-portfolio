import styled from "styled-components";
import { device } from "../../assets/css/Variable";
export const StyledAvater = styled.picture`
  border-radius: 3px;
  margin: auto;
  display: block;
  width: clamp(200px, 30vw, 300px);
  aspect-ratio: 1;
  position: relative;
  margin: 140px 0 0 4vw;
  background-color: var(--green);
  @media ${device.tablet} {
    margin: 70px auto;
  }
  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    z-index: 10;
    filter: grayscale(100%) contrast(1);
    mix-blend-mode: multiply;
    transition: all 0.25s;
    &:hover {
      filter: none;
      mix-blend-mode: normal;
    }
  }
  &::after {
    content: "";
    height: 100%;
    width: 100%;
    border: 2px solid var(--green);
    position: absolute;
    display: block;
    top: 8%;
    left: 8%;
    transition: all 0.25s;
  }

  &:hover::after {
    top: 5%;
    left: 5%;
  }
`;
