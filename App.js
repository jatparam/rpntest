import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CreateEventScreen from './src/screens/CreateEventScreen';
import HomeScreen from './src/screens/HomeScreen';
import EventDetailsScreen from './src/screens/EventDetailsScreen';
import EditEventScreen from './src/screens/EditEventScreen';
import { Provider as EventProvider } from './src/context/EventContext';


const navigator = createStackNavigator({
  Home: HomeScreen,
  CreateEvent: CreateEventScreen,
  EventDetails: EventDetailsScreen,
  EditEvent: EditEventScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Home Page'
  }
});

const App = createAppContainer(navigator)

export default () => {
  return (
    <EventProvider>
      <App />
    </EventProvider>
  )
};

