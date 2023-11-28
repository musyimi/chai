import { Text, View, StyleSheet, Pressable } from "react-native";
import ReviewTop from "../components/ReviewTop";
import OrderDetails from "../components/OrderDetails";
import Deliver from "../components/Deliver";
import PickupDetails from "../components/PickupDetails";
import Payment from "../components/Payment";

function ReviewOrderScreen({navigation}) {

    function onPressHandler() {
        navigation.navigate('Confirmation');
    }

    return(
        <View>
            <View>
                <ReviewTop />
            </View>
            <View className="mx-4 mt-4">
                 <OrderDetails />
            </View>
            <View className="mx-4 mt-2">
                <Deliver />
            </View>
            <View className="mx-4 mt-2">
                <PickupDetails />
            </View>
            <View className="mx-4 mt-2">
                <Payment />
            </View>
            <View className="flex-row justify-between mx-4 mt-4">
                <View>
                    <Text className="font-medium">Subtotal</Text>
                    <Text>$11.20</Text>
                </View>
                <Pressable className="h-14 w-40 rounded-3xl bg-primary1" 
                  style={styles.text}
                  onPress={onPressHandler}
                >
                  <Text className="text-white text-lg">Place Order</Text>
                </Pressable>
            </View>
          
        </View>
    )
}

export default ReviewOrderScreen;


const styles = StyleSheet.create({
    text: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
})