import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const EmailScreen = () => {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handlePassword = () => {
  navigation.navigate('Password');
  };

  const handleEmailSubmit = async () => {
    try {
      const response = await fetch('backendAPI/checkEmailendpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json()

      if (data.exists) {
        setEmailError('This email is already associated with an account. Try signing in instead.')
      } else {
        setEmailError('');
        navigation.navigate('Password')
      }
    }  catch (error) {
      console.error('Error checking email:', error);
      Alert.alert('Error', 'An error occurred while checking the email')
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.appName}>FITS</Text>
      </View>
      <Text style={styles.message}>What's your email?</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.message}>We'll use your email for verification</Text>
      <Text style={styles.errorText}>{emailError}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={handlePassword}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmailScreen;
