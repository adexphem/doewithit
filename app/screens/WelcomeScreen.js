import React from "react";
import { ImageBackground, View, StyleSheet, Image, Text } from "react-native";

const WelcomeScreen = () => {
  return <ImageBackground 
    source={require("../assets/background.jpg")} 
    style={styles.background}>
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Text>Sell What You Don't Need</Text>
    </View>
    <View style={[styles.loginButton, styles.linkText]}><Text>Sign In</Text></View>
    <View style={[styles.registerButton, styles.linkText]}><Text>Register</Text></View>
  </ImageBackground>;
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  linkText: {
    fontSize: 10,
    fontWeight: "600",
    marginBottom: 10,
    borderRadius: 10,
    height: 60
  },
  loginButton: {
    width: "80%",
    height: 70,
    backgroundColor: "#fc5c65",
    justifyContent: "center",
    alignItems: "center"
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center"
  },
  logo: {
    height: 70,
    width: 70,
  },
  registerButton: {
    width: "80%",
    height: 70,
    backgroundColor: "#4ecdc4",
    justifyContent: "center",
    alignItems: "center"
  },
});

export default WelcomeScreen;
