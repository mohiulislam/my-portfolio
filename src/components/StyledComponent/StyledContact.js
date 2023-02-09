import styled from "styled-components";

export const StyledContact = styled.div`
  padding-top: clamp(90px, 15vw, 100px);
  h5 {
    font-weight: 400;
    color: var(--green);
    font-family: var(--font-mono);
    text-align: center;
    margin: 0;
  }
  h2 {
    font-size: clamp(25px, 5vw, 60px);
    text-align: center;
    margin-top: 20px;
  }
  p {
    text-align: center;
    max-width: 500px;
    margin: auto;
    color: var(--slate);
  }
  button {
    display: block;
    margin: 40px auto;
    font-family: var(--font-mono);
  }
`;
