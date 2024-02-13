import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './components/Screens/WelcomeScreen';
import LoginScreen from './components/Screens/LoginScreen';
import {SignUpScreen, EmailScreen, EmailVerification, PasswordScreen} from './components/Screens/SignUpScreen';
import ForgotPasswordScreen from './components/Screens/ForgotPasswordScreen';
import HomeScreen from './components/Screens/HomeScreen';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
// import EmailScreen from './components/Screens/SignUpScreen/EmailScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeArea}>
        {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            cardStyle: {backgroundColor: '#FAF0E4'},
          }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Sign Up" component={SignUpScreen} />
          <Stack.Screen name="Email" component={EmailScreen} />
          <Stack.Screen name="EmailVerification" component={EmailVerification} />
          <Stack.Screen name="Password" component={PasswordScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
          />
        </Stack.Navigator>
        {/* </ScrollView> */}
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
