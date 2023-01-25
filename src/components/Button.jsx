import { StyledButton } from "./StyledComponent/StyledButton";
export default function Button({ children, padding, margin }) {
  return (
    <StyledButton margin={margin} padding={padding}>
      {children}
    </StyledButton>
  );
}
