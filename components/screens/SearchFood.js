/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  Text,
  TextInput,
} from 'react-native';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {filterFoodList, setWeekday} from '../../service/data';

const SearchFoodScreen = ({route, navigation}) => {
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
      <View style={styles.searchListContainer}>
        <View style={styles.searchList}>
          <Text style={styles.searchTitle}>{weekday}</Text>
          <FlatList
            data={foodList}
            renderItem={({item}) => {
              const color = item.id === selectedId ? 'white' : 'orange';
              return (
                <TouchableWithoutFeedback
                  onPress={() => setSelectedId(item.id)}>
                  <View style={styles.item}>
                    <Text style={{color: color, textAlign: 'center'}}>
                      {item.name}
                    </Text>
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: '#2b2b2b',
  },
  item: {
    backgroundColor: '#4b4b4b',
    padding: 10,
    marginVertical: 6,
    width: 300,
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
  searchListContainer: {
    flexDirection: 'column',
  },
  searchList: {
    alignItems: 'center',
  },
  searchTitle: {
    fontSize: 24,
    color: 'orange',
    marginTop: 10,
  },
  searchButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    paddingTop: 40,
  },
});

export default SearchFoodScreen;
