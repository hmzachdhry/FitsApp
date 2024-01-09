import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const animatedValue = useRef(new Animated.Value(0)).current;

  const handleNameSubmit = () => {
    animateInput(1);
  };

  const handleUsernameSubmit = () => {
    animateInput(2);
  };

  const handlePasswordSubmit = () => {
    animateInput(3);
  };

  const handleEmailSubmit = () => {
    // Save the user information to the backend or perform other actions
    console.log('Name:', name);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const animateInput = step => {
    Animated.timing(animatedValue, {
      toValue: step,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1, 2, 3],
    outputRange: [0, -200, -400, -600],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.inputContainer, {transform: [{translateY}]}]}>
        {animatedValue._value === 0 && (
          <>
            <Text>Name:</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={text => setName(text)}
              onSubmitEditing={handleNameSubmit}
            />
          </>
        )}
        {animatedValue._value === 1 && (
          <>
            <Text>Username:</Text>
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={text => setUsername(text)}
              onSubmitEditing={handleUsernameSubmit}
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
        {animatedValue._value === 3 && (
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
});

export default SignUpScreen;
