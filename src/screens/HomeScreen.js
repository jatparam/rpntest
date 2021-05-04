import React, { useContext } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';
import EventComponent from '../components/EventComponent';
import { Context as EventContext } from '../context/EventContext';

const HomeScreen = ({navigation}) => {
    const { state } = useContext(EventContext)
    
    return (
            <View style={styles.viewStyles}>
                <FlatList 
                    data={state}
                    keyExtractor={(event) => event.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => {
                        return (  
                                <EventComponent event={item.name} img={item.img} id={item.id} describe={item.describe} /> 
                            )
                    }}
                    nestedScrollEnabled={false}
                />
            </View>
            
      
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