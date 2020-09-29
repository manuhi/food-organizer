import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {WeekListStackNavigator, AddFoodStackNavigator} from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
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
        },
      }}>
      <Tab.Screen name="Wochenplan" component={WeekListStackNavigator} />
      <Tab.Screen name="Gericht hinzufügen" component={AddFoodStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
