import { NavigationContainer } from "@react-navigation/native";
import { Card, CardItem, Body } from "native-base";
import React, { useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

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
          <CardItem>
            <Body>
              <Text style={styles.heading}>{title}</Text>
              <Text>New Cases: {getTotalNewCases()}</Text>
              <Text>Active Cases: {getTotalActiveCases()}</Text>
            </Body>
          </CardItem>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "80%",
  },
  heading: {
    fontWeight: "bold",
  },
});

export default ContinentSummary;
