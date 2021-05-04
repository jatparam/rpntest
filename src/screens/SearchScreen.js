import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const SearchScreen = () => {
    return (
            <View>
                <Text> Search Screen </Text>
            </View>
            
      
    )
}

SearchScreen.navigationOptions = {
    title: 'Search',
    tabBarIcon: <FontAwesome name='search' size={20} />
};

const styles = StyleSheet.create({
   
});


export default SearchScreen