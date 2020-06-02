import React from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button color="orange" onPress={() => alert("Hello")} title="Click Me" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
