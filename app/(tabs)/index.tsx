import React, { useState } from 'react';
import { View, ScrollView, Text, Image, Button, TextInput, StyleSheet } from 'react-native';

const Box = ({ backgroundColor, width, height }) => {
  return (
    <View style={{ backgroundColor, width, height, margin: 10 }}>
      <Text style={styles.boxText}>Моя коробка</Text>
    </View>
  );
};

export default function App() {
  const [pressedCount, setPressedCount] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [name, setName] = useState('');

  const handlePress = () => {
    const newCount = pressedCount + 1;
    setPressedCount(newCount);
    if (newCount >= 3) {
      setIsButtonDisabled(true);
    }
  };

  const resetButton = () => {
    setIsButtonDisabled(false);
    setPressedCount(0);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.boxContainer}>
        <Box backgroundColor="#ffcccb" width={200} height={100} />
      </View>

      {/* Кнопки и счетчик */}
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>
          {pressedCount > 0
            ? 'The button was pressed '+pressedCount+ ' times!'
            : "The button isn't pressed yet"}
        </Text>

        <Button
          title="Press me"
          onPress={handlePress}
          disabled={isButtonDisabled} // Блокируем кнопку после 3 нажатий
        />

        <Button
          title="Reset Button"
          onPress={resetButton}
          style={styles.resetButton}
        />
      </View>

      {/* Поле ввода имени */}
      <View style={styles.nameInputContainer}>
        <Text style={styles.nameText}>
          {name ? 'Hi ' +name +'!' : 'What is your name?'}
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setName(text)} // Обновляем имя по мере ввода
          placeholder="Enter your name"
        />
      </View>
    
      <View style={styles.simpleView}>
        <Text style={styles.text}>Простой View с текстом</Text>
      </View>

      <View style={styles.imageView}>
        <Text style={styles.text}>Изображение</Text>
        <Image source={require('@/assets/images/coal-price.jpg')} style={styles.image} />
      </View>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>Текст в ScrollView</Text>
        <Text style={styles.text}>Ещё сверху текст</Text>
        <Text style={styles.text}>Доп текст для скролла</Text>
        <Text style={styles.text}>Ещё сверху текст</Text>
        <Text style={styles.text}>Ещё сверху текст</Text>
        <Text style={styles.text}>Ещё сверху текст</Text>
        <Text style={styles.text}>Ещё сверху текст</Text>
        <Text style={styles.text}>Ещё сверху текст</Text>
        <Text style={styles.text}>Ещё сверху текст</Text>
        <Text style={styles.text}>Ещё сверху текст</Text>
      </ScrollView>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  simpleView: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    marginBottom: 20,
  },
  imageView: {
    padding: 20,
    backgroundColor: '#e0f7fa',
    marginBottom: 20,
    alignItems: 'center',
  },
  scrollView: {
    padding: 20,
    backgroundColor: '#ffecb3',
    height: 200,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
  },
  buttonContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetButton: {
    marginTop: 10,
  },
  nameInputContainer: {
    padding: 16,
    alignItems: 'center',
  },
  nameText: {
    marginVertical: 16,
    fontSize: 18,
  },
  textInput: {
    padding: 8,
    backgroundColor: '#f5f5f5',
    width: '80%',
    borderRadius: 4,
  },
  boxContainer: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    color: '#fff',
    textAlign: 'center',
    paddingTop: 60, 
  },
});