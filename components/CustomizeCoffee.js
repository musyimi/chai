import { Text, View } from "react-native";
import { Fontisto } from '@expo/vector-icons';

function CustomizeCoffee() {
    return(
      <View className="space-y-3">

        <View 
          className="border-box h-44 w-20 rounded-full border border-red-200 bg-red-100">
            <View className="">              
                <View className="ml-6 mt-6">
                   <Fontisto  name="test-bottle" size={42} color="orange" />
                </View>
                <View className="ml-5 mt-2 space-y-2">
                    <Text className="text-lg font-light">Milk</Text>
                    <Text className="font-semibold text-lg">Oat</Text>
                </View>
                
            </View>

        </View>
       
      </View>
    );
}

export default CustomizeCoffee;