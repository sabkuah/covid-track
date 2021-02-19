import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DataProvider } from "./src/context/DataContext";

import BottomTabNav from "./src/components/navigation/BottomTabNav";
import DrawerNav from "./src/components/navigation/DrawerNav";

const Stack = createStackNavigator();

const PlatformSpecificNavigator = Platform.select({
  ios: () => BottomTabNav,
  android: () => DrawerNav,
})();

const test = {
  pets: ["monkey", "lucy"],
  name: "sabrina",
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <DataProvider value={test}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Root" component={PlatformSpecificNavigator} />
          </Stack.Navigator>
        </DataProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
