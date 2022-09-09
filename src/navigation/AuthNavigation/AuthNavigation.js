import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { NAV_SCREENS } from "./config";
import DrawerContent from "./DrawerContent";
import useTranslation from "../../contexts/LocaleContext";

const Drawer = createDrawerNavigator();

function AuthNavigation() {
  const { t } = useTranslation();

  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      {NAV_SCREENS(t).map(({ name, Component, options }, index) => (
        <Drawer.Screen
          key={index}
          name={name}
          component={Component}
          options={options}
        />
      ))}
    </Drawer.Navigator>
  );
}

export default AuthNavigation;
