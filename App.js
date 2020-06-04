import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableHighlight,
  Button,
  Image,
  View
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginBottom: 15 }}>
        <TouchableHighlight onPress={() => console.log("Press Image")}>
          <Image
            source={{
              width: 200,
              height: 300,
              uri: "https://picsum.photos/200/300"
            }}
          />
        </TouchableHighlight>
      </View>
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
