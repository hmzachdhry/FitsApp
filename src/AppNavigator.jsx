
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.screen name="SignUp" component={SignUpScreen} />
      <Stack.screen name="Home" component={HomeScreen} />
      {/* Add other screens here */}
    
    </Stack.Navigator>
  );
};

export default AppNavigator;
