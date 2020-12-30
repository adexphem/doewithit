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
    <View style={styles.loginButton} />
    <View style={styles.registerButton} />
  </ImageBackground>;
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65"
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
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4"
  },
});

export default WelcomeScreen;
