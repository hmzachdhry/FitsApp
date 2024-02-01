import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './components/Screens/WelcomeScreen';
import LoginScreen from './components/Screens/LoginScreen';
import SignUpScreen from './components/Screens/SignUpScreen';
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
          <Stack.Screen name="SignUp" component={SignUpScreen} />
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
// ScrollView doesn't allow the stack navigator components to render for some reason

// Styling

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
