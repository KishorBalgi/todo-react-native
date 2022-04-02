import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function ToDoForm({ addToDo }) {
  const [newToDo, setNewToDo] = useState("");
  function chgHandler(val) {
    setNewToDo(val);
  }
  return (
    <View style={styles.form}>
      <Text style={styles.label}>Enter To Do :</Text>
      <TextInput style={styles.input} onChangeText={chgHandler} />
      <TouchableOpacity style={styles.btnAdd} onPress={() => addToDo(newToDo)}>
        <Text style={styles.btnLabel}>Add To Do</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "#BEFFDA",
    padding: 20,
    borderRadius: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 5,
  },
  input: {
    padding: 10,
    backgroundColor: "#ECECEC",
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 10,
  },
  btnLabel: {
    textAlign: "center",
    fontSize: 18,
    padding: 10,
    backgroundColor: "#3BBBFF",
    borderRadius: 10,
    color: "#000",
  },
});
