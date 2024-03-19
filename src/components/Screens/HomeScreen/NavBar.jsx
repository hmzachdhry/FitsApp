import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {styles} from './styles';
import HomeTab from './HomeTab';
import FitsTab from './FitsTab'

const Tab = createBottomTabNavigator();

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

const NavBar = () => (
    
    <View style={styles.screenContainer}>
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        tabBarOptions={{
          style: styles.tabBar, // Apply tab bar styles
        }}>
        <Tab.Screen name="Home" component={HomeTab} /> 
        <Tab.Screen name="Fits" component={FitsTab} />
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


export default NavBar