// Импорт необходимых компонентов
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Switch } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import i18n from 'i18n-js';
import { translations } from './translations';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  const [isRedTheme, setIsRedTheme] = useState(false);
  const [language, setLanguage] = useState('ru'); // Текущий язык

  // Устанавливаем переводы
  i18n.translations = translations;
  i18n.locale = language;
  i18n.fallbacks = true;

  // Функция для переключения темы
  const toggleTheme = () => {
    setIsRedTheme(!isRedTheme);
  };

  // Функция для переключения языка
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'ru' ? 'en' : 'ru'));
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View
        style={[
          styles.container,
          isRedTheme ? styles.redTheme : styles.blueTheme,
        ]}
      >
        <Text style={{ fontFamily: 'Inter_900Black', fontSize: 40 }}>
          {i18n.t('title')}
        </Text>
        <Text style={styles.label}>{i18n.t('switchLabel')}</Text>

        <View style={styles.controls}>
          <Switch
            value={isRedTheme}
            onValueChange={toggleTheme}
            thumbColor={isRedTheme ? '#ff0000' : '#4da6ff'}
            trackColor={{ false: '#b3d9ff', true: '#ffb3b3' }}
          />
          <Text style={styles.label}>
            {isRedTheme ? i18n.t('redTheme') : i18n.t('blueTheme')}
          </Text>
        </View>

        <View style={styles.buttonGroup}>
          <Button
            title={i18n.t('button1')}
            onPress={() => alert(i18n.t('button1Alert'))}
            color={isRedTheme ? '#ff4d4d' : '#4da6ff'}
          />
          <Button
            title={i18n.t('button2')}
            onPress={() => alert(i18n.t('button2Alert'))}
            color={isRedTheme ? '#ff1a1a' : '#1a75ff'}
          />
        </View>

        <Button
          title={language === 'ru' ? 'Switch to English' : 'Поменять язык на Русский'}
          onPress={toggleLanguage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
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