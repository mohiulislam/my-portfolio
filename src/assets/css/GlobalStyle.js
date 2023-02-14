import { createGlobalStyle } from "styled-components";
import { variables } from "./Variable";
export const GlobalStyle = createGlobalStyle`
${variables}
html{
scroll-behavior: smooth;
}
body{
overflow: ${({ IsOpen }) => (IsOpen ? "hidden" : "visible")};
margin: 0;
padding: 0;
box-sizing: border-box;
& .App .content {
     padding: 0 clamp(0px,8%,200px);
  }
}
::-webkit-scrollbar {
        width: 10px;
        background-color: var(--navy);
      }
::-webkit-scrollbar-thumb {
        background-color: var(--dark-slate);
        border-radius: 10px;
      }
ul{
margin: 0;
padding: 0;
list-style-type: none;
}
.App {
  background-color: var(--navy);
}
`;
