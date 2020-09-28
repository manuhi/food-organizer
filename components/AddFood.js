import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
	StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
} from 'react-native';

function AddFoodScreen({ navigation }) {
	return (
			<SafeAreaView style={styles.outer}>
				<ScrollView>
						<View>
						  <Text style={styles.dummy}>Add Food!</Text>
						</View>
				</ScrollView>
			</SafeAreaView>
	);
}

const AddFoodStack = createStackNavigator();

export const AddFoodStackScreen = () => {
  return (
    <AddFoodStack.Navigator screenOptions={{
          headerTintColor: 'orange',
          headerStyle: { backgroundColor: '#4b4b4b' },
        }}
      >
      <AddFoodStack.Screen name="Wochenplan" component={AddFoodScreen} />
    </AddFoodStack.Navigator>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: '#2b2b2b',
  },
  scrollView: {
    
  },
  dummy: {
    color: '#00BFFF',
    fontSize: 26,
    textAlign: 'center',
    marginTop: 20
  }
});
