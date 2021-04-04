import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { Context as EventContext } from '../context/EventContext';

const EventDetailsScreen = ({ navigation }) => {
    const { state } = useContext(EventContext)
    
    const event = state.find((event) => event.id === navigation.getParam('id'))

    return (
        <View style={styles.container} >
            <View>
                <Image style={styles.imageStyle} source={{uri: event.img}}/> 
                <Text>{event.name}</Text>
                <Text>{event.describe}</Text>
                <Text>Icons of Friends going to the event</Text>
                <Text>Buy Ticket with Price Amount</Text>
                <Text>Location</Text>
            </View>
            <View>
                <Image style={styles.imageStyle} source={{uri: 'https://picsum.photos/300/200'}}/> 
                <Text>About the Business</Text>
                <Text>Previous Events by the Business</Text>
            </View>
            <Button title='Edit This Event' onPress={() => navigation.navigate('EditEvent', { id: event.id})}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: 'green',
        borderWidth: 5,
        marginTop: 25,
        height: 670
    },
    imageStyle: {
        width: 300,
        height: 200, 
    },
});

export default EventDetailsScreen

// containter height should equal the height of the phone that the app is rendering on 