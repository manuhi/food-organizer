import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTheme} from 'react-native-paper';

import {WeekListStackNavigator, AddFoodStackNavigator} from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const theme = useTheme();
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
        activeTintColor: theme.colors.text,
        inactiveTintColor: theme.colors.accent,
        style: {
          backgroundColor: theme.colors.primary,
        },
      }}>
      <Tab.Screen name="Wochenplan" component={WeekListStackNavigator} />
      <Tab.Screen name="Gericht hinzufügen" component={AddFoodStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
