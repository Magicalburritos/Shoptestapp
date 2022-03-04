import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
});

export default function Home() {
  return (
    <View style={styles.homeContainer}>
      <WebView source={{ uri: "https://shop.com" }} />
    </View>
  );
}
