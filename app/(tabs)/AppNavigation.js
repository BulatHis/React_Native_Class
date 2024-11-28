import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import ItemList from './ItemList';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Навигация для экрана Home
const HomeStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="ItemList" component={ItemList} />
    </Stack.Navigator>
);

// Конфигурация для диплинков
const linking = {
    prefixes: ['myapp://'], // Замените на свой URL-префикс
    config: {
        screens: {
            Home: 'home', // Диплинк для вкладки Home
            News: 'news', // Диплинк для вкладки News
            Chat: 'chat', // Диплинк для вкладки Chat
            Settings: 'settings', // Диплинк для вкладки Settings
        },
    },
};

const AppNavigator = () => (
    <NavigationContainer independent={true} linking={linking}>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home-outline';
                    } else if (route.name === 'News') {
                        iconName = 'newspaper-outline';
                    } else if (route.name === 'Chat') {
                        iconName = 'chatbox-outline';
                    } else if (route.name === 'Settings') {
                        iconName = 'settings-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomeStack} options={{ title: 'Home' }} />
            <Tab.Screen name="News" component={HomeStack} options={{ title: 'News' }} />
            <Tab.Screen name="Chat" component={HomeStack} options={{ title: 'Chat' }} />
            <Tab.Screen name="Settings" component={HomeStack} options={{ title: 'Settings' }} />
        </Tab.Navigator>
    </NavigationContainer>
);

export default AppNavigator;