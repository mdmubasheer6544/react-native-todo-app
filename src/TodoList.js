import React, { useState } from "react";
import { View, StyleSheet, Modal, Button, FlatList, Text } from "react-native";
import InputItems from "./InputItems";
const TodoList = () => {
  const [allTodos, setAllTodos] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const onSubmitHandler = (enteredTodo) => {
    setAllTodos([
      ...allTodos,
      {
        key: Math.floor(Math.random() * 100).toString(),
        todo: enteredTodo
      }
    ]);
    // setIsVisible(false);
  };
  const removeHandler = (id) => {
    setAllTodos(allTodos.filter((todo) => todo.key !== id));
  };
  return (
    <View>
      <Button
        title="Add new Todos"
        color="red"
        onPress={() => setIsVisible(true)}
      />
      <Modal visible={isVisible} animationType="slide">
        <InputItems visible={isVisible} onSubmit={onSubmitHandler} />
        <FlatList
          keyExtractor={(index) => index.key}
          style={styles.listStyle}
          data={allTodos}
          renderItem={(data) => {
            return (
              <View style={styles.itemContainer}>
                <Text style={styles.listItem}>{data.item.todo} </Text>
                <Button
                  title="X"
                  color="red"
                  onPress={removeHandler.bind(this, data.item.key)}
                />
              </View>
            );
          }}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    fontWeight: "bold",
    color: "red"
  },
  listStyle: {
    margin: 10,
    flexDirection: "column"
  },
  listItem: {
    color: "red",
    textTransform: "uppercase",
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    fontWeight: "bold"
    // border:"1px solid"
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#dcdcdc",
    justifyContent: "space-evenly",
    alignItem: "center",
    marginVertical: 10
  }
});

export default TodoList;
