import { Text, View } from "react-native";

function OrderDetails() {
    return(
        <View className="space-y-4">
            <View>
               <Text className="font-medium text-lg">Order details</Text>
            </View>
            <View className="h-28 p-2 space-y-2 rounded-xl bg-primary5">
                <View className="flex-row justify-between">
                    <View>
                       <Text>Caramel Machiato x 2</Text>
                       <Text>Small, Oat milk</Text>
                    </View>
                 <Text>$9.40</Text>
                </View>
                <View className="flex-row justify-between">
                    <View>
                       <Text>Caramel Machiato x 2</Text>
                       <Text>Small, Oat milk</Text>
                    </View>
                 <Text>$9.40</Text>
                </View>
            </View>
            

        </View>
    )
}

export default OrderDetails;