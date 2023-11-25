import { View, Text , Stylesheet, StyleSheet} from "react-native";
import { AntDesign } from '@expo/vector-icons';

function Cart() {
    return(
        <View style={styles.cart}>
            <View className="border-box h-32 bg-gray-200 mx-4 rounded-lg">
                <View className="border-box h-28 bg-gray-300 w-28 rounded-lg m-2">

                </View>
            </View>
           <View 
             style={styles.details}
             className="ml-40 mt-4 space-y-2"
             >
                <Text className="font-semibold">Caramel Machiato</Text>
                <Text className="text-sm">Small, Oat milk</Text>
                <Text className="font-bold">$9.40</Text>
           </View>
           <View 
           className="border-box h-32 w-10 rounded-lg  bg-orange-500"
           style={styles.qty}
           > 
           <View className="p-2 space-y-6">
                <AntDesign name="plus" size={24} color="white" />
                <Text className="ml-2 text-white text-lg">2</Text>
                <AntDesign name="minus" size={24} color="white" />
           </View>
           

           </View>
        </View>
    );
}

export default Cart;

const styles = StyleSheet.create({
    cart: {
        position: 'relative',   
        marginTop: 6   
    },
    details:{
        position: 'absolute',
    
    }, 
    qty: {
        position: 'absolute',
        right: 16
    }
})