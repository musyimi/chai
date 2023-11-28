import { View, Text, StyleSheet, Pressable } from "react-native";
import ConfirmationTop from "../components/ConfirmationTop";
import OrderNumber from "../components/OrderNumber";
import ConfirmationTl from "../components/ConfirmationTl";
import Tracking from "../components/Tacking";

function ConfirmationScreen({navigation}) {

    function onPressHandler() {
        navigation.navigate('Home');
    }

    return(
        <>
          <View>
            <View>
              <ConfirmationTop />
            </View>
          </View>
          <View className="mx-4 mt-12">
            <OrderNumber/>
          </View>
          <View className="mx-4 mt-4">
            <ConfirmationTl />
          </View>
          <View className="mx-4 mt-6">
             <Tracking />
          </View>

          <Pressable className=" mx-4 mt-4 h-16 rounded-3xl bg-primary2"
              style={styles.text}
              onPress={onPressHandler}
            >
               <Text className="text-xl text-white">Back home</Text>
            </Pressable>

        </>
    )

      
}

export default ConfirmationScreen;

const styles = StyleSheet.create({
    text: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
})