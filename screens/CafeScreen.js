import { Text, View } from "react-native";
import CafeTop from "../components/CafeTop"
import CafeSelect from "../components/CafeSelect"
import CafeNear from "../components/CafeNear"

function Cafe() {
    return(
        <View>
            <View>
               <CafeTop />
            </View>
            <View className="mx-4 mt-4">
                <CafeSelect />
            </View>
            <View className="mx-4 mt-4">
                <CafeNear />
            </View>
        </View>
    )
}

export default Cafe;