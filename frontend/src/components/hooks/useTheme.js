// src/hooks/useTheme.js
import { useState } from "react";

const useTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return { isDarkTheme, toggleTheme };
};

export default useTheme;
