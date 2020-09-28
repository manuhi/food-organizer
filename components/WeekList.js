/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  Text,
  Image,
} from 'react-native';
import {
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  getWeekList,
  getFood,
  filterFoodList,
  setWeekday,
} from '../service/data';

function displayFoodNameAndImage(item) {
  if (item.foodId != null) {
    const food = getFood(item.foodId);
    return (
      <>
        <Image style={styles.logo} source={{uri: food.image}} />
        <Text style={styles.weeklistTitle}>{food.name}</Text>
      </>
    );
  } else {
    return <Text style={styles.weeklistTitleNA}>Kein Gericht geplant</Text>;
  }
}

function WeekListScreen({route, navigation}) {
  const {refresh} = route.params || true;
  return (
    <SafeAreaView style={styles.outer}>
      <View style={styles.listContainer}>
        <FlatList
          data={getWeekList()}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.weekday}>{item.weekday}</Text>
              <View style={styles.itemView}>
                {displayFoodNameAndImage(item)}
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Gericht', {weekday: item.weekday})
                  }>
                  <Ionicons name="pencil" color="white" size={20} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setWeekday(item.weekday, null);
                    navigation.navigate('Wochenplan', {refresh: true});
                  }}>
                  <Ionicons name="trash" color="white" size={20} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
          extraData={refresh}
        />
      </View>
    </SafeAreaView>
  );
}

function FoodScreen({route, navigation}) {
  const [searchText, setSearchText] = useState('');
  const [foodList, setFoodList] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const {weekday} = route.params;
  return (
    <SafeAreaView style={styles.outer}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Suche nach Gerichten"
          placeholderTextColor="white"
          color="white"
          onChangeText={(text) => setSearchText(text)}
        />
        <TouchableOpacity
          onPress={() => setFoodList(filterFoodList(searchText))}>
          <Ionicons name="search" color="white" size={40} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchList}>
        <Text style={styles.searchTitle}>{weekday}</Text>
        <FlatList
          data={foodList}
          renderItem={({item}) => {
            const color = item.id === selectedId ? 'white' : 'orange';
            return (
              <TouchableWithoutFeedback onPress={() => setSelectedId(item.id)}>
                <View style={styles.item}>
                  <View style={[styles.itemView]}>
                    <Text style={{color: color}}>{item.name}</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.searchButtonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Wochenplan')}>
          <Text style={{color: 'white'}}>Zurück</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setWeekday(weekday, {selectedId}.selectedId);
            navigation.navigate('Wochenplan', {refresh: true});
          }}>
          <Text style={{color: 'white'}}>Speichern</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const WeekListStack = createStackNavigator();

export const WeekListStackScreen = () => {
  return (
    <WeekListStack.Navigator
      screenOptions={{
        headerTintColor: 'orange',
        headerStyle: {backgroundColor: '#4b4b4b'},
      }}>
      <WeekListStack.Screen name="Wochenplan" component={WeekListScreen} />
      <WeekListStack.Screen name="Gericht" component={FoodScreen} />
    </WeekListStack.Navigator>
  );
};

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: '#2b2b2b',
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
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
    justifyContent: 'flex-end',
  },
  weekday: {
    color: 'white',
  },
  weeklistTitle: {
    fontSize: 18,
    color: 'orange',
    width: 250,
  },
  weeklistTitleNA: {
    fontSize: 12,
    color: '#FFCC99',
    width: 250,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'orange',
    margin: 10,
    padding: 5,
  },
  searchList: {
    alignItems: 'center',
  },
  searchTitle: {
    fontSize: 24,
    color: 'orange',
  },
  searchButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    paddingTop: 40,
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 8,
    marginTop: 5,
  },
});
