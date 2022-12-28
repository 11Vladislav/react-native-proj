import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";
import CreatePostsScreen from "./Screens/main/CreatePostsScreen";
import CommentsScreen from "./Screens/main/CommentsScreen";
import ProfileScreen from "./Screens/main/ProfileScreen";


const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) =>{
    if(!isAuth){
      return( 
      <AuthStack.Navigator>
        <AuthStack.Screen 
          options={{headerShown: false
        }} 
          name="Registration" 
          component={RegistrationScreen} />
        <AuthStack.Screen 
          options={{headerShown: false
        }} 
          name="Login" 
          component={LoginScreen} />
    </AuthStack.Navigator>
    )}
    return( 
      <MainTab.Navigator tabBarOptions={{ showLabel: false }}>
        <MainTab.Screen options={{headerShown: false,
            tabBarIcon: ({ focused, size, color }) => (
                <SimpleLineIcons 
                    name="grid" 
                    size={size}
                    color={color}
            />
            ),    
        }} 
          name="CommentsScreen" 
          component={CommentsScreen} />
      <MainTab.Screen options={{headerShown: false, 
        tabBarIcon: ({ focused, size, color }) => (
        <FontAwesome5 
              name="plus" 
              size={size}
              color={color}
          /> 
        ),         
          }} 
      name="CreatePostsScreen" 
      component={CreatePostsScreen} />
       <MainTab.Screen options={{headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <FontAwesome5 
                name="user" 
                size={size}
                color={color}
      />
      ),         
   }} 
    name="ProfileScreen" 
    component={ProfileScreen} />      
    </MainTab.Navigator>
  )}

  const styles = StyleSheet.create({
    plus:{
      flex: 1,
      alignItems: "center",
      justufyContent: "center",
      width: 70,
      height: 40,
      backgroundColor: "#FF6C00",
      borderRadius: 20,
      color: "#fff",

    },
  })

