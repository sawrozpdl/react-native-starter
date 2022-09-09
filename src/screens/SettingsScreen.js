import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-native-paper";
import { View, StyleSheet } from "react-native";

import { flush } from "../slices/me.slice";
import useTranslation from "../contexts/LocaleContext";

export default SettingsScreen = () => {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const handleLogout = () => {
    dispatch(flush());
  };

  return (
    <View style={styles.container}>
      <Button icon={"logout"} mode="outlined" onPress={handleLogout}>
        {t("log_out")}
      </Button>
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
