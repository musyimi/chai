import { Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';

function PaymentType() {
    return(
        <View>
            <View className="h-40 w-24 rounded-full bg-primary3">
                <View className="h-20 w-20 rounded-full m-2 bg-primary1">
                    <View className="m-6">
                      <Feather name="credit-card" size={32} color="white" />     
                    </View>            
                </View>
                <Text className="ml-6 text-xl text-white">Card</Text>
            </View>
        </View>
    )
}

export default PaymentType;