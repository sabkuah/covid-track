import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Button } from "native-base";
import base from "../styles/styles";
import { FontAwesome } from "@expo/vector-icons";
import DataContext from "../context/DataContext";

const HomeScreen = () => {
  const covidData = useContext(DataContext);
  const [dailyActive, setDailyActive] = useState(0);
  const [dailyNew, setDailyNew] = useState(0);
  const [dailyDeaths, setDailyDeaths] = useState(0);

  const getTotalNumbers = async () => {
    let activeTot = 0;
    let newTot = 0;
    let deathTot = 0;

    covidData.forEach((item) => {
      if (item.cases.active && item.cases.active > 1) {
        activeTot += item.cases.active;
      }

      if (item.cases.new !== null) {
        const formattedTot = parseInt(item.cases.new.slice(1));
        newTot += formattedTot;
      }

      if (item.deaths.new && item.deaths.new > 1) {
        deathTot += parseInt(item.deaths.new);
      }
    });
    setDailyActive(activeTot);
    setDailyNew(newTot);
    setDailyDeaths(deathTot);
  };

  useEffect(() => {
    (async () => {
      await getTotalNumbers(covidData);
    })();
  }, []);

  return (
    <SafeAreaView style={base.container}>
      <View style={{ flex: 1, marginTop: 80, alignItems: "center" }}>
        <Text style={base.heading}>COVID Tracker</Text>
        <FontAwesome name="globe" size={100} color={"white"} />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFC914",
          width: "100%",
          margin: "5%",
          justifyContent: "center",
        }}
      >
        <Text style={base.subheadingBold}>Current Active Cases:</Text>
        <Text style={base.bigNumber}>{dailyActive.toLocaleString()}</Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={{
            backgroundColor: "#17BEBB",
            height: "60%",
            flex: 1,
            margin: "2%",
          }}
        >
          <Text style={base.subheadingBold}>Daily New</Text>
          <Text style={base.smallNumber}>{dailyNew.toLocaleString()}</Text>
        </View>
        <View
          style={{
            backgroundColor: "#e4572e",
            height: "60%",
            flex: 1,
            margin: "2%",
          }}
        >
          <Text style={base.subheadingBold}>Daily Deaths</Text>
          <Text style={base.smallNumber}>{dailyDeaths.toLocaleString()}</Text>
        </View>
      </View>
      <View style={styles.auth}>
        <Button success style={styles.button}>
          <Text style={base.textBold}>LOGIN</Text>
        </Button>
        <Button success style={styles.button}>
          <Text style={base.textBold}>REGISTER</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  auth: {
    //alignItems: "center",
    //justifyContent: "center",
    width: "100%",
    flex: 1,
  },
  button: {
    alignSelf: "center",
    justifyContent: "center",
    width: "25%",
    margin: "1%",
    backgroundColor: "#76B041",
  },
});

export default HomeScreen;
