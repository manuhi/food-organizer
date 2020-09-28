import React from 'react';
import {
  StatusBar,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { WeekListStackScreen } from './components/WeekList'
import { AddFoodStackScreen } from './components/AddFood'

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render () {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Wochenplan') {
                  iconName = focused ? 'list' : 'list-outline';
                } else if (route.name === 'Gericht hinzufügen') {
                  iconName = focused ? 'add-circle' : 'add-circle-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'orange',
              inactiveTintColor: 'gray',
              style: {
                backgroundColor: '#4b4b4b',
              }
            }}
          >
            <Tab.Screen name="Wochenplan" component={WeekListStackScreen} />
            <Tab.Screen name="Gericht hinzufügen" component={AddFoodStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </>
    )
  }
}

