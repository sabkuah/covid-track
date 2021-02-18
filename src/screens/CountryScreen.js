import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ListItem, Title, List } from "native-base";
import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";
import { MAPBOX_TOKEN } from "dotenv";
import MapView from "react-native-maps";

const CountryScreen = ({ route }) => {
  const data = route.params;
  const geocoder = mbxGeocoding({ accessToken: MAPBOX_TOKEN });
  const [coordinates, setCoordinates] = useState([]); //default to Vancouver
  const [region, setRegion] = useState({
    latitude: coordinates[1],
    longitude: coordinates[0],
    latitudeDelta: 4.0922,
    longitudeDelta: 4.0421,
  });

  const getGeoCode = async () => {
    const geoData = await geocoder
      .forwardGeocode({
        query: data.country,
        limit: 1,
      })
      .send();

    const long = geoData.body.features[0].geometry.coordinates[0];
    const lat = geoData.body.features[0].geometry.coordinates[1];

    return {
      latitude: lat,
      longitude: long,
      latitudeDelta: 4.0922,
      longitudeDelta: 4.0421,
    };
  };

  const onRegionChange = (region) => {
    setRegion(region);
  };

  useEffect(() => {
    (async () => {
      const result = await getGeoCode();
      onRegionChange(result);
    })();
  }, []);

  return (
    <View>
      <MapView
        region={region}
        onRegionChange={onRegionChange}
        style={styles.map}
      />
      <Title>{data.country}</Title>
      <List>
        <ListItem>
          <Text>Latitude: {region.latitude}</Text>
        </ListItem>
        <ListItem>
          <Text>Longitude: {region.longitude}</Text>
        </ListItem>
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

const styles = StyleSheet.create({
  map: {
    height: "50%",
    width: "100%",
  },
});

export default CountryScreen;
