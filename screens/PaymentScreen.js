import { Text, View, Pressable, StyleSheet } from "react-native";
import PaymentTop from "../components/PaymentTop";
import PaymentType from "../components/PaymentType";
import PaymentList from "../components/PaymentLIst";
import PaymentAdd from "../components/PaymentAdd";

function PaymentScreen({navigation}) {

    function onPressHandler() {
        navigation.navigate('Review');
    }

    return(
        <View>
            <View>
                <PaymentTop />
            </View>
            <View className=" flex-row space-x-4 mx-8 mt-8">
                <View className="">
                    <PaymentType />
                </View>
                <View className="">
                    <PaymentType />
                </View>
                <View className="">
                    <PaymentType />
                </View>    
                       
            </View>
            <View className="mx-4 mt-5 space-y-2">
                <View>
                   <PaymentList />
                </View>
                <View>
                   <PaymentList />
                </View>

            </View>  
            <View className="mx-4 mt-4">
                <PaymentAdd />
            </View>

            <Pressable className="h-16 mx-4 mt-5 rounded-lg bg-primary2"
                   style={styles.text}
                   onPress={onPressHandler}
            >
               <Text className="text-xl text-primary5">Next</Text>
            </Pressable>
            
        </View>
    )
}

export default PaymentScreen;

const styles = StyleSheet.create({
    text: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
})