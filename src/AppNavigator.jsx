
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SignUpScreen from './screens/SignUpScreen'

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.screen name="SignUp" component={SignUpScreen} />
      {/* Add other screens here */}
    
    </Stack.Navigator>
  );
};

export default AppNavigator;
