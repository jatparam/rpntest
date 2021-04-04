import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { Context as EventContext } from '../context/EventContext';

const EventForm = ({ navigation, id }) => {
    return (
        <View>
            <Text> Eventually will extract logic from Edit and Create Screen into this component</Text>
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

export default EventForm