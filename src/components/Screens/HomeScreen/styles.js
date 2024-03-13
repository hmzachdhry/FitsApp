import {StyleSheet} from 'react-native';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

export const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FAF0E4', // Customize background color
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', // Ensure proper alignment of the elements inside the header
    marginBottom: 10, // Add margin bottom to give space between header and content
  },
  weatherText: {
    fontSize: 24,
    color: 'white',
  },
  cityText: {
    fontSize: 16,
    color: 'white',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#FAF0E4',
  },
  box: {
    backgroundColor: '#FAF0E4',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  weatherIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  weatherInfo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  temp: {
    fontSize: 16,
    marginBottom: 5,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EE4E34', // Change the background color as needed
    borderTopWidth: 1,
    borderTopColor: '#FAF0E4', // Change the border color as needed
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  plusButton: {
    width: 50,
    height: 50,
    backgroundColor: '#EE4E34', // Change the button background color
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusButtonText: {
    fontSize: 24,
    color: '#fff', // Change the button text color
  },
});
