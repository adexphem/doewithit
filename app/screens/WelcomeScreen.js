import React from "react";
import { ImageBackground, View, StyleSheet, Image, Text } from "react-native";

import AppButton from '../components/AppButton'

const WelcomeScreen = () => {
  return <ImageBackground
    blurRadius={1.5} 
    source={require("../assets/background.jpg")} 
    style={styles.background}>
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Text style={styles.tagline}>Sell What You Don't Need</Text>
    </View>
    <View style={styles.buttonsContainer}>
      <AppButton title="Login" onPress={() => console.log('Login')} />
      <AppButton title="Register" color="secondary" onPress={() => console.log('Register')} />
    </View>
  </ImageBackground>;
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
    width: "100%"
  },
  logo: {
    height: 70,
    width: 70,
  },
  tagline: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 20,
    textAlign: "center",
    alignSelf:"stretch"
  }
});

export default WelcomeScreen;
