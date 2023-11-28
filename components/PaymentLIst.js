import { StyleSheet, Text, View } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';


function PaymentList() {
    return(
    <View>
        <View className=" flex-row h-20 rounded-lg bg-primary5">
            <View className="h-16 w-16 rounded-lg m-2 bg-primary2">
                
            </View>
            <View className="flex-row mt-5 ml-4">
                <View>
                    <Text>MasterCard</Text>
                    <Text>**** 2048</Text>
                </View>
                <View className="ml-36">
                    <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={20} color="black" />       
                </View>
            </View>
        </View>
    </View>
    )
}

export default PaymentList;

const styles = StyleSheet.create({
    icon: {
        right: 0
    }
})