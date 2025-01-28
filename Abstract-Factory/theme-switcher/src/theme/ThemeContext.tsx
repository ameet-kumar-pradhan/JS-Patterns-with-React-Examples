// ThemeContext.tsx
import React, { createContext, useContext, useState } from "react";
import { ThemeFactory } from "../interfaces";
import { LightThemeFactory } from "./LightThemeFactory";
import { DarkThemeFactory } from "./DarkThemeFactory";

const ThemeContext = createContext<ThemeFactory>(new LightThemeFactory());

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeFactory, setThemeFactory] = useState<ThemeFactory>(
    new LightThemeFactory()
  );

  const toggleTheme = () => {
    setThemeFactory(
      themeFactory instanceof LightThemeFactory
        ? new DarkThemeFactory()
        : new LightThemeFactory()
    );
  };

  return (
    <ThemeContext.Provider value={themeFactory}>
      {children}
      <button
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          padding: "10px 20px",
          backgroundColor: "#444",
          color: "#fff",
        }}
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
};
