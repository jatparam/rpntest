import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const MyEventsScreen = () => {
    return (
            <View>
                <Text> My Event Screen </Text>
            </View>
            
      
    )
}

MyEventsScreen.navigationOptions = {
    title: 'My Events',
    tabBarIcon: <FontAwesome name='ticket' size={20} />
};

const styles = StyleSheet.create({
   
});

export default MyEventsScreen