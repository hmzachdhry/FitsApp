import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation(); 

  const handleSignUp = () => {
    // Navigate to the SignUp screen
    navigation.navigate('SignUp');
  };

  const handleLogin = () => {
    // Navigate to the Login screen
    navigation.navigate('Login');
  };
  const handleHome = () => {
    // Navigates to ForgotPasswordScreen when 'Forgot Password' button is pressed
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>FITS</Text>
      <Text style={styles.message}>
        Explore your very own world of outfits and find the right fit for you
        today
      </Text>
      {/* <Image source={require('path to img')} style={styles.image} /> */}
      <View style={styles.buttonContainer}>
        <Button title="New User" onPress={handleSignUp} />
        <Button title="Login" onPress={handleLogin} />
        <Button title="Home" onPress={handleHome} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    textAlign: 'center',
    marginBottom: 20,
  },
  //   image: {
  //     width: 200,
  //     height: 200,
  //     resizeMode: 'contain',
  //     marginBottom: 20,
  //   },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});

export default WelcomeScreen;
