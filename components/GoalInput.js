import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
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
    <Modal visible={props.visible} transparent={false} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/image/goal.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Your cours goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View  style={styles.button}>
            <Button title="Add goal" color='#E6E6FA' onPress={addGoalHandle} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color='#EE82EE' onPress={props.onCancel}/>
          </View>
        </View>
        
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4B0082"
  },
  textInput: {
    width: "70%",
    height: '5%',
    padding: 12,
    borderColor: "#DDA0DD",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#DDA0DD',
    color: '#4B0082',
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  button: {
    width: '25%',
    marginHorizontal: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 18,
    resizeMode: 'contain',
  }
});
