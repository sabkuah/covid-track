import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Container, Content, Form, Item, Input, Button } from "native-base";
import base from "../styles/styles";

const LoginScreen = () => {
  const onLoginPressed = (e) => {
    e.preventDefault();
    console.log("login pressed");
  };

  const onRegisterPressed = (e) => {
    console.log("register pressed");
  };
  return (
    <SafeAreaView style={base.container}>
      <View style={styles.auth}>
        <Form style={styles.form}>
          <Item>
            <Input placeholder="Email" id="email" />
          </Item>
          <Item last>
            <Input
              placeholder="Password"
              id="password"
              secureTextEntry={true}
            />
          </Item>
        </Form>

        <Button success style={styles.button} onPress={onLoginPressed}>
          <Text style={base.textBold}>LOGIN</Text>
        </Button>
        <Button success style={styles.button} onPress={onRegisterPressed}>
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
  form: {
    backgroundColor: "white",
    width: "75%",
    marginBottom: "5%",
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
