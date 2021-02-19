import React from "react";
import MenuIcon from "./MenuIcon";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import LoginScreen from "../../screens/LoginScreen";
import UserDashboardScreen from "../../screens/UserDashboardScreen";

const UserStack = createStackNavigator();

const UserNavigator = () => {
  return (
    <UserStack.Navigator>
      <UserStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={
          Platform.OS === "android"
            ? {
                headerRight: () => <MenuIcon />,
              }
            : {
                headerTitle: "User Login",
              }
        }
      />
      <UserStack.Screen
        name="UserDashboardScreen"
        component={UserDashboardScreen}
        options={
          Platform.OS === "android"
            ? {
                headerRight: () => <MenuIcon />,
              }
            : {
                headerTitle: "User Dashboard",
              }
        }
      />
    </UserStack.Navigator>
  );
};

export default UserNavigator;
