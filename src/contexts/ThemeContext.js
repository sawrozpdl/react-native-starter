import { Appearance } from "react-native";
import React, { useContext, useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import themes from "../theme";
import themeKinds from "../constants/theme";
import { THEME_PREF_KEY } from "../constants/theme";

const ThemeContext = React.createContext({});

const loadTheme = async (cb) => {
  try {
    const themePref = await AsyncStorage.getItem(THEME_PREF_KEY);

    if (themePref && themes.hasOwnProperty(themePref)) {
      cb(themePref);
    }
  } catch (e) {
    console.warn("Error loading theme preference from local storage.");
  }
};

const saveThemeLocally = async (themeName) => {
  try {
    if (themeName && themes.hasOwnProperty(themeName)) {
      await AsyncStorage.setItem(THEME_PREF_KEY, themeName);
    }
  } catch (e) {
    console.warn("Error saving theme preference to local storage.");
  }
};

const ThemeProvider = (props) => {
  const { children } = props;
  const [themeName, setThemeName] = useState(
    Appearance.getColorScheme() === "dark"
      ? themeKinds.DARK
      : themeKinds.DEFAULT
  );

  React.useEffect(() => {
    loadTheme(setThemeName);
  }, []);

  React.useEffect(() => {
    saveThemeLocally(themeName);
  }, [themeName]);

  const theme = themes[themeName];

  return (
    <ThemeContext.Provider value={{ theme, setThemeName }}>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </ThemeContext.Provider>
  );
};

const useLocalTheme = () => useContext(ThemeContext);

export { ThemeContext, ThemeProvider, useLocalTheme as default };
