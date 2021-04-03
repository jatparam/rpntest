import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView, Button, FlatList } from 'react-native';
import EventComponent from '../components/EventComponent';
import { Context as EventContext } from '../context/EventContext';

const HomeScreen = ({navigation}) => {
    const { state, addEvent } = useContext(EventContext)
    
    return (
        <ScrollView>
            <View style={styles.viewStyles}>
                <FlatList 
                    data={state}
                    keyExtractor={(event) => event.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => {
                        return (
                                <EventComponent event={item.name} img={item.img} id={item.id} /> 
                            )
                    }}
                    nestedScrollEnabled={false}
                />
            </View>
            <Button title='Temporary Button' onPress={() => navigation.navigate('CreateEvent')}/>
            <Button title='Add New Event' onPress={addEvent}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewStyles: {
        alignItems: 'center',
        borderColor: 'green',
        borderWidth: 5,
    }
});

export default HomeScreen