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
  input: {
    height: 40,
    borderColor: 'gray',
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '70%',
  },
  forgotPassword: {
    marginTop: 10,
    color: 'gray',
  },
  button: {
    backgroundColor: '#2B2A4C',
    borderRadius: 20,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
