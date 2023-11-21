import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import RegisterAndLoginScreen from './screens/RegisterAndLoginScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView >
         <RegisterAndLoginScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


