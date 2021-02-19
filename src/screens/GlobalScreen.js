import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Title } from "native-base";
import axios from "axios";
import ContinentSummary from "../components/navigation/ContinentSummary";
import { API_KEY } from "dotenv";
import base from "../styles/styles";

const GlobalScreen = ({ navigation }) => {
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

  //<Text>Last Updated: {covidData[0].day}</Text>

  return (
    <View style={base.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignSelf: "stretch",
        }}
      >
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
