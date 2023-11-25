import { View , Text, TextInput, StyleSheet} from "react-native";

function Promo() {
 return(
    <View style={styles.container}>
        <Text className="font-bold ml-2">Promo code</Text>
        <View className="mt-2">
        <TextInput 
            placeholder="Enter Promo code"
            className="h-14 mx-1 p-4 border border-gray-200 bg-gray-200 rounded-full"

        >
        </TextInput>
        <View 
        className="flex justify-center border-box h-14 w-28 rounded-full bg-orange-500"
        style={styles.btn}
        >
          <Text className="ml-8 text-xl font-semibold text-white">Apply</Text>
        </View>

        </View>
    </View>
 );
}

export default Promo;

const styles = StyleSheet.create({
    container: {
        position: 'relative'
    },
    btn : {
        position: 'absolute',
        right: 0
    }
})