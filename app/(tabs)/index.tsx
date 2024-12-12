// Импорт необходимых компонентов
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Switch } from 'react-native';

export default function App() {
  const [isRedTheme, setIsRedTheme] = useState(false);

  // Функция для переключения темы
  const toggleTheme = () => {
    setIsRedTheme(!isRedTheme);
  };

  return (
    <View style={[styles.container, isRedTheme ? styles.redTheme : styles.blueTheme]}>
      <Text style={styles.title}>Демонстрация смены темы</Text>
      <Text style={styles.description}>Переключатель</Text>
      
      <View style={styles.controls}>
        <Switch
          value={isRedTheme}
          onValueChange={toggleTheme}
          thumbColor={isRedTheme ? '#ff0000' : '#4da6ff'}
          trackColor={{ false: '#b3d9ff', true: '#ffb3b3' }}
        />
        <Text style={styles.label}>{isRedTheme ? 'Красная тема' : 'Синяя тема'}</Text>
      </View>

      <View style={styles.buttonGroup}>
        <Button
          title="Кнопка 1"
          onPress={() => alert('Вы нажали на Кнопку 1')}
          color={isRedTheme ? '#ff4d4d' : '#4da6ff'}
        />
        <Button
          title="Кнопка 2"
          onPress={() => alert('Вы нажали на Кнопку 2')}
          color={isRedTheme ? '#ff1a1a' : '#1a75ff'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 32,
    textAlign: 'center',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  label: {
    fontSize: 16,
    marginLeft: 8,
  },
  buttonGroup: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  blueTheme: {
    backgroundColor: '#e6f7ff',
  },
  redTheme: {
    backgroundColor: '#ffe6e6',
  },
});