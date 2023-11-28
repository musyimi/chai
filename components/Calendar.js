import React, {useState} from 'react';
import { Text, View } from 'react-native';
import {Calendar} from 'react-native-calendars';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const App = () => {
  const [selected, setSelected] = useState('');

  return (
    <View className="space-y-3">
        <View className="flex-row justify-between">
            <Text>Scheduled pick up</Text>
            <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={20} color="black" />
        </View>
        <View>
            <Text>Choose date</Text>
        </View>
        <Calendar
        onDayPress={day => {
            setSelected(day.dateString);
        }}
        markedDates={{
            [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
        }}
        />
    </View>
    
   
  );
};

export default App;