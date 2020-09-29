import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WeekList from '../screens/WeekList';
import SearchFood from '../screens/SearchFood';
import AddFood from '../screens/AddFood';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerTintColor: 'orange',
  headerStyle: {backgroundColor: '#4b4b4b'},
  headerBackTitle: 'Back',
};

const WeekListStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Wochenplan" component={WeekList} />
      <Stack.Screen name="Gericht suchen" component={SearchFood} />
    </Stack.Navigator>
  );
};

const AddFoodStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Gericht hinzufügen" component={AddFood} />
    </Stack.Navigator>
  );
};

export {WeekListStackNavigator, AddFoodStackNavigator};
