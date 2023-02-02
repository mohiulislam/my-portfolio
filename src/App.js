import "./App.css";
import React, { useContext } from "react";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import { Context } from "./context/SideMenuContext";
import { GlobalStyle } from "./assets/css/GlobalStyle";
import WhereWorked from "./components/WhereWorked";
import { StyledContent } from "./components/StyledComponent/StyledContent";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Work from "./components/Work";
import Footter from "./components/Footter";
import Contact from "./components/Contact";
function App() {
  const { IsOpen } = useContext(Context);
  return (
    <div className="App">
      <GlobalStyle />
        <Nav />
        <StyledContent IsOpen={IsOpen}>
          <Intro />
          <AboutMe />
          <WhereWorked />
          <LeftSidebar />
          <RightSidebar />
          <Work />
          <Contact/>
        </StyledContent>
      <Footter />
    </div>
  );
}
export default App;
