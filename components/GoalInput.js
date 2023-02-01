import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandle() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your cours goal"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add goal" onPress={addGoalHandle} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 18,
  },
  textInput: {
    width: "70%",
    padding: 8,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 8,
  },
});
