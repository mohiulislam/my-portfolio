import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import SideMenuContext from "./context/SideMenuContext";
import { GlobalStyle } from "./assets/css/GlobalStyle";
import WhereWorked from "./components/WhereWorked";
import { StyledContent } from "./components/StyledComponent/StyledContent";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Work from "./components/Work";
import Footter from "./components/Footter";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <SideMenuContext>
        <Nav />
      </SideMenuContext>
      <StyledContent>
        <Intro />
        <AboutMe />
        <WhereWorked />
        <LeftSidebar />
        <RightSidebar />
        <Work/>
      </StyledContent>
      <Footter/>
    </div>
  );
}
export default App;
