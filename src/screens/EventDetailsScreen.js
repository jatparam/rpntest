import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native';
import { Context as EventContext } from '../context/EventContext';

const EventDetailsScreen = ({ navigation }) => {
    const { state } = useContext(EventContext)
    
    const event = state.find((event) => event.id === navigation.getParam('id'))

    return (
        <ScrollView>
        <View style={styles.container} >
            <View style={styles.eventContainer} >
                <Image style={styles.imageStyle} source={{uri: event.img}}/> 
                <Text>{event.name}</Text>
                <Text>{event.describe}</Text>
            </View>
            <View style={styles.mapContainer} >
                <Text>Map View Should be Here</Text>
            </View>
            <View style={styles.friendsContainer} >
                <Text>Icons of Friends Should be Here</Text>
            </View>
            <Button title="About Business" onPress={() => navigation.navigate('BusinessDetails')}/>
            <Button title="Buy Ticket" />
            <Button title='Edit This Event' onPress={() => navigation.navigate('EditEvent', { id: event.id})}/>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: 'green',
        borderWidth: 5,
        marginTop: 5,
        height: 800,
    },
    eventContainer: {
        alignItems: 'center'
    },
    imageStyle: {
        width: 300,
        height: 200, 
    },
    friendsContainer: {
        borderColor: 'blue',
        borderWidth: 5,
        paddingVertical: 10, 
        paddingHorizontal: 50
    },
    mapContainer: {
        borderColor: 'blue',
        borderWidth: 5,
        paddingVertical: 90, 
        paddingHorizontal: 90,
        margin: 20
    }
});

export default EventDetailsScreen

// containter height should equal the height of the phone that the app is rendering on 