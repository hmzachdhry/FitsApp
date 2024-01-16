import React, {useState, useRef} from 'react';
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

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const animatedValue = useRef(new Animated.Value(0)).current;

  const handleUsernameSubmit = () => {
    const isUsernameValid = checkUsernameValidity(username);

    if (isUsernameValid) {
      setUsernameError('');
      animateInput(1);
    } else {
      setUsernameError('Username already in use. Try another one.');
    }
  };

  const handleEmailSubmit = () => {
    animateInput(2);
  };

  const handlePasswordSubmit = () => {
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const checkUsernameValidity = enteredUsername => {
    // Check if the username exists in the backend
    const existingUsernames = [
      'existinguser1',
      'existinguser2',
      'existinguser3',
    ];
    return !existingUsernames.includes(enteredUsername);
  };

const animateInput = step => {
  Animated.timing(animatedValue, {
    toValue: step,
    duration: 500,
    easing: Easing.ease,
    useNativeDriver: false,
  }).start(({finished}) => {
    // After animation completion, reset the translateY to 0 if finished, else to the previous value
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
        <Text>Username:</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={text => setUsername(text)}
          onSubmitEditing={handleUsernameSubmit}
        />
        <Text style={styles.errorText}>{usernameError}</Text>

        {animatedValue._value === 1 && (
          <>
            <Text>Email:</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
              onSubmitEditing={handleEmailSubmit}
            />
          </>
        )}

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
