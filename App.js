import React, {useState} from "react";
import {} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {useRoute} from './router';
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';

const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const routing = useRoute({});

  if (!isReady) {
    return <AppLoading startAsync={loadFonts}
      onFinish={() =>
      setIsReady(true)}
      onError={console.warn}
    />
  }
  return (
    <NavigationContainer>
      {routing}
    </NavigationContainer>
  );
}


