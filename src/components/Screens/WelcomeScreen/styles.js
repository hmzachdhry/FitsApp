import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#EE4E34',
  },
  message: {
    textAlign: 'center',
    marginBottom: 20,
  },
  //   image: {
  //     width: 200,
  //     height: 200,
  //     resizeMode: 'contain',
  //     marginBottom: 20,
  //   },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20, // Add margin bottom for spacing between buttons
  },
});
