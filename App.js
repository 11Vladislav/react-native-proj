import React, {useState} from "react";
import {} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";
import PostsScreen from "./Screens/main/PostsScreen";
import Home from "./Screens/main/Home";
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';

const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};

const MainStack = createStackNavigator();
const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return <AppLoading startAsync={loadFonts}
      onFinish={() =>
      setIsReady(true)}
      onError={console.warn}
    />
  }
  return (
    <NavigationContainer>      
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen 
          options={{headerShown: false}} 
          name="Registration" 
          component={RegistrationScreen} />
        <MainStack.Screen 
          options={{headerShown: false}} 
          name="Login" 
          component={LoginScreen} />
        {/* <MainStack.Screen
          name="Home"
          component={Home}
          options={{ title: "Start screen" }}
        /> */}
        <MainStack.Screen 
          name="PostsScreen" 
          component={PostsScreen}
          options={{headerShown: false}}/>
      </MainStack.Navigator>
  </NavigationContainer>
  );
}
