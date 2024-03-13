import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {styles} from './styles';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
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

  // Need to fetch users location via Geolocation API and pass city, state as props to HomeTabComponent
  // Is there a way to just doing it using one API?

  const HomeTabComponent = () => (
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

  const FitsTabComponent = () => (
    <View>
      <Text>Sorted outfits</Text>
    </View>
  );

  const UploadTabComponent = ({navigation}) => {
    const handleUploadImage = () => {
      // Implement image upload functionality here
      Alert.alert(
        'Upload Image',
        'Functionality to upload image will be implemented soon!',
      );
    };

    return (
      <TouchableOpacity onPress={handleUploadImage} style={styles.plusButton}>
        <Text style={styles.plusButtonText}>+</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screenContainer}>
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        tabBarOptions={{
          style: styles.tabBar, // Apply tab bar styles
        }}>
        <Tab.Screen name="Home" component={HomeTabComponent} />
        <Tab.Screen name="Fits" component={FitsTabComponent} />
        <Tab.Screen
          name="Upload"
          component={UploadTabComponent} // Use the defined component
          options={{
            tabBarIcon: () => <Text style={styles.plusButtonText}>+</Text>,
            tabBarButton: () => <UploadTabComponent />,
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default HomeScreen;
