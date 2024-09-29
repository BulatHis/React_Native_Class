import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.simpleView}>
        <Text style={styles.text}>Простой View с текстом</Text>
      </View>

      <View style={styles.imageView}>
        <Text style={styles.text}> изображение</Text>
        <Image source={ require ( '@/assets/images/coal-price.jpg') } />
      </View>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
           текст в ScrollView
        </Text>
        <Text style={styles.text}>
          Ещё сверху текст
        </Text>
        <Text style={styles.text}>
          Доп текст для скролла
        </Text>
        <Text style={styles.text}>
          Ещё сверху текст
        </Text>
        <Text style={styles.text}>
          Ещё сверху текст
        </Text>
        <Text style={styles.text}>
          Ещё сверху текст
        </Text>
        <Text style={styles.text}>
          Ещё сверху текст
        </Text>
        <Text style={styles.text}>
          Ещё сверху текст
        </Text>
        <Text style={styles.text}>
          Ещё сверху текст
        </Text>
        <Text style={styles.text}>
          Ещё сверху текст
        </Text>
        
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
});