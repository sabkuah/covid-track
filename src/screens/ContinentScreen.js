import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const ContinentScreen = ({ route }) => {
  const results = route.params;

  useEffect(() => {
    console.log(route);
    console.log("results from detail>>>>>>>", results);
  }, []);

  return (
    <View>
      <Text>Continent Name</Text>
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

export default ContinentScreen;
