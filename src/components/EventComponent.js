import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

const EventComponent = ({ event, img, navigation, id }) => {

    return (
        <TouchableOpacity onPress={() => navigation.navigate('EventDetails', { id })}>
            <View style={styles.container}>
                <Image style={styles.imageStyle} source={{uri: img}}/> 
                <Text style={styles.textStyle}> {event} </Text>
            </View> 
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'red',
        borderWidth: 5,
        margin: 20
    },
    imageStyle: {
        width: 300,
        height: 200, 
    },
    textStyle: {
        width: 300,
        height: 35, 
        backgroundColor: 'yellow',
        textAlign: 'center' 
    }
});

export default withNavigation(EventComponent);