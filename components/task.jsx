import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square} />
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    // backgroundColor: "red",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "skyblue",
    opacity: 0.7,
    borderRadius: 5,
    marginRight: 10,
  },
  itemText: {
    // maxWidth: "80%",
    flex: 0.9,
  },
  circular: {
    width: 12,
    height: 12,
    borderRadius: 5,
    borderColor: "blue",
    borderWidth: 2,
  },
});

export default Task;
