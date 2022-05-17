import React, { createContext, useContext, useState } from "react";
import { StyleRules } from "@material-ui/styles/withStyles";
import { makeStyles } from "@material-ui/core/styles";
import { ClassNameMap } from "@material-ui/styles";

import * as data from "../samples/data.json";

type theme = StyleRules<{}, string>;
type classes = ClassNameMap<any>;

interface IThemeContext {
  theme: theme;
  classes: classes;
  updateTheme: (selector: string, rules: Object) => void;
  contents: contents;
  setContents: (state: contents) => void;
}

const ThemeContext = createContext<IThemeContext | null>(null);
const themeData = data.theme as theme;
const contentsData = data.contents as contents;
const ThemeProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [theme, setTheme] = useState<theme>(themeData);
  const [contents, setContents] = useState(contentsData);
  const useStyles = makeStyles(theme);
  const classes = useStyles();

  const updateTheme = (selector: string, rules = {}) => {
    const updatedTheme = {
      ...theme,
      [selector]: { ...theme[selector], ...rules },
    };
    setTheme(updatedTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, classes, updateTheme, contents, setContents }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  const { theme, classes, updateTheme, contents, setContents } = context;
  return { theme, classes, updateTheme, contents, setContents };
}
