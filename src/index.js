import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SideMenuContext from "./context/SideMenuContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SideMenuContext>
    <App />
  </SideMenuContext>
);
reportWebVitals();
