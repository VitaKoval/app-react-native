import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoal, setCourseGoal] = useState([]);

  function startAddGoalHandle() {
    setModalIsVisible(true);
  }

  function endAddGoalHandle() {
    setModalIsVisible(false);
  }

  function addGoalHandle(enteredGoalText) {
    setCourseGoal((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandle();
  }

  function deleteGoalHandler(id) {
    setCourseGoal((currentCourseGoal) => {
      return currentCourseGoal.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.buttonContainer}>
          <Button
            title="Add New Goal"
            color="white"
            onPress={startAddGoalHandle}
          />
        </View>

        <GoalInput
          onAddGoal={addGoalHandle}
          visible={modalIsVisible}
          onCancel={endAddGoalHandle}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoal}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    // paddingTop: 55,
    // paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
    padding: 22,
    backgroundColor: "#4B0082",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  buttonContainer: {
    marginTop: 85,
    marginBottom: 25,
  },
});
