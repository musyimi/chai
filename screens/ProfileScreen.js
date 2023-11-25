import { Text, View, StyleSheet } from "react-native";
import Profile from "../components/Profile";
import Account from "../components/Account";
import Notifications from "../components/Notifications";

function ProfileScreen() {
    return(
        <>
        <View>
            <View  className="bg-primary1 h-44 rounded-b-2xl  ">
              <Text className="mt-12 mx-4 text-2xl text-white font-semibold">Profile</Text>
            </View>
            <View style={styles.profile} className="mx-4">
               <Profile />
            </View>

            <View className="mt-4 mx-4">
                <Text className="font-bold ">Account</Text>
            </View>
        </View>
        <View className="mx-4 mt-2">
            <Account/>
        </View>
        <View className="mt-4 mx-4">
                <Text className="font-bold ">Notifications</Text>
        </View>
        <View className="mx-4 mt-2">
           <Notifications/>
        </View>
        </>
        
    );

};
export default ProfileScreen;

const styles = StyleSheet.create({
    profile: {
        marginTop: -36
    }
})