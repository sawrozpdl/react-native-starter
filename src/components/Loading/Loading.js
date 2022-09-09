import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import styles from "./styles";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

export default Loading;
