import { View, Text, StyleSheet, Pressable } from "react-native";
import DeliveryTop from "../components/DeliveryTop";
import Calendar from "../components/Calendar";
import Picker from "../components/Picker";
import PickupNow from "../components/PIckupNow";

function DeliveryScreen({navigation}) {
    function onPressHandler() {
        navigation.navigate('Payment');
    }
    return(
        <View>
            <View>
               <DeliveryTop />
            </View>
            <View className="mx-4 mt-4">
                <Calendar />
            </View>
            <View className="mx-4 mt-4">
                <Picker />
            </View>
            <View className="mx-4 mt-4">
              <PickupNow />
            </View>
            <Pressable className=" mx-4 mt-4 h-16 rounded-xl bg-primary2"
              style={styles.text}
              onPress={onPressHandler}
            >
               <Text className="text-xl text-white">Next</Text>
            </Pressable>
        </View>
    )
}

export default DeliveryScreen;

const styles = StyleSheet.create({
    text: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
})