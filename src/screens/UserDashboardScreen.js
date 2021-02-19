import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import base from "../styles/styles";

const UserDashboardScreen = () => {
  return (
    <SafeAreaView style={base.container}>
      <View style={styles.auth}>
        <Text style={base.textBold}>you logged in!!!</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});

export default UserDashboardScreen;
