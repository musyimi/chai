import { Text, View } from "react-native";
import FrequentlyOrderedTile from "../components/FrequentlyOrderedTile";

function FavouritesScreen() {
    return(
        <View>
            <View  className="bg-primary1 h-44 rounded-b-2xl  ">
              <Text className="mt-12 mx-4 text-2xl text-white font-semibold">Favourites</Text>
            </View>
            <View className="flex-row justify-end mx-4 mt-4">
                <Text className="text-gray-500 font-bold">4 items</Text>
            </View>
            <View>
                <FrequentlyOrderedTile />
            </View>
            
        </View>
    );

};
export default FavouritesScreen;