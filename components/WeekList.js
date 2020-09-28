import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
	StyleSheet,
  SafeAreaView,
	FlatList,
  View,
	Text,
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const size = 50

function WeekListScreen({ navigation }) {
	return (
			<SafeAreaView style={styles.outer}>
				<View style={styles.listContainer}>
					<FlatList
						data={WEEK}
						renderItem={({ item }) =>
            	<View style={styles.item}>
								<Text style={styles.weekday}>{item.weekday}</Text>
								<View style={styles.itemView}>
									<Text style={styles.title}>{item.title}</Text>
									<TouchableOpacity onPress={() => navigation.navigate('Gericht', {item: item})} >
										<Ionicons name="pencil" color="white" size={30} />
									</TouchableOpacity>
								</View>
							</View>
						}
						// renderItem={renderItem(navigation)}
						keyExtractor={item => item.id}
					/>
				</View>
			</SafeAreaView>
	);
}

function FoodScreen({ route, navigation }) {
	const { item } = route.params;
  return (
    <SafeAreaView style={styles.outer}>
			<View style={styles.searchContainer}>
				<TextInput placeholder="Suche nach Gerichten" 
									 placeholderTextColor="white" 
									 color="white">
				</TextInput>
				<TouchableOpacity>
					<Ionicons name="search" color="white" size={40} />
				</TouchableOpacity>
			</View>
      <Text style={styles.title}>{item.weekday + ' ' + item.title}</Text>
			<TouchableOpacity onPress={() => navigation.navigate('Wochenplan')}>
				<Text>Zurück</Text>
			</TouchableOpacity>
    </SafeAreaView>
  );
}


const WeekListStack = createStackNavigator();

export const WeekListStackScreen = () => {
  return (
    <WeekListStack.Navigator screenOptions={{
          headerTintColor: 'orange',
          headerStyle: { backgroundColor: '#4b4b4b' },
        }}
      >
      <WeekListStack.Screen name="Wochenplan" component={WeekListScreen} />
      <WeekListStack.Screen name="Gericht" component={FoodScreen} />
    </WeekListStack.Navigator>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: '#2b2b2b',
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10
	},
	item: {
    backgroundColor: '#4b4b4b',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 16,
	},
	itemView: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	weekday: {
		color: 'white'
	},
  title: {
		fontSize: 18,
		color: 'orange',
		textAlign: 'left'
	},
	searchContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderWidth: 1,
		borderColor: 'orange',
		margin: 10,
		padding: 5
	},
	search: {
		
	}
});

const WEEK = [
  {
		id: '1',
		weekday: 'Montag',
    title: 'Spaghetti Bolognese',
  },
  {
		id: '2',
		weekday: 'Dienstag',
    title: 'Käsespätzle',
  },
  {
		id: '3',
		weekday: 'Mittwoch',
    title: 'Rahmsoße',
	},
	{
		id: '4',
		weekday: 'Donnerstag',
    title: 'Lasagne',
	},
	{
		id: '5',
		weekday: 'Freitag',
    title: 'Salat',
	},
	{
		id: '6',
		weekday: 'Samstag',
    title: 'Überbackenes Baguette',
	},
	{
		id: '7',
		weekday: 'Sonntag',
    title: 'Burger mit Pommes',
  },
];
