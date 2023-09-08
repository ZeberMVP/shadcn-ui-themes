"use client";

import themes from "@/lib/themes.json";
import * as React from "react";
import { ReactNode, useState } from "react";

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
  let storedTheme = "default";

  if (typeof window !== "undefined") {
    storedTheme = window.localStorage.getItem("currentTheme") || "default";
  }

  const [currentTheme, setCurrentTheme] = useState(storedTheme);

  function handleThemeChange(theme: string) {
    setCurrentTheme(theme);
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
