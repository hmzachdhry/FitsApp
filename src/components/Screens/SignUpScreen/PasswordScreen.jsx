import React, {useState, useRef, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const PasswordScreen = () => {
const navigation = useNavigation()

const handleEmailVerification = () => {
  navigation.navigate('EmailVerification');
}

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.appName}>FITS</Text>
      </View>
      <Text style={styles.message}>Create a password</Text>
      <TextInput style={styles.input} placeholder="Password" />
      <Text style={styles.message}>
        Your password will be used to keep your account safe
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={handleEmailVerification}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};


export default PasswordScreen;