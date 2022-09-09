import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NAV_SCREENS } from "./config";
import useTranslation from "../../contexts/LocaleContext";

const Stack = createNativeStackNavigator();

function PublicNavigation() {
  const { t } = useTranslation();
  return (
    <Stack.Navigator>
      {NAV_SCREENS(t).map((screen, index) => (
        <Stack.Screen
          key={index}
          name={screen.name}
          component={screen.Component}
          options={screen.options}
        />
      ))}
    </Stack.Navigator>
  );
}

export default PublicNavigation;
