import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Title } from "native-base";
import axios from "axios";
import ContinentSummary from "../components/navigation/ContinentSummary";

const GlobalScreen = ({ navigation }) => {
  const [covidData, setCovidData] = useState([]);

  const options = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/statistics",
    headers: {
      "x-rapidapi-key": "35062213abmsh4851657f6e21028p101833jsn397fb1c7ac58",
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
    },
    parameters: ["Canada"],
  };

  const getCovidData = () => {
    axios
      .request(options)
      .then(function (response) {
        setCovidData(response.data.response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const filterByContinent = (continent) => {
    return covidData.filter((data) => {
      return data.continent === continent;
    });
  };

  useEffect(() => {
    getCovidData();
    console.log(covidData);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Title>Global Screen</Title>
      <View>
        <Text>Last Updated: {covidData[0].day}</Text>
      </View>
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
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
});

export default GlobalScreen;
