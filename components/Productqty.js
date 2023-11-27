import { Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

function Productqty() {
    return(
        <View className="h-32 w-10 p-2 space-y-4  bg-primary3 rounded-full">
            <AntDesign name="plus" size={24} color="white" />
             <Text className="pl-2 text-lg text-white">2</Text>
            <AntDesign name="minus" size={24} color="white" />
            
        </View>
    );
}

export default Productqty;