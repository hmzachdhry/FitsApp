import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import NavBar from './NavBar'


const HomeScreen = () => {
// eventually will import an icon library and remove the text for tabs
  return (
    <View style={styles.screenContainer}>
      <NavBar/>
    </View>
  );
};
export default HomeScreen;
