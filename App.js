import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/header";
import ToDoItem from "./components/toDoItem";
import ToDoForm from "./components/toDoForm";

// TO DO LIST APP:
export default function App() {
  const [id, setId] = useState(-1);
  const [toDos, setToDos] = useState([]);
  function addToDo(text) {
    if (text.length <= 4)
      return Alert.alert(
        "Invalid input",
        "The input must have more than 4 characters!",
        [{ text: "Got It" }]
      );
    setId(id + 1);
    setToDos((pre) => [{ text: text, id: id }, ...pre]);
  }
  function delToDo(id) {
    setToDos((pre) => {
      return pre.filter((t) => t.id != id);
    });
  }
  return (
    // <Sandbox/>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <ToDoForm addToDo={addToDo} />
          <View style={styles.list}>
            <FlatList
              keyExtractor={(item) => item.id}
              data={toDos}
              renderItem={({ item }) => (
                <ToDoItem item={item} delToDo={delToDo} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});
