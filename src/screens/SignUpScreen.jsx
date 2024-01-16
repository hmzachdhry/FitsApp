import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const SignUpScreen = () => {
  const [step, setStep] = useState(0);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const handleUsernameSubmit = () => {
    const isUsernameValid = checkUsernameValidity(username);

    if (isUsernameValid) {
      setUsernameError('');
      setStep(1);
    } else {
      setUsernameError('Username already in use. Try another one.');
    }
  };

  const handleEmailSubmit = () => {
    setStep(2);
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

  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>

      <View style={{opacity: step === 0 ? 1 : 0}}>
        <Text>Username:</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={text => setUsername(text)}
          onSubmitEditing={handleUsernameSubmit}
        />
        <Text style={styles.errorText}>{usernameError}</Text>
      </View>

      <View style={{opacity: step === 1 ? 1 : 0}}>
        <Text>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
          onSubmitEditing={handleEmailSubmit}
        />
      </View>

      <View style={{opacity: step === 2 ? 1 : 0}}>
        <Text>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
          onSubmitEditing={handlePasswordSubmit}
        />
      </View>

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
  input: {
    height: 40,
    width: '90%', // Increase the width as needed
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    alignSelf: 'center', // Align input boxes to the center of the parent
    textAlignVertical: 'center', // Vertically center the text in the input box
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});


export default SignUpScreen;
