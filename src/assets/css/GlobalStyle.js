import { createGlobalStyle } from "styled-components";
import { variables } from "./Variable";
export const GlobalStyle = createGlobalStyle`
${variables}
body{
margin: 0;
padding: 0;
box-sizing: border-box;
& .App .content {
     padding: 0 clamp(0px,8%,200px);
  }
}
 &::-webkit-scrollbar {
        width: 10px;
        background-color: var(--navy);
      }
      ::-webkit-scrollbar-thumb {
        background-color: var(--dark-slate);
        border-radius: 10px;
      }
`;
