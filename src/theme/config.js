import kind from "../constants/theme";
import fonts from "./fonts";
import {
  Colors,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";

const defaultSpacing = {
  s: 8,
  m: 16,
  l: 24,
  xl: 40,
};

const baseConfig = { // Common config for all themes.
  loadedFont: fonts.openSans,
  spacing: defaultSpacing,
};

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
  },
};

const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
  },
};

const defaultTheme = {
  name: kind.DEFAULT,
  ...CombinedDefaultTheme,
  ...baseConfig,
};

const darkTheme = {
  name: kind.DARK,
  ...CombinedDarkTheme,
  ...baseConfig,
};

const customTheme = {
  name: kind.CUSTOM,
  dark: false, // Override wants (Overall business app colors goes here)
  ...CombinedDefaultTheme,
  ...baseConfig,
  colors: {
    ...CombinedDefaultTheme.colors,
    primary: Colors.blue500,
    accent: Colors.pinkA200,
    background: Colors.white,
    surface: Colors.white,
    text: Colors.black,
    disabled: Colors.grey500,
    placeholder: Colors.grey500,
    backdrop: Colors.black,
    notification: Colors.pinkA400,
  },
};

const themes = {
  [kind.CUSTOM]: customTheme,
  [kind.DEFAULT]: defaultTheme,
  [kind.DARK]: darkTheme,
};

export default themes;
