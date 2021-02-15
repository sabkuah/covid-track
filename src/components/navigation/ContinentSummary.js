import { Card, CardItem, Body } from "native-base";
import React, { useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

const ContinentSummary = ({ title, results }) => {
  const getTotalActiveCases = () => {
    let totalActiveCases = 0;
    results.forEach((item) => {
      totalActiveCases += item.cases.active;
    });
    return totalActiveCases;
  };

  const getTotalNewCases = () => {
    let totalNewCases = 0;
    results.forEach((item) => {
      if (item.cases.new !== null) {
        const newCases = Number(item.cases.new.slice(1));
        totalNewCases += newCases;
      }
    });
    return totalNewCases;
  };

  useEffect(() => {
    //console.log("active cases>>>>>>>", getTotalActiveCases());
  }, []);
  return (
    <View>
      <Card style={styles.card}>
        <CardItem>
          <Body>
            <Text style={styles.heading}>{title}</Text>
            <Text>Total Active Cases: {getTotalActiveCases()}</Text>
            <Text>Total New Cases: {getTotalNewCases()}</Text>
          </Body>
        </CardItem>
      </Card>
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
