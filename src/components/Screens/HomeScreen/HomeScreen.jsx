import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Animated} from 'react-native';
import {styles} from './styles';

const HomeScreen = () => {
  const [weatherData, setWeatherData] = useState(null);
  const scrollY = new Animated.Value(0);

  useEffect(() => {
   
    // Fetch weather data from API
    // Replace 'YOUR_API_KEY' and 'YOUR_CITY' with API key and city
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=YOUR_CITY&appid=YOUR_API_KEY`,
    )
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.error('Error fetching weather data:', error));
  }, []);

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [200, 100],
    extrapolate: 'clamp',
  });

  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingTop: 200}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}>
       

        {/* Weather */}
        <Animated.View style={[styles.header, {height: headerHeight}]}>
          {/* {weatherData && (
            <>
              <Text
              <Text style={styles.cityText}>{weatherData.name}</Text>
            </>
          )} */}
        </Animated.View>
      </ScrollView>
    </View>
  );
};

// const styles = StyleSheet.create({
//   header: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: '#3498db', // Customize background color
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   weatherText: {
//     fontSize: 24,
//     color: 'white',
//   },
//   cityText: {
//     fontSize: 16,
//     color: 'white',
//   },
// });

export default HomeScreen;
