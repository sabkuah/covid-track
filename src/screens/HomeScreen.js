import React from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Button } from "native-base";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>COVID Tracker</Text>
      <Text>Daily Case Count:</Text>
      <View style={styles.auth}>
        <Button success style={styles.button}>
          <Text>LOGIN</Text>
        </Button>
        <Button success style={styles.button}>
          <Text>REGISTER</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontWeight: "400",
    fontSize: 35,
    fontFamily: "Helvetica",
  },
  auth: {
    //alignItems: "center",
    //justifyContent: "center",
    width: "100%",
  },
  button: {
    justifyContent: "center",
    width: "25%",
  },
});

export default HomeScreen;
