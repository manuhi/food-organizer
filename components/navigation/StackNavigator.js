/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import WeekList from '../screens/WeekList';
import SearchFood from '../screens/SearchFood';
import AddFood from '../screens/AddFood';

const Stack = createStackNavigator();

const WeekListStackNavigator = ({navigation}) => {
  const theme = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: theme.colors.primary},
        headerBackTitle: 'Back',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Wochenplan"
        component={WeekList}
        options={{
          headerLeft: () => (
            <Ionicons
              name="menu"
              color={theme.colors.text}
              size={25}
              onPress={() => navigation.openDrawer()}
              style={{marginLeft: 5}}
            />
          ),
        }}
      />
      <Stack.Screen name="Gericht suchen" component={SearchFood} />
    </Stack.Navigator>
  );
};

const AddFoodStackNavigator = () => {
  const theme = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: theme.colors.primary},
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen name="Gericht hinzufügen" component={AddFood} />
    </Stack.Navigator>
  );
};

export {WeekListStackNavigator, AddFoodStackNavigator};
