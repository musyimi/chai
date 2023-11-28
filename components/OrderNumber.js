import { Text, TextInput, View , StyleSheet} from "react-native"

function OrderNumber() {
    return(
        <View>
            <View className="flex-row justify-between h-16 rounded-3xl bg-primary5">
              <TextInput 
              className="text-base p-4 font-semibold"
                 placeholder="Order Number"
              />
              <View className="h-16 w-20 rounded-3xl bg-primary1"
                  style={styles.text}
              >
                <Text className="text-white text-xl">85</Text>
              </View>
            </View>
        </View>
    )
}

export default OrderNumber

const styles = StyleSheet.create({
    text: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
})