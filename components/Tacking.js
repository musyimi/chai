import { Text, View } from "react-native";
import { Fontisto } from '@expo/vector-icons';

function Tracking() {
    return(
        <View>
            <View>
               <Text className="font-bold"> Order tracking </Text>
            </View>
            <View className="flex-row mt-4 space-x-8">
                <View className="h-64 w-14 rounded-full bg-primary5">
                    <View className=" h-44 w-14 rounded-full bg-primary2">
                        <View className="h-24 w-14 rounded-full bg-primary1">

                        </View>

                    </View>

                </View>
                <View className=" mt-12 space-y-10">
                    <View className="flex-row">
                       <Text>Order placed</Text>
                       <View className="ml-24">
                         <Fontisto name="checkbox-active" size={24} color="orange" />
                       </View>

                    </View>
                    <View className="flex-row">
                       <Text>Preparing</Text>
                       <View className="ml-32">
                          <Fontisto name="checkbox-passive" size={24} color="black" />
                       </View>

                    </View>
                    <View className="flex-row">
                       <Text>Order is ready</Text>
                       <View className="ml-24">
                        <Fontisto name="checkbox-passive" size={24} color="black" />
                       </View>

                    </View>
                    
                </View>
            </View>
        </View>
    )
}

export default Tracking;