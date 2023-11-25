import { View, Text } from "react-native";

function Checkout() {
  return(
    <>
     <View className="mx-4 mt-4 p-2 space-y-4">
        <View className="space-y-2">
            <View className=" flex-row justify-between">
                <Text className="font-bold">Cart</Text>
                <Text>$12.40</Text>
            </View>
            <View className=" flex-row justify-between">
                <Text className="font-bold">Discount</Text>
                <Text>$12.40</Text>
            </View>
        </View>
        
        <View className=" flex-row justify-between">
            <Text className="font-bold">Total</Text>
            <Text>$12.40</Text>
        </View>
        
    </View>

    <View className="border-box h-14 mx-4 mt-2 rounded-full bg-gray-600">
        <Text 
        className="text-white text-xl font-bold ml-32 mt-3"
        >Check Out</Text>
    </View>
    </>
    
  );
}

export default Checkout;