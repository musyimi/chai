import { Text, View , StyleSheet, ScrollView} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

function CategoryItem() {
    return(
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="ml-4 space-x-6"
        >
            <View className="border-box h-10 w-28 rounded-full bg-primary3">
                <View className="flex-row space-x-2 m-2 ">
                    <View className="bg-primary5  rounded-full ">
                    <MaterialCommunityIcons name="food-fork-drink" size={24} color="orange" />
                    </View>           
                <Text className="text-sm text-white ">Hot drinks</Text>             
                </View>        
            </View>

            <View className="border-box h-10 w-28 rounded-full bg-primary3">
                <View className="flex-row space-x-2 m-2 ">
                    <View className="bg-primary5  rounded-full ">
                    <MaterialCommunityIcons name="food-fork-drink" size={24} color="orange" />
                    </View>           
                <Text className="text-sm text-white ">Cold drinks</Text>             
                </View>        
            </View>
            <View className="border-box h-10 w-28 rounded-full bg-primary3">
                <View className="flex-row space-x-2 m-2 ">
                    <View className="bg-primary5  rounded-full ">
                    <MaterialCommunityIcons name="food-fork-drink" size={24} color="orange" />
                    </View>           
                <Text className="text-sm text-white ">Snacks</Text>             
                </View>        
            </View>

             <View className="border-box h-10 w-28 rounded-full bg-primary3">
                <View className="flex-row space-x-2 m-2 ">
                    <View className="bg-primary5  rounded-full ">
                    <MaterialCommunityIcons name="food-fork-drink" size={24} color="orange" />
                    </View>           
                <Text className="text-sm text-white ">Snacks</Text>             
                </View>        
            </View>
        </ScrollView>
    );

}

export default CategoryItem;

const styles = StyleSheet.create({

})