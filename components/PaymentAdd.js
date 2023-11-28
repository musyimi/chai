import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

function PaymentAdd() {
    return(
        <View>
            <View className="flex-row pt-5 pl-4 space-x-5 h-16 rounded-lg bg-primary5" >
               <AntDesign name="plus" size={24} color="black" />
                <View >
                   <Text className="font-medium">Add new card</Text>
                </View>

            </View>

        </View>
    )
}

export default PaymentAdd;

const styles = StyleSheet.create({

})