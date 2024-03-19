import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {styles} from './styles';

// Need to fetch users location via Geolocation API 
// Is there a way to just doing it using one API?
// Add in box that shows today's fit. What is this supposed to display?
const HomeTab = () => {

    const [minTemp, setMinTemp] = useState(null);
    const [maxTemp, setMaxTemp] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=imperial&appid=f7c87a482501830cec6f2d835364c7b4',
      );
      const data = await response.json();
      const min = data.main.temp_min;
      const max = data.main.temp_max;
      setMinTemp(min);
      setMaxTemp(max);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

 return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.header}>
          <Text style={styles.weatherInfo}>Today's Weather</Text>
        </View>
        <Text style={styles.temp}>
          Min Temp: {minTemp !== null ? Math.round(minTemp) : 'Loading...'}°F
        </Text>
        <Text style={styles.temp}>
          Max Temp: {maxTemp !== null ? Math.round(maxTemp) : 'Loading...'}°F
        </Text>
        <Text>description here</Text>
      </View>
    </View>
  );
 }
  export default HomeTab;