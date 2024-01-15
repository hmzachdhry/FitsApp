import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState();
  const navigation = useNavigation();

  const handleLogin = async () => {
    // try {
    //   // Make a request to backend for authentication
    //   const response = await fetch('insert backend URL here', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({username, password}),
    //   });

    //   if (response.ok) {
    //     // If authentication is successful
    //     const data = await response.json();
    //     Alert.alert('Login Successful', `Welcome back, ${data.username}!`);
    //   } else {
    //     // If authentication failed
    //     Alert.alert('Login Failed', 'Invalid username or password.');
    //   }
    // } catch (error) {
    //   console.error(error);
    //   // Handle error here
    // }
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
    // <View style={styles.container}>
    //   <Text>Login</Text>
    //   <TextInput
    //     style={styles.input}
    //     placeholder="Username"
    //     value={username}
    //     onChangeText={text => setUsername(text)}
    //   />
    //   <TextInput
    //     style={styles.input}
    //     placeholder="Password"
    //     value={password}
    //     onChangeText={text => setPassword(text)}
    //     secureTextEntry
    //   />
    //   <Button title="SignUp" onPress={handleSignUp} />
    //   <Button title="Login" onPress={handleLogin} />
    //   <Text style={styles.forgotPassword} onPress={handleForgotPassword}>
    //     Forgot Password?
    //   </Text>
    // </View>
    <Button title="Login"/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  forgotPassword: {
    marginTop: 10,
    color: 'blue',
  },
});

export default LoginScreen;
