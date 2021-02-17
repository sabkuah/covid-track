import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ListItem, Title, List } from "native-base";
import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";
import { MAPBOX_TOKEN } from "dotenv";
import MapView from "react-native-maps";

const CountryScreen = ({ route }) => {
  const data = route.params;
  const geocoder = mbxGeocoding({ accessToken: MAPBOX_TOKEN });
  const [coordinates, setCoordinates] = useState([-123.120735, 49.28273]); //default to Vancouver

  const getGeoCode = async () => {
    const geoData = await geocoder
      .forwardGeocode({
        query: data.country,
        limit: 1,
      })
      .send();
    const foundCoordinates = await geoData.body.features[0].geometry //stores array of coordinates
      .coordinates;

    if (foundCoordinates) {
      console.log("foundCoord", foundCoordinates);
      return await foundCoordinates;
      //   setCoordinates(foundCoordinates);
    }

    //setCoordinates(foundCoordinates); //store coordinates in state
  };

  useEffect(() => {
    getGeoCode().then((data) => setCoordinates(data));
    //getGeoCode();
    console.log("useEffect>>", coordinates);
  }, []);

  return (
    <View>
      <MapView
        initialRegion={{
          latitude: coordinates[1],
          longitude: coordinates[0],
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      />
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

const styles = StyleSheet.create({
  map: {
    height: "50%",
    width: "100%",
  },
});

export default CountryScreen;

//   const getGeoCode = async () => {
//     console.log("default>>", coordinates);
//     const geoData = await geocoder
//       .forwardGeocode({
//         query: data.country,
//         limit: 1,
//       })
//       .send();
//     console.log(data.country);
//     console.log("raw>>", geoData.body.features[0].geometry.coordinates);
//     const foundCoordinates = await geoData.body.features[0].geometry
//       .coordinates;
//     console.log("foundCoordinates>>", foundCoordinates);
//     await setCoordinates(foundCoordinates);
//     console.log("coordinates>>", coordinates);
//     console.log(coordinates[0]);
//   };

//-123.120735, 49.28273
