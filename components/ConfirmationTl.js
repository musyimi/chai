import { Text, View } from "react-native"

function ConfirmationTl() {
    return(
        <View className="space-y-2">
            <View className="flex-row justify-between">
               <Text className="font-medium">Pick-up time</Text>
               <Text >8:00am</Text>
            </View>
            <View className="flex-row justify-between">
               <Text className="font-medium">Pick-up Location</Text>
               <Text>Ngara, Jamu</Text>
            </View>

        </View>
    )
}

export default ConfirmationTl