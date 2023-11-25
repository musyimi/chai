import { Text, View } from "react-native";
import { AntDesign,Ionicons, Octicons, FontAwesome } from '@expo/vector-icons';

function Notifications() {
    return(
        <View className="divide-y rounded bg-slate-200 p-2">
             <View className="flex-row space-x-8 p-2">
               <Octicons name="bell" size={24} color="black" />
               <Text className="font-semibold text-lg">Recieve notifications</Text>
            </View>
            <View className="flex-row space-x-8 p-2">
              <FontAwesome name="location-arrow" size={24} color="black" />
               <Text className="font-semibold text-lg">Share location data</Text>
            </View>
        </View>
    );
}

export default Notifications;