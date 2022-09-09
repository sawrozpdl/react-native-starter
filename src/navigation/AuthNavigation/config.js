import HomeScreen from "../../screens/HomeScreen";
import SettingsScreen from "../../screens/SettingsScreen";

export const SCREENS = {
  home: "home",
  settings: "settings",
};

export const NAV_SCREENS = (t) => [
  {
    name: SCREENS.home,
    Component: HomeScreen,
    options: {
      title: t("welcome"),
    },
  },
  {
    name: SCREENS.settings,
    Component: SettingsScreen,
    options: {
      title: t("settings"),
    },
  },
];

export const DRAWER_SCREEN_ITEMS = (t) => [
  {
    icon: "home",
    label: t("home"),
    screen: SCREENS.home,
  },
  {
    icon: "settings",
    label: t("settings"),
    screen: SCREENS.settings,
  },
];
