import { StyleSheet, Text, View, Pressable, ScrollView} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from "react";

function ProductModal({onPress}) {

    return(
        <ScrollView 
        style={styles.content}
        className="bg-gray-200 w-full h-96 "
         >
            <View className="ml-20 mt-2 space-y-4">
                <View className="">
                    <View>
                    <Text className="font bold text-lg">Milk</Text>
                    </View>   
                    <View className="flex-row space-x-4">
                    <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={20} color="black" />
                    <Text>Full-fat-milk</Text>
                    </View>   

                    <View className="flex-row space-x-4">
                    <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={20} color="black" />
                    <Text>Lactose free milk</Text>
                    </View>     
                    <View className="flex-row space-x-4">
                    <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={20} color="black" />
                    <Text>soy milk</Text>
                    </View>  
                    <View className="flex-row space-x-4">
                    <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={20} color="black" />
                    <Text>Almond milk(+0.75)</Text>
                    </View> 
                    <View className="flex-row space-x-4">
                    <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={20} color="black" />
                    <Text>Oat milk(+0.50)</Text>
                    </View> 
                    <View className="flex-row space-x-4">
                    <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={20} color="black" />
                    <Text>Full-fat-milk</Text>
                    </View>  
                </View>
                <View>
                    <View>
                        <Text>Whipped Cream</Text>
                    </View>
                    <View className="flex-row space-x-4">
                    <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={20} color="black" />
                    <Text>Full-fat-milk</Text>
                    </View>
                    <View className="flex-row space-x-4">
                    <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={20} color="black" />
                    <Text>Full-fat-milk</Text>
                    </View>
                </View>
                <View>
                    <Text>Caffeine</Text>
                    <View className="flex-row space-x-4">
                    <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={20} color="black" />
                    <Text>Without caffeine</Text>
                    </View>   
                </View>

              
             
            </View>
        
        </ScrollView>
    );
}

export default ProductModal;

const styles = StyleSheet.create({
   content: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: 'absolute',
    bottom: 0
   },
  
})