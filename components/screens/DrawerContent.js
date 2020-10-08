/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import {View, StyleSheet} from 'react-native';
import {
  useTheme,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import { PreferencesContext } from '../PreferencesContext'

import Ionicons from 'react-native-vector-icons/Ionicons';

export function DrawerContent(props) {
  const theme = useTheme();
  const { toggleTheme, isDarkTheme } = useContext(PreferencesContext);

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <Drawer.Section style={{...styles.drawerSection}}>
            <DrawerItem
              icon={({color, size}) => (
                <Ionicons name="restaurant" color={color} size={size} />
              )}
              active="true"
              label="Wochenplan"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Einstellungen">
            <TouchableRipple onPress={() => toggleTheme()}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Ionicons name="log-out" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            // signOut();
            console.log('Sign out');
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
