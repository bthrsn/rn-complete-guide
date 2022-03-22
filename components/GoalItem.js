import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDelete.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.itemText}>{props.title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  itemText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: .5,
  }
});

export default GoalItem;
