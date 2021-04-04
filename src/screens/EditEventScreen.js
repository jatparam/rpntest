import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button} from 'react-native';
import { Context as EventContext } from '../context/EventContext';

const EditEventScreen = ({navigation}) => {
    const { state, addEvent, editEvent } = useContext(EventContext)
    const event = state.find((event) => event.id === navigation.getParam('id'))

    const [eventName, setEventName] = useState(event.name);
    const [eventDescribe, setEventDescribe] = useState(event.describe);


    return (
        <View>
            <Text>Edit Name of Event</Text>
            <TextInput 
            style={styles.textInput} 
            autoCapitalize='none'
            value={eventName}
            autoCorrect={false}
            onChangeText={(newValue) => setEventName(newValue) }
            />
            <Text>Edit Description of Event</Text>
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
                title="Submit Edits!" 
                onPress={() => editEvent(event.id, eventName, eventDescribe, () => {
                    navigation.navigate('Home');
                })}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default EditEventScreen