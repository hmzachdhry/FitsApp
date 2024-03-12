import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();


  const HomeTabComponent = () => (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.header}>
          <Text style={styles.weatherInfo}></Text>
        </View>
        <Text style={styles.temp}>Min Temp: °F</Text>
        <Text style={styles.temp}>Max Temp: °F</Text>
      </View>
    </View>
  );

  const FitsTabComponent = () => (
    <View>
      <Text>sorted outfits</Text>
    </View>
  );

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeTabComponent} />
      <Tab.Screen name="Fits" component={FitsTabComponent} />
      {/* Add more screens as needed */}
    </Tab.Navigator>
  );
};

export default HomeScreen;
