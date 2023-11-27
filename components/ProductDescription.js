import { Text, View } from "react-native";

function ProductDescription() {
    return(
        <View className="space-y-2 mt-4">
            <Text className="font-semibold text-xl">Caramel Macchiato</Text>
            <Text className="font-semibold text-base text-gray-500">Our Caramel Macchiato is the perfect combination of 
                a rich-tasting espresso, creamy milk and the sweet buttery aroma of of caramel</Text>
        </View>
    )
}

export default ProductDescription;