import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styled from "@emotion/native";
import Task from "./components/task";
import React, { useState } from "react";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    console.log("====================================");
    console.log(task);
    console.log("====================================");
    Keyboard.dismiss(); // input에 적은 값을 추가하려고 버튼을 누를 시, 키보드가 자동으로 내려감.
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  // const completeTask = () => {
  //   console.log('====================================');
  //   console.log(item);
  //   console.log('====================================');
  // }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
      </View>

      <View style={styles.items}>
        {/*This is where the tasks will go!*/}

        {taskItems.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task text={item} />
            </TouchableOpacity>
          );
        })}
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          placeholderTextColor={"#999"}
          value={task}
          onChangeText={(text) => setTask(text)}
          // placeholder에 색상 먹이려면 placeholderTextColor 사용.
        />
        <TouchableOpacity
          onPress={() => {
            handleAddTask();
          }}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 50,
    left: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    // backgroundColor: "red",
  },

  input: {
    borderWidth: 3,
    borderColor: "#c0c0c0",
    borderRadius: 50,
    backgroundColor: "#f2f2f2",
    // width: "80%",
    flex: 0.9,
    height: 60,
    paddingHorizontal: 16,
    // 그림자 효과 속성
    //   shadowColor: "#000",
    //   shadowOffset: {
    //     width: 1,
    //     height: -1,
    //   },
    //   shadowOpacity: 1,
    //   shadowRadius: 2,
    //   elevation: 5,
  },
  addWrapper: {
    width: 60,
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderWidth: 3,
    borderColor: "#c0c0c0",
    borderRadius: "50%",
  },
});
