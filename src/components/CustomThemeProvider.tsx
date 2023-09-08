"use client";

import themes from "@/lib/themes.json";
import * as React from "react";
import { ReactNode, useEffect, useState } from "react";

type CustomThemeContextType = {
  currentTheme: string;
  setCurrentTheme: (theme: string) => void;
};

type CustomThemeProviderProps = {
  children: ReactNode;
};

export const CustomThemeContext = React.createContext<CustomThemeContextType>({
  currentTheme: themes[0].theme,
  setCurrentTheme: () => {},
});

export function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("currentTheme") || themes[0].theme,
  );

  useEffect(() => {}, [currentTheme]);

  function handleThemeChange(theme: string) {
    setCurrentTheme(theme);
    localStorage.setItem("currentTheme", theme);
  }

  return (
    <CustomThemeContext.Provider
      value={{
        currentTheme,
        setCurrentTheme: handleThemeChange,
      }}
    >
      {children}
    </CustomThemeContext.Provider>
  );
}

export function useTheme() {
  const { currentTheme, setCurrentTheme } =
    React.useContext(CustomThemeContext);
  return { currentTheme, setCurrentTheme };
}
