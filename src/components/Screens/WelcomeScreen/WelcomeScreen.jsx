import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {globalStyles} from '../globalStyles'

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
        <TouchableOpacity style={globalStyles.secondaryButton} onPress={handleSignUp}>
          <Text style={globalStyles.secondaryButtonText}>New User</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.button} onPress={handleLogin}>
          <Text style={globalStyles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.button} onPress={handleHome}>
          <Text style={globalStyles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;
