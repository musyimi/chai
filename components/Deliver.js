import { Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';

function Deliver() {
    return(
        <View className="space-y-4">
            <View>
               <Text className="font-medium text-lg">Deliver to</Text>
            </View>
            <View className="h-18 p-2 space-y-2 rounded-xl bg-primary5">
                <View className="flex-row justify-between">
                    <View>
                       <Text>Nyumbani childrens</Text>
                       <Text>Ruaka</Text>
                    </View>
                    <Feather name="edit" size={24} color="black" />
                </View>                
            </View>
            

        </View>
    )
}

export default Deliver;