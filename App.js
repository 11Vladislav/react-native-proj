import React from "react";
import { StyleSheet, View} from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  // const routing = useRoute(true);
  return (
    <View style={styles.container}>
      <RegistrationScreen />
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
