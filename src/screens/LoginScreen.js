import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-native-paper";
import { View, StyleSheet } from "react-native";

import { setUser } from "../slices/me.slice";
import useTranslation from "../contexts/LocaleContext";

export default LoginScreen = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setUser({ id: 1 }));
  };

  return (
    <View style={styles.container}>
      <Button icon={"login"} mode="outlined" onPress={handleLogin}>
        {t("log_in")}
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
