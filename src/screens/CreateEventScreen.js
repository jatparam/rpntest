import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const CreateEventScreen = () => {
    const [eventName, setEventName] = useState('');
    const [eventDescribe, setEventDescribe] = useState('');
    
    return (
        <View>
            <Text>This Screen will eventually be used to create events</Text>
            <TextInput 
            style={styles.textInput} 
            autoCapitalize='none'
            placeholder='Enter Name of Event'
            autoCorrect={false}
            onChangeText={(newValue) => setEventName(newValue) }
            />
            <Text>Replace with Something to select Date</Text>
            <TextInput 
            style={styles.textInput} 
            autoCapitalize='none'
            placeholder='Enter Description of Event'
            autoCorrect={false}
            onChangeText={(newValue) => setEventDescribe(newValue) }
            />
            <Text>Replace with Something to invite friends</Text>
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

export default CreateEventScreen