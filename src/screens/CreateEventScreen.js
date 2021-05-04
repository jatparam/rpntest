import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context as EventContext } from '../context/EventContext';
import { FontAwesome } from '@expo/vector-icons';

const CreateEventScreen = ({ navigation }) => {
    const [eventName, setEventName] = useState('');
    const [eventDescribe, setEventDescribe] = useState('');
    const { addEvent } = useContext(EventContext);
    
    return (
        <View>
            <Text>Enter Name of Event</Text>
            <TextInput 
            style={styles.textInput} 
            autoCapitalize='none'
            value={eventName}
            autoCorrect={false}
            onChangeText={(newValue) => setEventName(newValue) }
            />
            <Text>Enter Description of Event</Text>
            <TextInput 
            style={styles.textInput} 
            autoCapitalize='none'
            value={eventDescribe}
            autoCorrect={false}
            onChangeText={(newValue) => setEventDescribe(newValue) }
            />
            <Text>Replace with Something to invite friends</Text>
            <Text>Replace with Something to select Date</Text>
            <Button 
                title="Create New Event!" 
                onPress={() => addEvent(eventName, eventDescribe, () => {
                    navigation.navigate('Home');
                })}
            />
        </View>
    )
}

CreateEventScreen.navigationOptions = {
    title: 'Create Events',
    tabBarIcon: <FontAwesome name='plus' size={20} />
};

const styles = StyleSheet.create({
    textInput: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default CreateEventScreen