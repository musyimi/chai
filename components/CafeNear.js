import { Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

function CafeNear() {
    return(
        <View className="space-y-2">
            <View className="flex-row justify-between">
               <Text className="font-medium text-base">cafes near me</Text>
               <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={20} color="black" />
            </View>
            <View className="flex-row space-x-3">
                <Text>Turn on location to see nearby cafes. </Text>
                <Text className="text-primary3">Turn on</Text>
            </View>
            <View className="space-y-3">
                <View className="flex-row justify-between">
                    <Text>List</Text>
                    <Text>Map</Text>
                </View>
                <View className="space-y-2">
                    <View className=" flex-row h-24 rounded-2xl  bg-primary5">
                        <View className="h-24 w-24 rounded-2xl bg-primary2">
                        </View>
                        <View className="flex-row mt-8 space-x-14">
                            <View className="ml-2">
                                <Text className="font-medium text-sm">KIbandaski Cafe</Text>
                                <Text>Open: 8:00am - 22:00pm</Text>
                            </View>
                            <View>
                            <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={20} color="black" />
                            </View>
                        </View>
                    </View>
                    <View className=" flex-row h-24 rounded-2xl  bg-primary5">
                        <View className="h-24 w-24 rounded-2xl bg-primary2">
                        </View>
                        <View className="flex-row mt-8 space-x-14">
                            <View className="ml-2">
                                <Text className="font-medium text-sm">KIbandaski Cafe</Text>
                                <Text>Open: 8:00am - 22:00pm</Text>
                            </View>
                            <View>
                            <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={20} color="black" />
                            </View>
                        </View>
                    </View>
                    <View className=" flex-row h-24 rounded-2xl  bg-primary5">
                        <View className="h-24 w-24 rounded-2xl bg-primary2">
                        </View>
                        <View className="flex-row mt-8 space-x-14">
                            <View className="ml-2">
                                <Text className="font-medium text-sm">KIbandaski Cafe</Text>
                                <Text>Open: 8:00am - 22:00pm</Text>
                            </View>
                            <View>
                            <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={20} color="black" />
                            </View>
                        </View>
                    </View>
                </View>    

            </View>
            <View className=" mt-2 space-y-2">
                <View className="flex-row justify-between">
                  <Text className="font-medium">Chosen cafe</Text>
                  <Text>Kibandaski, Ngara</Text>
                </View>
                <View className="flex-row justify-around"> 
                    <View className="h-10 w-36 bg-primary1 rounded-3xl"
                        style={styles.text} 
                    >
                        <Text className="text-white">Save</Text>
                    </View>
                    <View className="h-10 w-36 border border-primary1 rounded-3xl" 
                         style={styles.text} 
                         >
                       <Text className="text-promary1" >Cancel</Text>
                    </View>
                </View>
                
            </View>

        </View>
    )
}

export default CafeNear;

const styles = StyleSheet.create({
    text: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
})