import React from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Button } from "native-base";
import base from "../styles/styles";
import { FontAwesome } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <SafeAreaView style={base.container}>
      <View style={{ flex: 1, marginTop: 80, alignItems: "center" }}>
        <Text style={base.heading}>COVID Tracker</Text>
        <FontAwesome name="globe" size={100} color={"white"} />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFC914",
          width: "100%",
          margin: "5%",
        }}
      >
        <Text style={base.subheadingBold}>Daily Case Count:</Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={{
            backgroundColor: "#17BEBB",
            height: "60%",
            flex: 1,
            margin: "2%",
          }}
        >
          <Text style={base.subheadingBold}>Recovered</Text>
        </View>
        <View
          style={{
            backgroundColor: "#e4572e",
            height: "60%",
            flex: 1,
            margin: "2%",
          }}
        >
          <Text style={base.subheadingBold}>Deaths</Text>
        </View>
      </View>
      <View style={styles.auth}>
        <Button success style={styles.button}>
          <Text style={base.textBold}>LOGIN</Text>
        </Button>
        <Button success style={styles.button}>
          <Text style={base.textBold}>REGISTER</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  auth: {
    //alignItems: "center",
    //justifyContent: "center",
    width: "100%",
    flex: 1,
  },
  button: {
    alignSelf: "center",
    justifyContent: "center",
    width: "25%",
    margin: "1%",
    backgroundColor: "#76B041",
  },
});

export default HomeScreen;
