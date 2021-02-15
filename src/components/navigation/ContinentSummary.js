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

  useEffect(() => {
    console.log("active cases>>>>>>>", getTotalActiveCases());
  }, []);
  return (
    <View>
      <Card>
        <CardItem>
          <Body>
            <Text>{title}</Text>
            <Text>Total Active Cases: {getTotalActiveCases()}</Text>
          </Body>
        </CardItem>
      </Card>
    </View>
  );
};

export default ContinentSummary;
