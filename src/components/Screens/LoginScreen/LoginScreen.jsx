import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import { globalStyles } from '../globalStyles';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState();
  const navigation = useNavigation();

  const handleLogin = async () => {
    console.log('inside handle login')
    try {
      // Make a request to backend for authentication
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password}),
      });

      if (response.ok) {
        console.log('response ok')
        // If authentication is successful
        const data = await response.json();
        Alert.alert('Login Successful', `${data.username}!`);
       
        navigation.navigate('Home')

      } else {
        // If authentication fails
        Alert.alert('Login Failed', 'Invalid username or password.');
      }
    } catch (error) {
      console.error(error);
      // Handle error here
    }
  };
  // Navigates to SignUpScreen when "sign up" button is pressed
  const handleSignUp = () => {
    navigation.navigate('SignUp')
  }
  
  const handleForgotPassword = () => {
    // Navigates to ForgotPasswordScreen when 'Forgot Password' button is pressed
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={globalStyles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.forgotPassword} onPress={handleForgotPassword}>
        Forgot Password?
      </Text>
    </View>
  );
};


export default LoginScreen;
