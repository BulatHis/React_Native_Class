import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigation';

export default function App() {
    return (
        <NavigationContainer independent={true}>
            <AppNavigator />
        </NavigationContainer>
    );
}