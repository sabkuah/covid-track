import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ListItem, Title, List } from "native-base";
import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";
import { MAPBOX_TOKEN } from "dotenv";

const CountryScreen = ({ route }) => {
  const data = route.params;
  const geocoder = mbxGeocoding({ accessToken: MAPBOX_TOKEN });

  const getGeoCode = async () => {
    const geoData = await geocoder
      .forwardGeocode({
        query: "Vancouver, CA",
        limit: 1,
      })
      .send();
    console.log(geoData.body.features[0].geometry.coordinates);
  };

  useEffect(() => {
    getGeoCode();
  }, []);

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
