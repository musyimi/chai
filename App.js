import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import RegisterAndLoginScreen from './screens/RegisterAndLoginScreen';
import HomePageScreen from './screens/HomePageScreen';

const stack = createStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='dark'/>
    <NavigationContainer>
     <stack.Navigator>
      <stack.Screen name="Register / Login" component={RegisterAndLoginScreen}/>
      <stack.Screen name="Home" component={HomePageScreen}/>
     </stack.Navigator>
     </NavigationContainer>
    </>
  );
}


