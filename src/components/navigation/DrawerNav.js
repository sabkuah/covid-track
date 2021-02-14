import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../../screens/HomeScreen";
import UserDashboardScreen from "../../screens/UserDashboardScreen";
import GlobalScreen from "../../screens/GlobalScreen";
import MenuIcon from "./MenuIcon";

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="🏠 Home"
        component={HomeScreen}
        options={{ headerTitle: "Home", headerRight: () => <MenuIcon /> }}
      />
      <Drawer.Screen
        name="👤 User Dashboard"
        component={UserDashboardScreen}
        options={{ headerTitle: "Dashboard", headerRight: () => <MenuIcon /> }}
      />
      <Drawer.Screen
        name="🌍 Global"
        component={GlobalScreen}
        options={{ headerTitle: "Global", headerRight: () => <MenuIcon /> }}
      />
    </Drawer.Navigator>
  );
}
