import { Text, View, Pressable } from "react-native";
import Cart from "../components/Cart";
import Promo from "../components/Promo";
import Checkout from "../components/Checkout";



function CartScreen({navigation}) {
    function onPressHandler() {
        navigation.navigate('Delivery');
    }
    
    return(
        <>
          <View className="bg-primary1 h-36 rounded-b-2xl  ">
            <Text className="mt-12 mx-4 text-2xl text-white font-semibold">My Cart</Text>
          
        </View>
  
        <View className="mt-4">
            <Cart/>
            <Cart/>
        </View >

        <View className="mx-4 mt-2">
            <Promo />
        </View>
        <Pressable
          onPress={onPressHandler}
          >
            <Checkout />
        </Pressable>
        </>
        
    );

}

export default CartScreen;