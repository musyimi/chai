import { Text, View, StyleSheet , TextInput } from "react-native";
import { EvilIcons } from '@expo/vector-icons';


function Search() {
    return (
        <View style={styles.search}>
            <View>
                <TextInput 
                    placeholder="Search"
                    className="h-14 mx-4 p-4 border border-gray-200 bg-gray-200 rounded-full"
                >
                </TextInput>
                <View style = {styles.icon}>
                    <EvilIcons  name="search" size={30} color="white" />
                </View>
            </View>

        </View>
    );

}


export default Search;

const styles = StyleSheet.create({
    search: {
        position: 'relative'
    },
    icon: {
        position: 'absolute', 
        right: 16,
        top: 1,
        backgroundColor: '#ca6702',
        padding: 14,
        borderRadius: 60
    }
});

