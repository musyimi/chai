import { StatusBar } from 'expo-status-bar';
import { Text, View , StyleSheet, TextInput, ScrollView, Pressable } from "react-native";
import { Ionicons , Feather} from '@expo/vector-icons';
import Colors from '../constants/colors';
import CoffeeTile from "../components/CoffeeTile";
import FrequentlyOrderedTile from "../components/FrequentlyOrderedTile";
import Search from '../components/Search';



function HomePageScreen({navigation}) {

    function onPressHandler() {
        navigation.navigate('Product');
    }

    function onCafePressHandler() {
       navigation.navigate('Cafe')
    }

    return(
        <>       
        <View style={styles.container}>
            <StatusBar hidden={true}/>
            <View >
                <View className="flex flex-col bg-primary1 h-56 rounded-b-2xl ">
                    <View className="flex-row justify-center py-6 ">
                    <Text className="font-bold text-2xl text-orange-500 ">Kibandaski</Text>
                    </View>
                    <View className="flex-row justify-between mx-4">
                        <Text className="text-white text-lg">Good morning, user</Text>
                        <Ionicons name="notifications" size={24} color="white" />
                    </View>
                    <View className="flex-row justify-between mx-4 my-2">
                        <Text className="text-white text-lg ">Your cafe: Kwa Mathee</Text>
                        <Pressable
                          onPress={onCafePressHandler}
                        >
                           <Text className="text-white font-bold text-lg">
                                change
                            </Text>
                        </Pressable>
                    </View>
                    <View className="flex-row ml-24">
                        <Text className="text-white">Ngara close, Nairobi</Text>
                    </View>
                
                </View>   
                <View style={styles.search}> 
                    <View className="flex-row mt-48">
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
                    <CoffeeTile onPress={onPressHandler}/>
                </ScrollView>   
                <View className="mx-4 mt-4">
                    <Text className="font-bold text-lg">Frequently Ordered</Text>
                </View>
                <ScrollView>
                   <FrequentlyOrderedTile onPress={onPressHandler} />
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

