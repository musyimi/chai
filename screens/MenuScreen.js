import { Text, View, StyleSheet } from "react-native";


import Search from "../components/Search";
import CategoryItem from "../components/CategoryItem";
import CoffeeMenu from "../components/CoffeeMenu";

function MenuScreen() {
    return (
        <View >
           <View className="bg-primary1 h-44 rounded-b-2xl  ">
            <Text className="mt-12 mx-4 text-2xl text-white font-semibold">Menu</Text>
           </View>
           <View style={styles.search}>
              <Search /> 
           </View>
           <View className="mx-4 mt-4">
             <Text>Categories</Text>
           </View>
           <View className="mt-2">
              <CategoryItem />
           </View>
           <View className="flex-row mt-4 mx-6 space-x-4">
                <View>
                    <CoffeeMenu />
                </View>
                <View>
                    <CoffeeMenu />
                </View>
           </View>
           <View className="flex-row mt-4 mx-6 space-x-4">
                <View>
                    <CoffeeMenu />
                </View>
                <View>
                    <CoffeeMenu />
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