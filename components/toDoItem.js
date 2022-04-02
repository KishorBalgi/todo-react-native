import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ToDoItem({ item, delToDo }) {
  return (
    <TouchableOpacity style={styles.toDoItem}>
      <Text style={styles.toDo}>{item.text}</Text>
      <MaterialCommunityIcons
        name="delete-empty"
        style={styles.delIcon}
        onPress={() => delToDo(item.id)}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  toDoItem: {
    height: 60,
    paddingVertical: 15,
    backgroundColor: "#BEFFDA",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  toDo: {
    flex: 4,
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  delIcon: {
    fontSize: 30,
    color: "#F87979",
    backgroundColor: "#CAD1DF",
    width: 50,
    height: 50,
    textAlign: "center",
    paddingVertical: 8,
    borderRadius: 50,
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
