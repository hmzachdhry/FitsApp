import React, {useState, useRef, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const EmailScreen = () => {
  const navigation = useNavigation();

  const handlePassword = () => {
    navigation.navigate('Password');
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.appName}>FITS</Text>
      </View>
      <Text style={styles.message}>What's your email?</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <Text style={styles.message}>We'll use your email for verification</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={handlePassword}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmailScreen;
