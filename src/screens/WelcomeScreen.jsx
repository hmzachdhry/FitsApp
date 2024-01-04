import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FITS</Text>
      <Text style={styles.welcomeMessage}>Organize your outfits!</Text>

      <Input placeholder="Username" />
      <Input placeholder="Password" secureTextEntry />

      <Button
        title="Login"
        onPress={() => console.log('Login button pressed')}
      />
      <Button
        title="Sign Up"
        type="outline"
        onPress={() => console.log('Sign Up button pressed')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  welcomeMessage: {
    fontSize: 18,
    marginBottom: 30,
  },
});

export default WelcomeScreen;
