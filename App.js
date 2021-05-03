import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CreateEventScreen from './src/screens/CreateEventScreen';
import HomeScreen from './src/screens/HomeScreen';
import EventDetailsScreen from './src/screens/EventDetailsScreen';
import EditEventScreen from './src/screens/EditEventScreen';
import { Provider as EventProvider } from './src/context/EventContext';
import BusinessDetailsScreen from './src/screens/BusinessDetailsScreen';
import MyEventsScreen from './src/screens/MyEventsScreen';
import SearchScreen from './src/screens/SearchScreen';
import MyAccountScreen from './src/screens/MyAccountScreen';


const exploreFlow = createStackNavigator({
  Home: HomeScreen,
  EventDetails: EventDetailsScreen,
  EditEvent: EditEventScreen,
  BusinessDetails: BusinessDetailsScreen
})

const navigator = createBottomTabNavigator({
  exploreFlow: exploreFlow,
  MyEvents: MyEventsScreen,
  Search: SearchScreen,
  CreateEvent: CreateEventScreen,
  MyAccount: MyAccountScreen
});

const App = createAppContainer(navigator)

export default () => {
  return (
    <EventProvider>
      <App />
    </EventProvider>
  )
};

