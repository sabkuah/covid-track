import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import base from "../styles/styles";

const UserDashboardScreen = ({ route }) => {
  const user = route.params;
  return (
    <SafeAreaView style={base.container}>
      <View style={styles.header}>
        <Text style={base.heading}>Welcome, {user.email}!</Text>
      </View>
      <View style={styles.auth}>
        <View style={styles.user}>
          <Text style={base.subheading}>Info</Text>
        </View>
        <View style={styles.user}>
          <Text style={base.subheading}>Info</Text>
        </View>
      </View>
      <View style={styles.box}>
        <Text>Hi</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFC914",
    width: "100%",
    margin: "5%",
    padding: "5%",
    justifyContent: "center",
    alignContent: "center",
    flex: 1,
  },
  auth: {
    flex: 1,
    flexDirection: "row",
    alignContent: "space-between",
  },
  user: {
    backgroundColor: "#e4572e",
    padding: "10%",
    margin: "2%",
  },
  box: {
    backgroundColor: "#17BEBB",
    flex: 3,
    margin: "5%",
    width: "80%",
  },
});

export default UserDashboardScreen;
