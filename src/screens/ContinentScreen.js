import { List, ListItem, Title } from "native-base";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Loading from "./Loading";

const ContinentScreen = ({ route, navigation }) => {
  const results = route.params;

  const sortByMostActiveCases = () => {
    results.sort((a, b) => b.cases.active - a.cases.active);
    return results;
  };

  if (!results) {
    return <Loading />;
  } else {
    return (
      <View>
        <Title>{results[0] ? results[0].continent : ""}</Title>
        {results && results.length > 0 ? (
          <List>
            <ListItem itemDivider>
              <Text>Countries Most Affected:</Text>
            </ListItem>
            <FlatList
              data={sortByMostActiveCases()}
              keyExtractor={(item) => item.country}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("CountryScreen", item);
                    }}
                  >
                    <ListItem style={styles.listItem}>
                      <Text>{item.country} </Text>
                      <Text style={styles.activeCases}>
                        -- Active cases: {item.cases.active.toLocaleString()}
                      </Text>
                    </ListItem>
                  </TouchableOpacity>
                );
              }}
            />
          </List>
        ) : (
          <Text>No cases reported.</Text>
        )}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  listItem: {},
  activeCases: {
    textAlign: "right",
  },
});

export default ContinentScreen;
