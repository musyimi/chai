import { View , Text, StyleSheet, Modal, Pressable} from "react-native";
import Productqty from "../components/Productqty";
import ProductDescription from "../components/ProductDescription";
import ProductSize from "../components/ProductSize";
import CustomizeCoffee from "../components/CustomizeCoffee";
import ProductTotalPrice from "../components/ProductTotalPrice";
import ProductModal from "../components/ProductModal";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from "react";

function ProductScreen({onPress}) {
     const[modalIsVisible, setModalIsVisible] = useState(false);

     function customizeYourCoffee() {
        setModalIsVisible(true);
     }

     function saveCustomizedCoffee() {
        setModalIsVisible(false);

     }

    return(
        <View >
            <View className="h-44 bg-primary1 rounded-b-2xl ">
             
            </View>
            <View 
            className="ml-4"
            style={styles.qty}
            >
                <Productqty />
            </View>
            <View className="mx-4">
                <ProductDescription />
            </View>
            <View  className="mx-4 mt-4">
                <ProductSize />
            </View>
            <View className="mx-4 mt-4">
                <View>
                    <Text className="font-bold text-lg">Customize your coffee</Text>
                </View>
                <View className="flex-row space-x-4 mt-2">
                    <View>
                      <CustomizeCoffee />
                    </View>
                    <View>
                      <CustomizeCoffee />
                    </View>
                    <View>
                      <CustomizeCoffee />
                    </View>
                    <Pressable className="mt-4" onPress={customizeYourCoffee}>
                        <MaterialCommunityIcons name="pencil-circle" size={62} color="orange" />
                        <Text>Change</Text>
                    </Pressable>

                </View>
               
            </View>
            <Modal 
            transparent= {true}
            visible={modalIsVisible} 
            animationType="slide"     
            >
                <ProductModal />
                <Pressable 
                    className="border-box h-14 w-36  rounded-3xl bg-gray-500"
                     style={styles.pressable}
                    onPress={saveCustomizedCoffee}
                    >
                    <Text className="text-white text-xl">
                        Save</Text>
                </Pressable>
            </Modal>
            <View className="mx-4 mt-4">
                <ProductTotalPrice />
            </View>
        </View>
    );
}

export default ProductScreen;

const styles = StyleSheet.create({
    container: {

    },
    qty: {
       marginTop: -64
    },
    pressable: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 12,
        marginLeft: 60
      }
 
})