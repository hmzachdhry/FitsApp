import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    position: 'absolute',
    top: 115,
    left: 115,
    right: 0,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  appName: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#EE4E34',
  },
  message: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#2B2A4C',
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
