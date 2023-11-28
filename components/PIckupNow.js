import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';


function PickupNow() {
    return(
        <View className="space-y-2">
            <View className="flex-row justify-between">
                <View className="space-y-2">
                  <Text className="font-medium">Pick up now</Text>
                  <Text>Your order will be ready in 5-7 minutes</Text>
                </View>            
               <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={20} color="black" />
            </View>
           
            
        </View>
    )
}

export default PickupNow;

