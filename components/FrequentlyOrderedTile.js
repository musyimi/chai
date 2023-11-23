import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function FrequentlyOrderedTile() {
    return(
        <ScrollView 
          vertical
          showsVerticalScrollIndicator={false}
          className="mx-4 mt-4 space-y-2"
        >
            <Pressable className="bg-gray-300 rounded-lg">
                <View style={styles.container}>
                <View className="border-box h-28 flex-row ">
                    <View className="border-box h-24 w-20 m-2 rounded-lg bg-gray-500">

                    </View> 
                    <View>
                        <View className="mt-4">
                            <Text className="font-bold text-base">Caramel Machiato</Text>
                            <Text className="text-base">Large, oat milk</Text>
                            <View className="flex-row mt-4">
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
                      
     
                </View>
                </View>
                
            </Pressable>
            <Pressable className="bg-gray-300 rounded-lg">
                <View style={styles.container}>
                <View className="border-box h-28 flex-row ">
                    <View className="border-box h-24 w-20 m-2 rounded-lg bg-gray-500">

                    </View> 
                    <View>
                        <View className="mt-4">
                            <Text className="font-bold text-base">Caramel Machiato</Text>
                            <Text className="text-base">Large, oat milk</Text>
                            <View className="flex-row mt-4">
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
                      
     
                </View>
                </View>
                
            </Pressable>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative'
    },
    add: {
       position: 'absolute',
       top: 70,
       right: -124,
       backgroundColor: '#bc3908',
       borderBottomEndRadius: 6,
       borderTopStartRadius: 20
    }
});