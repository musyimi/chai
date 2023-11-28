import { View, Text, StyleSheet } from "react-native";

function ConfirmationTop() {
    return(
        <View className="h-36 bg-primary1 rounded-b-2xl">
            <View className="mt-14 ml-10">
                <Text className="text-xl font-bold text-white">Thank you for your order</Text>
                </View>   

                <View className="h-18  rounded-full mx-4 bg-primary4"
                style={styles.delivery}
                  >
                <View className="flex-row">
                    <View className="h-16 w-44 rounded-full bg-primary3"
                    style={styles.text}
                    >
                        <Text className="text-white text-lg" >Tracking</Text>
                    </View>
                    <View className="h-16 w-44 rounded-full bg-primary4"
                    style={styles.text}
                    >
                    <Text className="text-primary1 text-lg">Order Details</Text>
                    </View>
                </View>
        
            </View>         
        </View>
    )
}

export default ConfirmationTop;

const styles = StyleSheet.create({
    delivery: {
     marginTop: 26
    },
    text: {
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center'
   }
 })