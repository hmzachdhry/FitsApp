import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  Easing,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');

  
  const navigation = useNavigation(); // Hook to access navigation object

  useEffect(() => {
    setUsernameError('');
    setEmailError('');
  }, []);

  const handleUsernameSubmit = async () => {
    try {
      const response = await fetch('backend/checkUsername', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username}),
      });

      if (response.ok) {
        const data = await response.json();

        if (data.exists) {
          setUsernameError('Username already in use. Try another one.');
        } else {
          setUsernameError('');
          
        }
      } else {
        console.error('Error checking username availability');
      }
    } catch (error) {
      console.error('Error checking username availability:', error);
    }
  };

  // const handleEmailSubmit = async () => {
  //   try {
  //     const response = await fetch('backendEndpoint/checkEmail', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({email}),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();

  //       if (data.exists) {
  //         setEmailError('Email already in use. Try another one.');
  //       } else {
  //         setEmailError('');
        
  //       }
  //     } else {
  //       console.error('Error checking email availability');
  //     }
  //   } catch (error) {
  //     console.error('Error checking email availability:', error);
  //   }
  // };

  // const handlePasswordSubmit = async () => {
  //   // Assume there's a registration endpoint on the backend
  //   try {
  //     const response = await fetch('backendEndpoint/register', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({username, email, password}),
  //     });

  //     if (response.ok) {
  //       // Registration successful, navigate to HomeScreen
  //       navigation.navigate('Home');

  //       console.error('Error registering user');
  //     }
  //   } catch (error) {
  //     console.error('Error registering user:', error);
  //   }
  // };  

  const handleEmail = () => {
    navigation.navigate('Email')
  }

  return (
    <View style={styles.container}>
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

      <TouchableOpacity style={styles.button} onPress={handleEmail}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
