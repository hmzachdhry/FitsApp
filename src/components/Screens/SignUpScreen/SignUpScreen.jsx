import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');

  
  const navigation = useNavigation(); // Hook to access navigation object

 
  const handleUsernameSubmit = async () => {
    try {
      const response = await fetch('backendAPI/checkUsernameEndpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username}),
      });

      if (response.ok) {
        const data = await response.json();

        if (data.exists) {
          setUsernameError('Username already in use. Please try a different one.');
        } else {
          setUsernameError('');
          navigation.navigate('Email');

          
        }
      } else {
        console.error('Error checking username availability');
      }
    } catch (error) {
      console.error('Error checking username availability:', error);
    }
  };

// only here to navigate for now
  const handleEmail = () => {
    navigation.navigate('Email')
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
      <Text style={styles.appName}>FITS</Text>
      </View>
      <Text style={styles.message}>Hi there! What should we call you?</Text>
      <TextInput
        style={styles.input}
        placeholder='Username'
        value={username}
        onChangeText={text => setUsername(text)}
        onSubmitEditing={handleUsernameSubmit}
      />
      <Text style={styles.message}>
        Your username will be used to login
      </Text>
      <Text style={styles.errorText}>{usernameError}</Text>
{/* onPress should be handleUsernameSubmit once logic is worked out */}
      <TouchableOpacity style={styles.button} onPress={handleEmail}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
