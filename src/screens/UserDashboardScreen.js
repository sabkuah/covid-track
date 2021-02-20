import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import base from "../styles/styles";

const UserDashboardScreen = ({ route }) => {
  const user = route.params;
  return (
    <SafeAreaView style={base.container}>
      <View style={styles.auth}>
        <Text style={base.textBold}>you logged in!!! {user.email}</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});

export default UserDashboardScreen;
