import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

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

export default WelcomeScreen;
