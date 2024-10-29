import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);//   список задач
  const [task, setTask] = useState(''); // если задача новая

  // Добавление новой задачи
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), text: task, completed: false }]);
      setTask(''); // Очистка
    }
  };

  const toggleTask = (id) => { //on\off
    setTasks(tasks.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  // удаление
  const deleteTask = (id) => {
    setTasks(tasks.filter(item => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => toggleTask(item.id)}>
        <Text style={[styles.taskText, item.completed && styles.completed]}>
          {item.text}
        </Text>
      </TouchableOpacity>
      <Button title="Delete" color="#ff5c5c" onPress={() => deleteTask(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO List</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add Task" onPress={addTask} />

      <Text> 'Чтобы пометить выполненой, надо нажать на название' </Text>

      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

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
});