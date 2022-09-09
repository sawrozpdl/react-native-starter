import React from "react";
import { Title } from "react-native-paper";
import { View, StyleSheet } from "react-native";

import useTranslation from "../contexts/LocaleContext";

export default HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Title>{t("hello_world")}</Title>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
