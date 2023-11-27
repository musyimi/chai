import { Text, View } from "react-native";

function ProductTotalPrice() {
   return(
    <View className="flex-row justify-between">
        <View>
          <Text className="font-semibold text-base text-gray-500">Total price</Text>
          <Text className="font-bold text-xl">$4.70</Text>
        </View>

        <View className=" flex justify-center border-box h-14 w-56 rounded-2xl bg-slate-500">
            <Text className="ml-16 text-white font-bold text-xl ">Add to cart</Text>
        </View>
        
    </View>
   );
}

export default ProductTotalPrice;