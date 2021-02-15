import React, { useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

const ContinentSummary = ({ title, results }) => {
  useEffect(() => {
    //console.log("RESULTS>>>>>>>", results);
  }, []);
  return (
    <View>
      <Text>{title}</Text>
      <FlatList
        data={results}
        keyExtractor={(item) => item.country}
        renderItem={({ item }) => {
          return <Text>{item.country}</Text>;
        }}
      />
    </View>
  );
};

export default ContinentSummary;
