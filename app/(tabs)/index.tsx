import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Linking } from 'react-native';  
import { DeepLinking } from './DeepLinking'; 
import AppNavigator from './AppNavigation';
import InitScreen from './InitScreen'; 
import AuthMainScreen from './AuthMainScreen'; 

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    Linking.getInitialURL().then(async (deepLinkInitialURL) => {
      if (deepLinkInitialURL) {
        await DeepLinking.handleInitialNavigate(deepLinkInitialURL);
      }
    });
  }, []);

  return (
    <NavigationContainer linking={DeepLinking.linking} independent={true}>
    <AppNavigator/>
     
    </NavigationContainer>
  );
};

export default App;