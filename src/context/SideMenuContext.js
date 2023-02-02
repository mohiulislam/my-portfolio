import { createContext, useState } from "react";
import React from "react";
const Context = createContext();
function SideMenuContext({ children }) {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <Context.Provider value={{ IsOpen, setIsOpen }}>
      {children}
    </Context.Provider>
  );
}
export default SideMenuContext;
export { Context };
