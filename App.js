import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DataProvider } from "./src/context/DataContext";
import { API_KEY } from "dotenv";
import axios from "axios";

import BottomTabNav from "./src/components/navigation/BottomTabNav";
import DrawerNav from "./src/components/navigation/DrawerNav";
import Loading from "./src/screens/Loading";

const Stack = createStackNavigator();

const PlatformSpecificNavigator = Platform.select({
  ios: () => BottomTabNav,
  android: () => DrawerNav,
})();

export default function App() {
  const [covidData, setCovidData] = useState([]);

  const options = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/statistics",
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
    },
    parameters: ["Canada"],
  };

  const getCovidData = () => {
    let mounted = true;
    axios
      .request(options)
      .then(function (response) {
        if (mounted) {
          setCovidData(response.data.response);
          console.log(covidData);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    (async () => {
      await getCovidData();
    })();
    //console.log(covidData);
  }, []);

  if (covidData && covidData.length > 1) {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <DataProvider value={covidData}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Root" component={PlatformSpecificNavigator} />
            </Stack.Navigator>
          </DataProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  } else return <Loading />;
}
