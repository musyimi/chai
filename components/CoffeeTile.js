import { Pressable, ScrollView, Text, View ,StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function CoffeeTile({onPress}) {
    return(
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-2 mt-4 ml-2"
      >
         <Pressable
          className="bg-gray-300 rounded-3xl"
          onPress={onPress}
          >
          <View style={styles.container}>
            <View className="box-border h-52 w-36">
              <View className="box-border h-24 w-32 m-2 bg-gray-400 rounded-2xl">
                <Text></Text>
              </View>
              <View className="mx-2">
                <Text className="font-bold text-base">Caramel</Text>
                <Text className="font-bold text-base">Machiato</Text>
              </View>
              <View className="flex flex-row mx-2 mt-3">
                <Text className="font-semibold text-orange-600 pr-1">Kshs.</Text>
                <Text className="font-bold text-md">240</Text>
              </View>
            </View>
            <View style={styles.add}>
              <View className="p-2">
                 <AntDesign name="plus" size={24} color="white" />
              </View>            
           </View>
          </View>
 
         </Pressable>
         <Pressable className="bg-gray-300 rounded-3xl"  onPress={onPress}>
          <View style={styles.container}>
            <View className="box-border h-52 w-36">
              <View className="box-border h-24 w-32 m-2 bg-gray-400 rounded-2xl">
                <Text></Text>
              </View>
              <View className="mx-2">
                <Text className="font-bold text-base">Caramel</Text>
                <Text className="font-bold text-base">Machiato</Text>
              </View>
              <View className="flex flex-row mx-2 mt-3">
                <Text className="font-semibold text-orange-600 pr-1">Kshs.</Text>
                <Text className="font-bold text-md">240</Text>
              </View>
            </View>
            <View style={styles.add}>
              <View className="p-2">
                 <AntDesign name="plus" size={24} color="white" />
              </View>            
           </View>
          </View>
           
           
             
         </Pressable>
         <Pressable className="bg-gray-300 rounded-3xl"  onPress={onPress}>
          <View style={styles.container}>
            <View className="box-border h-52 w-36">
              <View className="box-border h-24 w-32 m-2 bg-gray-400 rounded-2xl">
                <Text></Text>
              </View>
              <View className="mx-2">
                <Text className="font-bold text-base">Caramel</Text>
                <Text className="font-bold text-base">Machiato</Text>
              </View>
              <View className="flex flex-row mx-2 mt-3">
                <Text className="font-semibold text-orange-600 pr-1">Kshs.</Text>
                <Text className="font-bold text-md">240</Text>
              </View>
            </View>
            <View style={styles.add}>
              <View className="p-2">
                 <AntDesign name="plus" size={24} color="white" />
              </View>            
           </View>
          </View>
           
           
             
         </Pressable>
         <Pressable className="bg-gray-300 rounded-3xl"  onPress={onPress}>
          <View style={styles.container}>
            <View className="box-border h-52 w-36">
              <View className="box-border h-24 w-32 m-2 bg-gray-400 rounded-2xl">
                <Text></Text>
              </View>
              <View className="mx-2">
                <Text className="font-bold text-base">Caramel</Text>
                <Text className="font-bold text-base">Machiato</Text>
              </View>
              <View className="flex flex-row mx-2 mt-3">
                <Text className="font-semibold text-orange-600 pr-1">Kshs.</Text>
                <Text className="font-bold text-md">240</Text>
              </View>
            </View>
            <View style={styles.add}>
              <View className="p-2">
                 <AntDesign name="plus" size={24} color="white" />
              </View>            
           </View>
          </View>
           
           
             
         </Pressable>

      </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    position: "relative"
  },

  add: {
    position: "absolute",
    top: 166,
    right: 0,
    backgroundColor: '#bc3908',
    borderBottomEndRadius: 20,
    borderTopStartRadius: 20
    
  }
});