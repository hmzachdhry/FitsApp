import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  button: {
    backgroundColor: '#2B2A4C',
    borderRadius: 20,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderColor: '#2B2A4C',
    borderWidth: 2,
    borderRadius: 20,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 1,
  },
  secondaryButtonText: {
    color: '#2B2A4C',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

