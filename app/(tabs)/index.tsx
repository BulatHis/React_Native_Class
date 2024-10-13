import React from 'react';
import { View, Text, Button, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

// Компонент экрана Home
function HomeScreen({ navigation }) {
  return (
    <View style={styles.screenContainer}>
      <Text>Home Screen</Text>
      <Button
        title="О приложении"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}

// Компонент экрана "О приложении"
function AboutScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>страница о нас</Text>
    </View>
  );
}

// Компонент экрана News
function NewsScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>страница новостей</Text>
    </View>
  );
}

// Компонент экрана Chat
function ChatScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>страница чата</Text>
    </View>
  );
}

// Компонент экрана Settings
function SettingsScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Страница настроке</Text>
    </View>
  );
}

// Создание стека для Home
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <View style={styles.headerTitleContainer}>
              <Image source={require('../../assets/images/free-icon-man-3439472.png')} style={styles.icon} />
              <Text style={styles.headerTitle}>Home</Text>
            </View>
          ),
        }}
      />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
};

// Создание табов
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomePage"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-newspaper" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-chatbubble" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Главный компонент App с навигацией
export default function App() {
  return (
    <NavigationContainer independent={true}>
      <TabNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 50,  // Укажите нужную ширину
    height: 50, // Укажите нужную высоту
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8, // Отступ между иконкой и текстом
  },
  headerIcon: {
    marginRight: 4, // Отступ между иконкой и текстом
  },
});