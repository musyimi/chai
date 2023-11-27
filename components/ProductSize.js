import { Text, View } from "react-native";

function ProductSize() {
    return(
        <View className="space-y-2">
            <View className="flex-row justify-between">
                <Text className="font-bold text-lg">Size</Text>
                <Text className="font-semibold text-lg text-gray-500">250ml</Text>
            </View>
            <View className="flex-row space-x-6">
                <View className="flex justify-center border-box h-10 w-24 rounded-full bg-primary3">
                    <Text className="ml-6 text-white text-lg ">Small</Text>
                </View>
                <View className="flex justify-center border-box h-10 w-24 rounded-full bg-primary3">
                    <Text className="ml-6 text-white text-lg ">Medium</Text>
                </View>
                <View className="flex justify-center border-box h-10 w-24 rounded-full bg-primary3">
                    <Text className="ml-6 text-white text-lg ">Large</Text>
                </View>
            </View>
        </View>
    )
}

export default ProductSize;