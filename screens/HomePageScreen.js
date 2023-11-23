import { Text, View , StyleSheet, TextInput, ScrollView } from "react-native";
import { Ionicons , EvilIcons, Feather} from '@expo/vector-icons';
import Colors from '../constants/colors';
import CoffeeTile from "../components/CoffeeTile";
import FrequentlyOrderedTile from "../components/FrequentlyOrderedTile";

function HomePageScreen() {
    return(
        <>       
        <View style={styles.container}>
            <View >
                <View className="flex flex-col bg-primary1 h-44 rounded-b-2xl ">
                    <View className="flex-row justify-center py-2 ">
                    <Text className="text-white font-bold text-2xl ">Kibandaski</Text>
                    </View>
                    <View className="flex-row justify-between mx-4">
                        <Text className="text-white text-lg">Good morning, user</Text>
                        <Ionicons name="notifications" size={24} color="white" />
                    </View>
                    <View className="flex-row justify-between mx-4 my-2">
                        <Text className="text-white">Your cafe: Kwa Mathee</Text>
                    </View>
                
                </View>   
                <View style={styles.search}> 
                    <View className="flex-row pt-36">
                        <View className=" flex-row space-x-56 ml-4 p-2 rounded-full border bg-primary5 border-gray-300">
                            <TextInput className="text-lg pl-2 " placeholder="Search"/>
                            <View className="bg-orange-600 rounded-full p-2">
                            <Feather name="search" size={32} color="white" />
                            </View>                  
                        </View>

                    </View>
                </View>  
                <View className="mt-10 mx-6 ">
                    <Text className="font-bold text-gray-800 text-lg">New In</Text>
                </View> 
                <ScrollView>
                    <CoffeeTile />
                </ScrollView>   
                <View className="mx-4 mt-4">
                    <Text className="font-bold text-lg">Frequently Ordered</Text>
                </View>
                <ScrollView>
                   <FrequentlyOrderedTile />
                </ScrollView> 
            </View>
        </View>
        </>
    );

}

const styles = StyleSheet.create({
    container: {
     position: 'relative'
    },
    search: {
     position: "absolute",
    }
 });

export default HomePageScreen;
