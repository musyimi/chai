import { Text, View , StyleSheet} from "react-native";
import { AntDesign, Feather, Octicons } from '@expo/vector-icons';

function Account() {
    return(
        <View className="divide-y rounded bg-slate-200 p-2">
            <View className="flex-row space-x-8 p-2">
               <AntDesign name="filetext1" size={24} color="black" />
               <Text className="font-semibold text-lg">Account details</Text>
            </View>
            <View className="flex-row space-x-8 p-2">
               <Feather name="dollar-sign" size={24} color="black" />
               <Text className="font-semibold text-lg">Payment details</Text>
            </View>
            <View className="flex-row space-x-8 p-2">
               <Octicons name="calendar" size={24} color="black" />
               <Text className="font-semibold text-lg">Order history</Text>
            </View>
            <View className="flex-row space-x-8 p-2">
               <AntDesign name="staro" size={24} color="black" />
               <Text className="font-semibold text-lg">Rewards</Text>
            </View>
            <View className="flex-row space-x-8 p-2">
               <AntDesign name="tagso" size={24} color="black" />
               <Text className="font-semibold text-lg">Student discount</Text>
            </View>
        </View>
    );
}

export default Account;

const styles = StyleSheet.create({

})