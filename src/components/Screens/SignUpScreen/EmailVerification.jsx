import React, {useState, useRef, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const EmailVerification = () => {
      return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.appName}>FITS</Text>
          </View>
          <Text style={styles.message}>Last step! We sent an email to</Text>
          <Text style={styles.emailName}>bestemail@email.com</Text>
          <Text style={styles.message}>
            To complete your sign up, click on the link sent to your email
          </Text>
          <Text style={styles.message}>Didn't receive the email?</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Resend Email</Text>
          </TouchableOpacity>
        </View>
      );
}

export default EmailVerification;