import React from "react";
import { View, Text, StyleSheet } from "react-native";
import WebView from "react-native-webview";

import Button from "../../components/Button";
import useLocation from "./hooks";
const styles = StyleSheet.create({
  butts: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default function Local() {
  const [location] = useLocation();

  return (
    <View style={styles.butts}>
      <WebView
        source={{
          uri: `https://www.shop.com/shoplocal/search?query=&queryLocation=${location}`,
        }}
      />
    </View>
  );
}
