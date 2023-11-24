import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons , EvilIcons, Feather} from '@expo/vector-icons';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';


import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import RegisterAndLoginScreen from './screens/RegisterAndLoginScreen';
import HomePageScreen from './screens/HomePageScreen';
import MenuScreen from './screens/MenuScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import ProfileScreen from './screens/ProfileScreen';
import CartScreen from './screens/CartScreen';


const stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();


function BottomNavigator() {
  return(
    <BottomTab.Navigator
       screenOptions={{
        tabBarStyle: { 
          position: 'absolute' ,
          bottom: 10,
          margin: 4,
          borderRadius: 25,
          
        },
       }}
    >
      <BottomTab.Screen
       name="Home" component={HomePageScreen} 
       options={{
        headerShown: false,
        tabBarActiveTintColor: '#E65738',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="home-outline" size={size} color={color} />
        ),
       }}
       />
      <BottomTab.Screen 
      name="Menu" component={MenuScreen}
      options={{
        headerShown: false,
        tabBarActiveTintColor: '#E65738',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="book-outline" size={size} color={color} />
        ),
       }}
       />
      <BottomTab.Screen name="Favourites" 
      component={FavouritesScreen} 
      options={{
        headerShown: false,
        tabBarActiveTintColor: '#E65738',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="ios-heart-outline" size={size} color={color} />
        ),
       }}
       />
      <BottomTab.Screen name="Profile"
       component={ProfileScreen} 
       options={{
        headerShown: false,
        tabBarActiveTintColor: '#E65738',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="ios-person-outline" size={size} color={color} />
        ),
       }}
       />
      <BottomTab.Screen name="Cart" 
      component={CartScreen} 
      options={{
        headerShown: false,
        tabBarActiveTintColor: '#E65738',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="ios-cart-outline" size={size} color={color} />
        ),
       }}
       />
    </BottomTab.Navigator>
  );

}


export default function App() {
  return (
    <>
    <StatusBar style='auto'/>
    <NavigationContainer>
      <stack.Navigator>
          <stack.Screen name="Register / Login" component={RegisterAndLoginScreen}
            options={{
              headerShown: false
             }}
          />
          <stack.Screen 
          name="Home Screen" 
          component={BottomNavigator}
          options={{
            headerShown: false
          }}
          
          />
      </stack.Navigator>


     </NavigationContainer>
    </>
  );
}


