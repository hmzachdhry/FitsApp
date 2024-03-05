import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles'


const HomeScreen = ({minTemp, maxTemp, weatherInfo, weatherImage}) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.header}>
          <Image source={weatherImage} style={styles.weatherIcon} />
          <Text style={styles.weatherInfo}>{weatherInfo}</Text>
        </View>
        <Text style={styles.temp}>Min Temp: {minTemp}°F</Text>
        <Text style={styles.temp}>Max Temp: {maxTemp}°F</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
