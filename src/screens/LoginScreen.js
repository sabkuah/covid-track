import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Button } from "native-base";
import base from "../styles/styles";

const LoginScreen = () => {
  return (
    <SafeAreaView style={base.container}>
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
    alignItems: "center",
    justifyContent: "center",
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

export default LoginScreen;
