import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text>Sell what we do need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end"
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65"
  },
  logo: {
    height: 100,
    width: 100
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 70
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4"
  }
});

export default WelcomeScreen;
