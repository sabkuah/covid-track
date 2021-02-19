import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import DataContext from "../context/DataContext";
import ContinentSummary from "../components/navigation/ContinentSummary";

import base from "../styles/styles";

const GlobalScreen = ({ navigation }) => {
  const covidData = useContext(DataContext);

  const filterByContinent = (continent) => {
    return covidData.filter((data) => {
      return data.continent === continent;
    });
  };

  useEffect(() => {}, []);

  return (
    <View style={base.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignSelf: "stretch",
        }}
      >
        <Text style={base.textBold}>Last Updated: {covidData[0].day}</Text>
        <ContinentSummary
          title="Africa"
          results={filterByContinent("Africa")}
          navigation={navigation}
        />
        <ContinentSummary
          title="Antarctica"
          results={filterByContinent("Antarctica")}
          navigation={navigation}
        />
        <ContinentSummary
          title="Asia"
          results={filterByContinent("Asia")}
          navigation={navigation}
        />
        <ContinentSummary
          title="Europe"
          results={filterByContinent("Europe")}
          navigation={navigation}
        />
        <ContinentSummary
          title="North America"
          results={filterByContinent("North-America")}
          navigation={navigation}
        />
        <ContinentSummary
          title="Oceania"
          results={filterByContinent("Oceania")}
          navigation={navigation}
        />
        <ContinentSummary
          title="South America"
          results={filterByContinent("South-America")}
          navigation={navigation}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "stretch",
  // },
});

export default GlobalScreen;
