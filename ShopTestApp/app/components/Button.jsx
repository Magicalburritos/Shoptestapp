import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonView: {
    marginHorizontal: 0,
    justifyContent: "center",
    backgroundColor: "blue",

    borderRadius: 5,
  },
  text: {
    color: "white",
  },
});

export default function Button({ name, onPress, size }) {
  const setSize = function (buttonSize) {
    if (buttonSize === "large") {
      return {
        paddingHorizontal: 40,
        paddingVertical: 20,
      };
    } else {
      return {
        paddingHorizontal: 30,
        paddingVertical: 10,
      };
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={StyleSheet.flatten([styles.buttonView, setSize(size)])}
    >
      <View>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}
