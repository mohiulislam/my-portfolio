import { StyledButton } from "./StyledComponent/StyledButton";
export default function Button({ children, padding, margin, handler }) {
  return (
    <StyledButton onClick={()=>{
    handler()
    }} margin={margin} padding={padding}>
      {children}
    </StyledButton>
  );
}
