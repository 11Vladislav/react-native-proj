import React, {useState} from "react";
import {} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";
import PostsScreen from "./Screens/main/PostsScreen";
import CreatePostsScreen from "./Screens/main/CreatePostsScreen";
import CommentsScreen from "./Screens/main/CommentsScreen";
import MapScreen from "./Screens/main/MapScreen";
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

const useRoute = (isAuth) =>{
  if(!isAuth){
    return( 
    <AuthStack.Navigator>
      <AuthStack.Screen 
        options={{headerShown: false}} 
        name="Registration" 
        component={RegistrationScreen} />
      <AuthStack.Screen 
        options={{headerShown: false}} 
        name="Login" 
        component={LoginScreen} />
  </AuthStack.Navigator>
  )}
  return( 
    <MainTab.Navigator>
      <MainTab.Screen options={{headerShown: false}} 
        name="PostsScreen" 
        component={PostsScreen} />
      <MainTab.Screen options={{headerShown: false}} 
        name="CreatePostsScreen" 
        component={CreatePostsScreen} />
      <MainTab.Screen options={{headerShown: false}} 
        name="CommentsScreen" 
        component={CommentsScreen} />
  </MainTab.Navigator>
)}

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


