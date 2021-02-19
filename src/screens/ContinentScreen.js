import { List, ListItem, Title } from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Loading from "./Loading";
import base from "../styles/styles";

const ContinentScreen = ({ route, navigation }) => {
  const [results, setResults] = useState();
  const data = route.params;

  const sortByMostActiveCases = async (data) => {
    const sorted = await data.sort((a, b) => b.cases.active - a.cases.active);
    await setResults(sorted);
  };

  useEffect(() => {
    //setResults(route.params);
    sortByMostActiveCases(data);
  }, []);

  //IF RESULTS LOADING
  if (!results) {
    return <Loading />;
  }
  //IF NO RESULTS
  else if (results && results.length === 0) {
    return (
      <View>
        <Text> No Cases Reported!</Text>
      </View>
    );
  }
  //IF RESULTS PRESENT
  else {
    return (
      <View style={base.container}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#FFC914",
            width: "100%",
            margin: "5%",
          }}
        >
          <Text style={styles.countryTitle}>
            {results[0].continent.toUpperCase()}
          </Text>
          <Text style={base.bigNumber}>
            {results[0].cases.active.toLocaleString()}
          </Text>
          <Text style={styles.descriptor}>Current Active Cases</Text>
        </View>

        <List style={{ width: "80%", flex: 4 }}>
          <ListItem itemDivider>
            <Text>Active Cases:</Text>
          </ListItem>
          <FlatList
            data={results}
            keyExtractor={(item) => item.country}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("CountryScreen", item);
                  }}
                >
                  <ListItem
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <Text style={base.subheading}>{item.country} </Text>
                    </View>
                    <View>
                      <Text style={{ color: "white" }}>
                        {item.cases.active.toLocaleString()}
                      </Text>
                    </View>
                  </ListItem>
                </TouchableOpacity>
              );
            }}
          />
        </List>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  countryTitle: {
    color: "#e4572e",
    fontWeight: "700",
    fontSize: 35,
    alignSelf: "center",
  },
  descriptor: {
    color: "white",
    alignSelf: "center",
    fontWeight: "700",
    fontSize: 16,
  },
});

export default ContinentScreen;
