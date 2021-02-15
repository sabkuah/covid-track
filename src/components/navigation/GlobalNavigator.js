import React from "react";
import MenuIcon from "./MenuIcon";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import GlobalScreen from "../../screens/GlobalScreen";
import ContinentScreen from "../../screens/ContinentScreen";

const GlobalStack = createStackNavigator();

const GlobalNavigator = () => {
  return (
    <GlobalStack.Navigator>
      <GlobalStack.Screen
        name="GlobalScreen"
        component={GlobalScreen}
        options={
          Platform.OS === "android"
            ? {
                headerRight: () => <MenuIcon />,
              }
            : {
                headerTitle: "Single-Layer Stack",
              }
        }
      />
      <GlobalStack.Screen
        name="ContinentScreen"
        component={ContinentScreen}
        options={
          Platform.OS === "android"
            ? {
                headerRight: () => <MenuIcon />,
              }
            : {
                headerTitle: "Single-Layer Stack",
              }
        }
      />
    </GlobalStack.Navigator>
  );
};

export default GlobalNavigator;
