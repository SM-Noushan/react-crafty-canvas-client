import { useContext } from "react";
import { ThemeContext } from "@emotion/react";

const useTheme = () => {
  const { themeType, setThemeType } = useContext(ThemeContext);
  return { themeType, setThemeType };
};

export default useTheme;
