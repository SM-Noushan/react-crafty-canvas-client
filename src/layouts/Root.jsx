import React, { createContext } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/NavBar";

export const ThemeContext = createContext(null);

const Root = () => {
  const [theme, setTheme] = React.useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <NavBar />
      <Outlet />
    </ThemeContext.Provider>
  );
};

export default Root;
