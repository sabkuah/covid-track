import { NavigationContainer } from "@react-navigation/native";
import { Card, CardItem, Body } from "native-base";
import React, { useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import base from "../styles/styles";

const ContinentSummary = ({ title, results, navigation }) => {
  const getTotalActiveCases = () => {
    let totalActiveCases = 0;
    results.forEach((item) => {
      totalActiveCases += item.cases.active;
    });
    return totalActiveCases.toLocaleString();
  };

  const getTotalNewCases = () => {
    let totalNewCases = 0;
    results.forEach((item) => {
      if (item.cases.new !== null) {
        const newCases = Number(item.cases.new.slice(1));
        totalNewCases += newCases;
      }
    });
    return totalNewCases.toLocaleString();
  };

  useEffect(() => {
    //console.log("results from summ>>>>>>>", results);
  }, []);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ContinentScreen", results);
        }}
      >
        <Card style={styles.card}>
          <CardItem style={{ backgroundColor: "#FFC914" }}>
            <Body>
              <Text style={styles.continentTitle}>{title.toUpperCase()}</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: "3%",
                }}
              >
                <Text style={({ margin: "1%" }, base.textBold)}>
                  New: {getTotalNewCases()}
                </Text>

                <Text
                  style={
                    ({ margin: "1%", justifyContent: "flex-end" },
                    base.textBold)
                  }
                >
                  Active: {getTotalActiveCases()}
                </Text>
              </View>
            </Body>
          </CardItem>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#17BEBB",
  },
  continentTitle: {
    color: "#e4572e",
    fontWeight: "700",
    fontSize: 22,
    alignSelf: "center",
  },
});

export default ContinentSummary;
