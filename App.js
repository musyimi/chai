import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import { s } from 'react-native-wind'

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView >
        <Text style={s `font-bold`}>Helo there</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


