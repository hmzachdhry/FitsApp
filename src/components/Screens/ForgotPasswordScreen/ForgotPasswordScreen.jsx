import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import {styles} from './styles'

const ForgotPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    try {
      // Make a request to backend for handling password reset
      const response = await fetch(
        'insert backend URL here',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email}),
        },
      );

      if (response.ok) {
        // If password reset request is successful
        Alert.alert(
          'Password Reset',
          'An email with instructions has been sent to your email address.',
        );
        // Navigate back to the login screen or prompt to open up email app?
        navigation.goBack();
      } else {
        // If password reset request fails
        Alert.alert(
          'Password Reset Failed',
          'Could not process your request. Please try again.',
        );
      }
    } catch (error) {
      console.error(error);
      // Handle error here
    }
  };

  return (
    <View style={styles.container}>
      <Text>Forgot Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />
      <Button title="Reset Password" onPress={handleResetPassword} />
    </View>
  );
};



export default ForgotPasswordScreen;
 