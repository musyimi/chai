import { Pressable, Text, View ,StyleSheet } from "react-native";
import { AntDesign, EvilIcons } from '@expo/vector-icons';

function CoffeeMenu() {

    return(
        <View className="">
            <Pressable
                className="bg-gray-300 rounded-3xl w-40">
                <View style={styles.container}>
                    <View className="box-border h-52">
                    <View className="box-border h-24 w-36 m-2 bg-gray-400 rounded-2xl">
                        <Text></Text>
                        <View className="rounded-full bg-orange-600"  style={styles.icon}>
                          <EvilIcons name="heart" size={28} color="white" />
                        </View>                       
                    </View>
                    <View className="mx-2">
                        <Text className="font-bold text-base">Caramel</Text>
                        <Text className="font-bold text-base">Machiato</Text>
                    </View>
                    <View className="flex flex-row mx-2 mt-3">
                        <Text className="font-semibold text-orange-600 pr-1">Kshs.</Text>
                        <Text className="font-bold text-md">240</Text>
                    </View>
                    </View>
                    <View style={styles.add}>
                    <View className="p-2">
                        <AntDesign name="plus" size={24} color="white" />
                    </View>            
                </View>
                </View>
        
            </Pressable>
            
        </View>
        
    );


}

export default CoffeeMenu;

const styles = StyleSheet.create({
    container: {
      position: "relative"
      
    },
  
    add: {
      position: "absolute",
      top: 166,
      left: 120,
      backgroundColor: '#bc3908',
      borderBottomEndRadius: 20,
      borderTopStartRadius: 20
      
    },
    icon: {
        position: 'absolute',
        padding: 2,
        right: 0,
        top: 70

    }
  });