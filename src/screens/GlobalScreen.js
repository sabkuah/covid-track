import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import axios from "axios";
import ContinentSummary from "../components/navigation/ContinentSummary";

const GlobalScreen = () => {
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
    //console.log(covidData);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Global Screen</Text>
      <ContinentSummary title="Africa" results={filterByContinent("Africa")} />
      <ContinentSummary
        title="Antarctica"
        results={filterByContinent("Antarctica")}
      />
      <ContinentSummary title="Asia" results={filterByContinent("Asia")} />
      <ContinentSummary title="Europe" results={filterByContinent("Europe")} />
      <ContinentSummary
        title="North America"
        results={filterByContinent("North-America")}
      />
      <ContinentSummary
        title="Oceania"
        results={filterByContinent("Oceania")}
      />
      <ContinentSummary
        title="South America"
        results={filterByContinent("South-America")}
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
