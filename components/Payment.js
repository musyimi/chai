import { Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';

function Payment() {
    return(
        <View className="space-y-4">
            <View>
               <Text className="font-medium text-lg">Payment</Text>
            </View>
            <View className="h-12 p-2 space-y-2 rounded-xl bg-primary5">
                <View className="flex-row justify-between">
                    <View className="flex-row space-x-12">
                       <Text>Card/M-pesa</Text>
                       <Text>***** 2048</Text>
                    </View>
                    <Feather name="edit" size={24} color="black" />
                </View>                
            </View>
            

        </View>
    )
}

export default Payment;