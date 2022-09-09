import { StyleSheet } from "react-native";

const drawerStyles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    height: 56,
    paddingHorizontal: 28,
  },
  badge: {
    alignSelf: "center",
  },
});

export { drawerStyles };
