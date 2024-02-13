import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '65%',
  },
  button: {
    backgroundColor: '#2B2A4C',
    borderRadius: 20,
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
