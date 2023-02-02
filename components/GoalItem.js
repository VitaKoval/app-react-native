import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed})=> pressed && styles.pressedItem}
      >
        <Text style={styles.goaltext}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    borderRadius: 6,
    marginBottom: 8,
    backgroundColor: "#9370DB",
  },
  goaltext: {
    color: "#E6E6FA",
    padding: 12,
  },
  pressedItem: {
    backgroundColor: "#FF00FF",
    borderRadius: 6,
  }
});
