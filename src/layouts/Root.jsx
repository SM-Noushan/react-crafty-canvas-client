import React, { createContext } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/NavBar";
import FooTer from "../components/shared/FooTer";
import GoToTop from "../components/shared/GoToTop";
import ScrollToTop from "../components/shared/ScrollToTop";

export const ThemeContext = createContext(null);

const Root = () => {
  const [theme, setTheme] = React.useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ScrollToTop>
        <GoToTop />
        <NavBar />
        <Outlet />
        <FooTer />
      </ScrollToTop>
    </ThemeContext.Provider>
  );
};

export default Root;
