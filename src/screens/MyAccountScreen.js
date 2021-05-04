import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const MyAccountScreen = () => {
    return (
            <View>
                <Text> My Account Screen </Text>
            </View>
            
      
    )
}

MyAccountScreen.navigationOptions = {
    title: 'My Account',
    tabBarIcon: <FontAwesome name='user' size={20} />
};

const styles = StyleSheet.create({
   
});

export default MyAccountScreen