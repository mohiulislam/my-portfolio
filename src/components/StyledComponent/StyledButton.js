import styled from "styled-components";

export const StyledButton = styled.button`
  color: var(--green);
  background-color: transparent;
  border: 1px solid var(--green);
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  border-radius: 4px;
  transition: all 0.15s;
  font-size: 14px;
  &:hover {
    background-color: var(--green-tint);
  }
`;
