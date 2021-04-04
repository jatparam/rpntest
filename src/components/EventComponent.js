import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as EventContext } from '../context/EventContext';

const EventComponent = ({ event, img, navigation, id, describe }) => {
    const { deleteEvent } = useContext(EventContext)

    return (
        <TouchableOpacity onPress={() => navigation.navigate('EventDetails', { id })}>
            <View style={styles.container}>
                <Image style={styles.imageStyle} source={{uri: img}}/> 
                <Text style={styles.textStyle}> {event} - {describe} </Text>
                <Button 
                title='Delete Event' 
                onPress={() => deleteEvent(id)} 
                />
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