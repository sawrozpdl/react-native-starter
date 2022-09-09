import React from "react";
import { View } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import {
  Menu,
  List,
  Text,
  Drawer,
  Switch,
  TouchableRipple,
} from "react-native-paper";

import { DRAWER_SCREEN_ITEMS } from "./config";
import themeKinds from "../../constants/theme";
import { drawerStyles as styles } from "./styles";
import { getIcon } from "../../components/Icons";
import useLocalTheme from "../../contexts/ThemeContext";
import useTranslation from "../../contexts/LocaleContext";
import { LOCALE_OPTIONS, LOCALE_MAP } from "../../constants/locale";

function DrawerContent(props) {
  const { theme, setThemeName } = useLocalTheme();

  const { t, locale, setLanguage } = useTranslation();

  const activeScreen = props.state.routes[props.state.index].name;

  const handleNavigation = (toScreen) => {
    if (toScreen !== activeScreen) props.navigation.navigate(toScreen);
  };

  const isDarkTheme = theme.name === themeKinds.DARK;

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? themeKinds.DEFAULT : themeKinds.DARK;
    setThemeName(newTheme);
  };

  // Location to put the locale menu top of the drawer
  const [localeMenuLoc, setLocaleMenuLoc] = React.useState({
    x: 0,
    y: 0,
  });

  const [isLanguageControlVisible, setIsLanguageControlVisible] =
    React.useState(false);

  const handleLanguageSet = (event) => {
    const { nativeEvent } = event;
    setLocaleMenuLoc({
      x: nativeEvent.pageX,
      y: nativeEvent.pageY,
    });
    setIsLanguageControlVisible(true);
  };

  const handleLocaleChange = (loc) => {
    setIsLanguageControlVisible(false);
    setLanguage(loc);
  };

  return (
    <DrawerContentScrollView
      {...props}
      alwaysBounceVertical={false}
      style={[
        styles.drawerContent,
        {
          backgroundColor: theme.colors.surface,
        },
      ]}
    >
      <Drawer.Section title={t("pages")}>
        {DRAWER_SCREEN_ITEMS(t).map((item, index) => (
          <Drawer.Item
            label={item.label}
            icon={getIcon(item.icon)}
            active={activeScreen === item.screen}
            key={index}
            onPress={() => handleNavigation(item.screen)}
          />
        ))}
      </Drawer.Section>

      <Drawer.Section title={t("controls")}>
        <TouchableRipple onPress={toggleTheme}>
          <View style={styles.preference}>
            <Text variant="labelLarge">{t("dark_theme")}</Text>
            <View pointerEvents="none">
              <Switch value={isDarkTheme} />
            </View>
          </View>
        </TouchableRipple>

        <Menu
          visible={isLanguageControlVisible}
          onDismiss={() => setIsLanguageControlVisible(false)}
          anchor={localeMenuLoc}
        >
          {LOCALE_OPTIONS.map((opt, idx) => (
            <Menu.Item
              key={idx}
              onPress={() => handleLocaleChange(opt.value)}
              title={opt.label}
            />
          ))}
        </Menu>
        <List.Section>
          <TouchableRipple onPress={handleLanguageSet}>
            <List.Item
              title={t("locale")}
              description={`${t("selected")}: ${LOCALE_MAP[locale]}`}
            />
          </TouchableRipple>
        </List.Section>
      </Drawer.Section>
    </DrawerContentScrollView>
  );
}

export default DrawerContent;
