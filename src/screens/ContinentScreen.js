import { List, ListItem } from "native-base";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const ContinentScreen = ({ route }) => {
  const results = route.params;

  const sortByMostActiveCases = () => {
    results.sort((a, b) => b.cases.active - a.cases.active);
    return results;
    //console.log(results);
  };

  // useEffect(() => {
  //   console.log(route);
  //   console.log("results from detail>>>>>>>", results);
  // }, []);

  return (
    <View>
      <Text>{results[0].continent}</Text>
      <List>
        <ListItem itemDivider>
          <Text>Countries Affected:</Text>
        </ListItem>
        <FlatList
          data={sortByMostActiveCases()}
          keyExtractor={(item) => item.country}
          renderItem={({ item }) => {
            return (
              <ListItem style={styles.listItem}>
                <Text>{item.country} </Text>
                <Text style={styles.activeCases}>
                  -- Active cases: {item.cases.active.toLocaleString()}
                </Text>
              </ListItem>
            );
          }}
        />
      </List>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {},
  activeCases: {
    textAlign: "right",
  },
});

export default ContinentScreen;
