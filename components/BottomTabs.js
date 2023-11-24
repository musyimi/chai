import { Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePageScreen from "../screens/HomePageScreen";
import RegisterAndLoginScreen from "../screens/RegisterAndLoginScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomePageScreen} />
          <Tab.Screen name="Settings" component={RegisterAndLoginScreen} />
        </Tab.Navigator>
      );
    }

const styles = StyleSheet.create({
    
});