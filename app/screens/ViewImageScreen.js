import React from "react";
import { Image, StyleSheet, View } from "react-native";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet({
  closeIcon: {
    backgroundColor: "#fc5c65",
    height: 50,
    left: 30,
    position: "absolute",
    top: 40,
    width: 50
  },
  deleteIcon: {
    backgroundColor: "#4ecdc4",
    height: 50,
    position: "absolute",
    right: 30,
    top: 40,
    width: 50
  },
  container: {
    backgroundColor: "black",
    flex: 1
  },
  image: {
    height: "100%",
    width: "100%"
  }
});

export default ViewImageScreen;
