import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ListItem, Title, List } from "native-base";

const CountryScreen = ({ route }) => {
  const data = route.params;

  return (
    <View>
      <Title>{data.country}</Title>
      <List>
        <ListItem>
          <Text>
            Active Cases:{" "}
            {data.cases.active ? data.cases.active.toLocaleString() : 0}
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            New Cases:{" "}
            {data.cases.new ? data.cases.new.slice(1).toLocaleString() : 0}
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            Critical Cases:{" "}
            {data.cases.critical ? data.cases.critical.toLocaleString() : 0}
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            Total Cases:{" "}
            {data.cases.total ? data.cases.total.toLocaleString() : 0}
          </Text>
        </ListItem>
      </List>
    </View>
  );
};

export default CountryScreen;
