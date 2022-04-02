import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>To Do App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "#7AFFB2",
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
  },
});
