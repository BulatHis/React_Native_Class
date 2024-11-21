import React from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';
import taskStore from './TaskStore';

const TodoList = observer(() => {
  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => taskStore.toggleTask(item.id)}>
        <Text style={[styles.taskText, item.completed && styles.completed]}>
          {item.text}
        </Text>
      </TouchableOpacity>
      <Button title="Delete" color="#ff5c5c" onPress={() => taskStore.deleteTask(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO List</Text>

      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={taskStore.task}
        onChangeText={(text) => taskStore.setTask(text)}
      />
      <Button title="Add Task" onPress={() => taskStore.addTask()} />

      <Text style={styles.hint}>Tap a task to mark it as completed</Text>

      <FlatList
        data={taskStore.tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
});

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 20,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  taskText: {
    fontSize: 16,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  hint: {
    textAlign: 'center',
    marginVertical: 10,
    color: 'gray',
  },
});