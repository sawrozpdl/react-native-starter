import LoginScreen from "../../screens/LoginScreen";

export const SCREENS = {
  login: "login",
};

export const NAV_SCREENS = (t) => [
  {
    name: SCREENS.login,
    Component: LoginScreen,
    options: {
      title: t("sign_in"),
    },
  },
];
