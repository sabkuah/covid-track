import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen";
import { FontAwesome } from "@expo/vector-icons";
import GlobalNavigator from "./GlobalNavigator";
import UserNavigator from "./UserNavigator";

const BottomTab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen
        name="Global"
        component={GlobalNavigator}
        options={{
          tabBarIcon: () => <FontAwesome name="globe" size={30} />,
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: () => <FontAwesome name="home" size={30} /> }}
      />
      <BottomTab.Screen
        name="User"
        component={UserNavigator}
        options={{ tabBarIcon: () => <FontAwesome name="user" size={30} /> }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNav;
