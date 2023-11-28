import { Text, View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

function CafeSelect() {
    return(
        <View className="space-y-3">
            <View className="flex-row justify-between">
                <Text className="font-medium text-base">Frequently chosen</Text>
                <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={20} color="black" />
            </View>
            <View className="flex-row justify-between">
                <Text className="font-medium text-base">Search by city</Text>
                <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={20} color="black" />
            </View>
            <View className="h-12 bg-gray-300 rounded-full" >
                <TextInput
                   className="p-2 ml-3 text-lg"                
                   placeholder="City"
                />
            </View>
        </View>
    )
}

export default CafeSelect;

 const styles = StyleSheet.create({
    search: {
        alignContent: 'center'
     }
 }
    
)