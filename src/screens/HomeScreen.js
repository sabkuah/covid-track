import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Button } from "native-base";
import covidAPI from "../api/covidAPI";
import axios from "axios";
import ContinentSummary from "../components/navigation/ContinentSummary";

const HomeScreen = () => {
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
      <Text style={styles.heading}>COVID LENS</Text>
      <Text>Daily Case Count:</Text>
      <View style={styles.auth}>
        <Button success style={styles.button}>
          <Text>LOGIN</Text>
        </Button>
        <Button success style={styles.button}>
          <Text>REGISTER</Text>
        </Button>
      </View>
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
    backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
  },
  heading: {
    fontWeight: "400",
    fontSize: 35,
    fontFamily: "Helvetica",
  },
  auth: {
    //alignItems: "center",
    //justifyContent: "center",
    width: "100%",
  },
  button: {
    justifyContent: "center",
    width: "25%",
  },
});

export default HomeScreen;
