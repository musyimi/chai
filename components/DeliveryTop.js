import { StyleSheet, Text, View } from "react-native"

function DeliveryTop() {
    return(
        <>
         <View className="h-36 bg-primary1 rounded-b-2xl">
            <View className="mt-14 ml-10">
               <Text className="text-white text-xl">Delivery Method</Text>
            </View>
            
        </View>
        <View className="h-18  rounded-full mx-4 bg-primary4"
            style={styles.delivery}
        >
            <View className="flex-row">
                <View className="h-16 w-44 rounded-full bg-primary3"
                   style={styles.text}
                >
                    <Text className="text-white text-lg" >Pick-up</Text>
                </View>
                <View className="h-16 w-44 rounded-full bg-primary4"
                   style={styles.text}
                >
                  <Text className="text-primary1 text-lg">Delivery</Text>
                </View>
            </View>
     
        </View>
        </>
        
    )
}

export default DeliveryTop;

const styles = StyleSheet.create({
   delivery: {
    marginTop: -30
   },
   text: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})