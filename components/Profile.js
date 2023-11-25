import { Text, View , StyleSheet} from "react-native";
import { Feather, Entypo } from '@expo/vector-icons';

function Profile() {
   return(
    <View style={styles.profile}>
        <View className="box-border h-20 mx-2 p-4 border border-gray-200 bg-gray-200 rounded-full">
            
        </View>
        <View style={styles.img} 
             className="box-border h-16 w-16  border border-gray-400 rounded-full ml-4 mt-2">
 
        </View>
        <View
         className="flex-row ml-24 mt-4"
         style={styles.name}
         >
            <View>
                <Text className="font-bold">Laurs Vat</Text>
                <View className="flex-row mt-2 space-x-1">
                   <Entypo name="star" size={24} color="orange" />
                   <Text>124 points</Text>
                </View>
                
            </View>
            <View className="ml-24">
               <Feather name="edit" size={24} color="black" />
            </View>
        </View>

       
    </View>
   );
}

export default Profile;

styles = StyleSheet.create({
  profile: {
    position: 'relative'
  },
  img: {
    position: 'absolute'
  },
  name: {
    position: 'absolute',
    
  }
})