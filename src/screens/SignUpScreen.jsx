import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Animated,
  Easing,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const animatedValue = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation(); // Hook to access navigation object

  useEffect(() => {
    setUsernameError('');
    setEmailError('');
  }, [animatedValue._value]);

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
          animateInput(1);
        }
      } else {
        console.error('Error checking username availability');
      }
    } catch (error) {
      console.error('Error checking username availability:', error);
    }
  };

  const handleEmailSubmit = async () => {
    try {
      const response = await fetch('backendEndpoint/checkEmail', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email}),
      });

      if (response.ok) {
        const data = await response.json();

        if (data.exists) {
          setEmailError('Email already in use. Try another one.');
        } else {
          setEmailError('');
          animateInput(2);
        }
      } else {
        console.error('Error checking email availability');
      }
    } catch (error) {
      console.error('Error checking email availability:', error);
    }
  };

  const handlePasswordSubmit = async () => {
    // Assume there's a registration endpoint on the backend
    try {
      const response = await fetch('backend/register', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, email, password}),
      });

      if (response.ok) {
        // Registration successful, navigate to HomeScreen
        navigation.navigate('Home'); 
        
        console.error('Error registering user');
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const animateInput = step => {
    Animated.timing(animatedValue, {
      toValue: step,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start(({finished}) => {
      animatedValue.setValue(finished ? 0 : step - 1);
    });
  };

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, -200, -400],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.inputContainer, {transform: [{translateY}]}]}>
        {/* ... (same as before) */}

        {animatedValue._value === 2 && (
          <>
            <Text>Password:</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry
              onSubmitEditing={handlePasswordSubmit}
            />
          </>
        )}
      </Animated.View>

      <Button title="Submit" onPress={handlePasswordSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SignUpScreen;
