import { Text, View, StyleSheet } from "react-native";


import Search from "../components/Search";
import CategoryItem from "../components/CategoryItem";
import CoffeeMenu from "../components/CoffeeMenu";

function MenuScreen({navigation}) {
    function onPressHandler() {
        navigation.navigate('Product');
    }
   
    return (
        <View >
           <View className="bg-primary1 h-44 rounded-b-2xl  ">
            <Text className="mt-12 mx-4 text-2xl text-white font-semibold">Menu</Text>
           </View>
           <View style={styles.search}>
              <Search /> 
           </View>
           <View className="mx-4 mt-4">
             <Text className="font-bold text-lg">Categories</Text>
           </View>
           <View className="mt-2">
              <CategoryItem onPress={onPressHandler}/>
           </View>
           <View className="flex-row mt-4 mx-6 space-x-4">
                <View>
                    <CoffeeMenu onPress={onPressHandler}/>
                </View>
                <View>
                    <CoffeeMenu onPress={onPressHandler}/>
                </View>
           </View>
           <View className="flex-row mt-4 mx-6 space-x-4">
                <View>
                    <CoffeeMenu onPress={onPressHandler}/>
                </View>
                <View>
                    <CoffeeMenu onPress={onPressHandler}/>
                </View>
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        position: 'relative'
    },
    search: {
        marginTop: -26
    }
});
export default MenuScreen;