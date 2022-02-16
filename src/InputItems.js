import React, { useState } from "react";
import { View, TextInput, Modal, Button, StyleSheet } from "react-native";

const InputItems = ({ onSubmit, visible }) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const onChangeHandler = (enteredTodo) => {
    setEnteredTodo(enteredTodo);
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={enteredTodo}
        style={styles.inputStyle}
        placeholder="Add todo here.."
        onChangeText={onChangeHandler}
      />
      <Button
        title="ADD +"
        onPress={() => {
          onSubmit(enteredTodo);
          setEnteredTodo("");
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    padding: 50,
    alignItem: "center",
    justifyContent: "center",
    alignItem: "center"
  },
  inputStyle: {
    padding: 10,
    marginBottom: 10,
    border: "1px solid black"
  }
});

export default InputItems;
