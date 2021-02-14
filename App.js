import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import BottomTabNav from "./src/components/navigation/BottomTabNav";
import DrawerNav from "./src/components/navigation/DrawerNav";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Root" component={DrawerNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
