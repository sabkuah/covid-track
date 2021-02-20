import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Container, Content, Form, Item, Input, Button } from "native-base";
import base from "../styles/styles";
import firebase from "firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const onLoginPressed = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        setUser(userCredential.user);
        setPassword("");
        // navigate
        navigation.navigate("UserDashboardScreen", user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });

    console.log("email>", email);
    console.log("passowrd>", password);
  };

  const onRegisterPressed = async (e) => {
    console.log("password before>", password);

    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        setUser(userCredential.user);
        setPassword("");
        console.log("user>>", user);
        console.log("password after>", password);
        // navigate
        navigation.navigate("UserDashboardScreen", user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error>>", errorMessage);
      });
  };
  return (
    <SafeAreaView style={base.container}>
      <View style={styles.auth}>
        <Form style={styles.form}>
          <Item>
            <Input
              placeholder="Email"
              value={email}
              autoCompleteType="email"
              autoCapitalize="none"
              onChangeText={(text) => {
                setEmail(text);
              }}
            />
          </Item>
          <Item last>
            <Input
              placeholder="Password"
              value={password}
              secureTextEntry={true}
              onChangeText={(text) => {
                setPassword(text);
              }}
            />
          </Item>
        </Form>

        <Button
          success
          style={styles.button}
          type="submit"
          onPress={onLoginPressed}
        >
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
