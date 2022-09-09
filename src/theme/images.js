import { Asset } from "expo-asset";

const images = {
  icon: require("../../assets/images/icon.png"), // For reference
};

export const imageAssets = Object.keys(images).map((key) =>
  Asset.fromModule(images[key]).downloadAsync()
);

export default images;
