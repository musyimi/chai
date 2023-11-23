import { Text, View, TextInput, Button, Pressable, StyleSheet } from "react-native";
import { SimpleLineIcons, AntDesign , MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';

function RegisterAndLoginScreen({onPress, navigation}) {
   function pressHandler() {
      navigation.navigate('Home');
   }

   return(
    <>
    <View style={styles.container}>
        <View className="flex flex-col bg-primary1 h-40 rounded-b-2xl  ">
            <Text className="text-2xl pt-12 px-4 font-bold text-white">Let's get you signed in!</Text>
        </View>
        <View style={styles.authentication}>
            <View className="flex flex-row mx-4 bg-primary5   rounded-full ">
                <Text className=" inline-block px-14 py-4 text-gray-500 bg-primary5 rounded-full text-xl">Sign In</Text>
                <Text className="inline-block px-14 py-4 text-white bg-primary3 rounded-full  text-xl ">Register</Text>
            </View>
            <View>
               <TextInput className="px-4 py-4 bg-primary5 mx-4 rounded-full mt-4" placeholder="Email"/>
            </View>
            <View className="flex-row flex-1 mx-4 bg-primary5 rounded-full mt-4">
               <TextInput className="flex-1 px-4 py-4 " 
               placeholder="Password"/>
               <View className="flex-row items-center mr-4">
                 <Ionicons name="eye-outline" size={24} color="black" />
               </View>
                
            </View>
            <View className="flex flex-row justify-end mx-6 mt-4">
                <Text className="text-sm text-orange-600">Forgot Password?</Text>
            </View>
            <Pressable 
               onPress={pressHandler}
               className="flex-row justify-center mt-4"
               >
                <Text className="px-24 py-4 bg-primary1 rounded-lg text-white ">Login</Text>
            </Pressable>
            <View className="flex-row justify-center">
              <Text className="mt-4">Or login with</Text>
            </View>
            <View className="flex flex-row mx-12 justify-evenly mt-6">
                <Pressable className="border-2 border-orange-400 rounded-md p-6">
                   <SimpleLineIcons name="social-facebook" size={32} color="black"  />     
                </Pressable>
                <Pressable className="border-2 border-orange-400 rounded-md p-6">
                    <AntDesign name="googleplus" size={32} color="black" />
                </Pressable>
                <Pressable className="border-2 border-orange-400 rounded-md p-6">
                   <MaterialCommunityIcons name="apple" size={32} color="black" />
                </Pressable>
            </View>
            <View className="flex-row justify-center mt-16">
                <Text>Already have an account?</Text>
                <Text className="text-orange-600 ml-2">Login Now</Text>
            </View>
        
        </View>
    </View>
    </>
    
   );
}

const styles = StyleSheet.create({
  container: {
     position: "relative"
  },
  authentication: {
    position: "absolute",
    marginTop: 136
  }
});

export default RegisterAndLoginScreen;