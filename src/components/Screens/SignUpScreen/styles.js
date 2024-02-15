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
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '65%',
  },
  button: {
    backgroundColor: '#2B2A4C',
    borderRadius: 20,
    width: 87,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    color: '#2B2A4C',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  appName: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#EE4E34',
  },
  errorText: {
    color: 'red',
    // marginBottom: 10,
  },
  emailName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#EE4E34',
    marginBottom: 15,
  },
});
