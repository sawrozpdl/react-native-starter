import { useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useLocalTheme from "./contexts/ThemeContext";
import { AuthNavigation, PublicNavigation } from "./navigation";

const AppContent = () => {
  const me = useSelector((state) => state.me);

  const { theme } = useLocalTheme();

  const isLoggedIn = Boolean(me.user?.id);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        {isLoggedIn ? <AuthNavigation /> : <PublicNavigation />}
        <StatusBar style={theme.dark ? "light" : "dark"} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppContent;
