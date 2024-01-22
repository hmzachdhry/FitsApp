import {useNavigation} from '@react-navigation/native';

const handleLogin = async () => {
  const navigation = useNavigation(); 

  try {
    // Make a request to backend for auth
    const response = await fetch('insert backend URL here', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password}),
    });

    if (response.ok) {
      // If authentication is successful
      const data = await response.json();
      Alert.alert('Login Successful', `Welcome back, ${data.username}!`);

      // Navigate to HomeScreen 
      navigation.navigate('Home'); 
    } else {
      // If auth fails
      Alert.alert('Login Failed', 'Invalid username or password.');
    }
  } catch (error) {
    console.error(error);
    // Handle error 
  }
};

export default HomeScreen;