import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './components/navigation/TabNavigator';

export default class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </>
    );
  }
}
