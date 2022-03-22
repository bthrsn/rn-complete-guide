import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

const GoalInput = (props) => {
  const [inputGoal, setInputGoal] = useState("");

  const goalInputHandler = (inputText) => {
    setInputGoal(inputText);
  };
  const addGoalHandler = () => {
    props.onAddGoal(inputGoal);
    setInputGoal("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="Course Goal"
          style={styles.inputText}
          onChangeText={goalInputHandler}
          value={inputGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="#f31282" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" color="#b180f0" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  inputText: {
    width: "100%",
    borderColor: "#e4d0ff",
    borderRadius: 6,
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderWidth: 1,
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

export default GoalInput;
