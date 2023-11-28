import { Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';

function PickupDetails() {
    return(
        <View className="space-y-4">
            <View>
               <Text className="font-medium text-lg">Pick-up Details</Text>
            </View>
            <View className="h-20 p-2 space-y-2 rounded-xl bg-primary5">
                <View className="flex-row justify-between">
                    <View className="space-y-2">
                       <Text>Pick-up time</Text>
                       <Text>Pick-up Date</Text>
                    </View>
                    <Feather name="edit" size={24} color="black" />
                </View>                
            </View>
            

        </View>
    )
}

export default PickupDetails;