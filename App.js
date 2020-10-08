import React, {useState, useCallback, useMemo} from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

import {DrawerContent} from './components/screens/DrawerContent';

import TabNavigation from './components/navigation/TabNavigator';

import { PreferencesContext } from './components/PreferencesContext'

const Drawer = createDrawerNavigator();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = useCallback(() => {
    return setIsDarkTheme(!isDarkTheme);
  }, [isDarkTheme]);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isDarkTheme,
    }),
    [toggleTheme, isDarkTheme]
  );

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      primary: '#9999FF',
      background: '#ffffff',
      text: '#333333',
      surface: '#F5F5F5',
      // accent: '#606060',
    },
  };
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      primary: '#9999FF',
      background: '#333333',
      text: '#ffffff',
      surface: '#444444',
      tabActive: ''
    },
  };
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={TabNavigation} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
};

export default App;
