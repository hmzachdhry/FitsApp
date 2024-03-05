import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#3498db', // Customize background color
    justifyContent: 'center',
    alignItems: 'center',
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
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#F0F0F0',
  },
  box: {
    backgroundColor: '#FFFFFF',
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
});
